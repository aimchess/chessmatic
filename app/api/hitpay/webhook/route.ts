import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text()
    const signature = req.headers.get("hitpay-signature")
    const webhookSalt = process.env.HITPAY_SALT

    if (!webhookSalt) {
      console.warn("HITPAY_SALT not configured in env. Skipping signature check.")
      return NextResponse.json({ received: true })
    }

    if (!signature) {
      return NextResponse.json({ error: "Missing Hitpay-Signature header" }, { status: 400 })
    }

    const computedSignature = crypto
      .createHmac("sha256", webhookSalt)
      .update(rawBody)
      .digest("hex")

    const isValid = crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(computedSignature)
    )

    if (!isValid) {
      return NextResponse.json({ error: "Invalid webhook signature" }, { status: 400 })
    }

    const event = JSON.parse(rawBody)
    console.log("Verified HitPay Webhook Event:", event)

    return NextResponse.json({ received: true, status: event.status })
  } catch (err: any) {
    console.error("HitPay Webhook Error:", err)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

