"use client"

import { motion } from "framer-motion"
import { 
  Mail, Phone, MapPin, Clock, 
  Facebook, Instagram, Youtube, 
  MessageCircle, Send, Target, Globe
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const navy = "#1a365d"
  const cyan = "#0ea5e9"

  return (
    <section className="py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HEADER (Unified Pill Style) */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center bg-[#f1f3f4] rounded-full p-1 border border-gray-200 mb-6">
            <span className="bg-white px-8 py-2 rounded-full text-[#1a365d] text-[10px] font-[1000] tracking-[0.3em] uppercase shadow-sm">
              Operational Support
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-[1000] text-[#1a365d] tracking-tighter leading-none italic uppercase">
            Get in <span style={{ color: cyan }}>Touch.</span>
          </h2>
        </div>

        {/* 2. GRID INTERFACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* LEFT: DOTTED CONTACT DETAILS */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative rounded-[45px] bg-[#1a365d] p-10 lg:p-14 overflow-hidden shadow-2xl flex flex-col justify-between"
          >
            {/* TECHNICAL DOT GRID */}
            <div className="absolute inset-0 opacity-[0.12] pointer-events-none" 
                 style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
            
            <div className="relative z-10 space-y-12">
              <div>
                <h3 className="text-white text-2xl font-[1000] tracking-tight mb-2 italic">Singapore HQ</h3>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Strategic Laboratory</p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 shrink-0 shadow-lg">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-1">Email Protocol</p>
                    <p className="text-white font-bold text-sm">admin@intchess.com.sg</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 shrink-0 shadow-lg">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-1">Direct Line</p>
                    <p className="text-white font-bold text-sm">+65 8430 2326</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 shrink-0 shadow-lg">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-1">Location</p>
                    <p className="text-white font-bold text-sm">Woodlands Premium Studio,<br/> Singapore</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 shrink-0 shadow-lg">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-1">Operating Hours</p>
                    <p className="text-white font-bold text-sm">Mon - Fri: 10:00 - 20:00<br/>Sat - Sun: 09:00 - 18:00</p>
                  </div>
                </div>
              </div>

              {/* SOCIAL CHANNELS */}
              <div className="pt-8 border-t border-white/5 flex gap-4">
                {[<Facebook size={18}/>, <Instagram size={18}/>, <Youtube size={18}/>, <MessageCircle size={18}/>].map((icon, i) => (
                  <div key={i} className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-sky-500 transition-all cursor-pointer shadow-lg">
                    {icon}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-sky-500/10 rounded-full blur-[100px]" />
          </motion.div>

          {/* RIGHT: INQUIRY FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#f8fafc] rounded-[45px] border border-gray-100 p-10 lg:p-14 shadow-xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[#1a365d] text-[10px] font-black uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" placeholder="Wagish" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-sky-500 transition-all shadow-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[#1a365d] text-[10px] font-black uppercase tracking-widest ml-1">Email Address</label>
                  <input type="email" placeholder="strategist@lab.com" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-sky-500 transition-all shadow-sm" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[#1a365d] text-[10px] font-black uppercase tracking-widest ml-1">Phone Number</label>
                  <input type="tel" placeholder="+65" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-sky-500 transition-all shadow-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[#1a365d] text-[10px] font-black uppercase tracking-widest ml-1">Inquiry Type</label>
                  <select className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-sky-500 transition-all shadow-sm appearance-none cursor-pointer">
                    <option>Adult Class Enquiry</option>
                    <option>Corporate Booking</option>
                    <option>Plank-Chess Challenge</option>
                    <option>Partnerships / Collaborations</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[#1a365d] text-[10px] font-black uppercase tracking-widest ml-1">Message</label>
                <textarea rows={5} placeholder="How can we help your performance journey?" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-sky-500 transition-all shadow-sm resize-none"></textarea>
              </div>

              <Button 
                style={{ backgroundColor: navy }}
                className="w-full hover:bg-[#0f213a] text-white py-8 rounded-2xl font-[1000] uppercase tracking-widest shadow-2xl transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-3"
              >
                Send Operational Intake
                <Send size={18} />
              </Button>
            </form>
          </motion.div>
        </div>

        {/* 3. FULL WIDTH MAP INTEGRATION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full h-[450px] rounded-[45px] overflow-hidden border-8 border-[#f8fafc] shadow-2xl"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.269046627063!2d103.78018593532714!3d1.434850785058564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141bd3933393939%3A0x673982839393939!2sWoodlands%2C%20Singapore!5e0!3m2!1sen!2ssg!4v1716383838383!5m2!1sen!2ssg"
            className="absolute inset-0 w-full h-full border-0 grayscale saturate-0 contrast-[1.1]"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
          
          {/* MAP LABEL */}
          <div className="absolute bottom-8 left-8 bg-[#1a365d] px-6 py-4 rounded-3xl shadow-2xl border border-white/10">
             <div className="flex items-center gap-3">
                <div className="p-2 bg-sky-500 rounded-lg shadow-lg shadow-sky-500/20"><Target size={16} className="text-white"/></div>
                <p className="text-white text-xs font-[1000] tracking-[0.2em] uppercase italic leading-none">Find the Lab</p>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}