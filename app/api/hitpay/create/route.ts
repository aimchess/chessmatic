import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { amount, studentName, email, phone, program, purpose } = body

    if (!amount || Number(amount) <= 0) {
      return NextResponse.json({ error: "Please enter a valid payment amount." }, { status: 400 })
    }

    const apiKey = process.env.HITPAY_API_KEY
    const apiUrl = process.env.HITPAY_API_URL || "https://api.hit-pay.com/v1"
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || req.nextUrl.origin || "https://chessmatic.com"

    // If API key is not yet configured, return helpful notice
    if (!apiKey) {
      return NextResponse.json(
        { 
          error: "HITPAY_NOT_CONFIGURED",
          message: "HitPay API key is not set in environment variables. Please provide your HITPAY_API_KEY in .env.local to activate instant checkouts."
        }, 
        { status: 503 }
      )
    }

    const referenceNumber = `CM-${Date.now().toString().slice(-6)}-${Math.floor(Math.random() * 900 + 100)}`
    const redirectUrl = `${baseUrl}/payments/success?ref=${referenceNumber}`
    const webhookUrl = `${baseUrl}/api/hitpay/webhook`

    const formData = new URLSearchParams()
    formData.append("amount", Number(amount).toFixed(2))
    formData.append("currency", "SGD")
    formData.append("email", email || "info@chessmatic.com")
    formData.append("name", studentName || "Student")
    if (phone) formData.append("phone", phone)
    formData.append("reference_number", referenceNumber)
    formData.append("purpose", purpose || `Chessmatic Tuition - ${program || "Coaching Session"}`)
    formData.append("redirect_url", redirectUrl)
    formData.append("webhook", webhookUrl)

    // Accept popular Singapore & global methods
    formData.append("payment_methods[]", "paynow_online")
    formData.append("payment_methods[]", "card")
    formData.append("payment_methods[]", "grabpay")
    formData.append("payment_methods[]", "shopeepay")

    const res = await fetch(`${apiUrl}/payment-requests`, {
      method: "POST",
      headers: {
        "X-BUSINESS-API-KEY": apiKey,
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    })

    const data = await res.json()

    if (!res.ok) {
      console.error("HitPay API Error:", data)
      return NextResponse.json(
        { error: data.message || data.error || "Failed to create payment checkout." },
        { status: res.status }
      )
    }

    return NextResponse.json({
      success: true,
      url: data.url,
      id: data.id,
      reference: referenceNumber
    })
  } catch (err: any) {
    console.error("HitPay Route Exception:", err)
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 })
  }
}

