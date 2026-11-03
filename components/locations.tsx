"use client"

import { motion } from "framer-motion"
import { MapPin, Navigation, Sparkles, Building2, CheckCircle2 } from "lucide-react"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export default function AcademyLocations() {
  const locations = [
    {
      id: "woodlands",
      name: "Woodlands Studio",
      isPrimary: true,
      tag: "Primary Academy & HQ",
      tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      area: "North Singapore",
      headline: "Flagship Training Studio",
      description:
        "Our central high-performance academy dedicated to adult coaching cohorts, FIDE Master private mentorship, cognitive agility programs, and weekly rapid tournaments.",
      features: [
        "In-person Adult Cohorts & Master 1-on-1s",
        "Official Woodlands Timetable & Saturday Arena",
        "Dedicated tactical analysis & library hub"
      ],
      whatsappMsg: "Hi Chessmatic! I'd like to book an in-person session at your primary Woodlands Studio."
    },
    {
      id: "punggol",
      name: "Punggol",
      isPrimary: false,
      tag: "Training Location",
      tagColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
      area: "North-East Singapore",
      headline: "North-East Training Hub",
      description:
        "Convenient in-person coaching hub serving adults, working professionals, and chess enthusiasts in Punggol, Sengkang, and surrounding North-East districts.",
      features: [
        "Adult beginner to intermediate coaching",
        "Flexible weekend & evening scheduling",
        "1-on-1 master mentoring & small groups"
      ],
      whatsappMsg: "Hi Chessmatic! I'm interested in chess coaching sessions at your Punggol location."
    },
    {
      id: "jurong-west",
      name: "Jurong West",
      isPrimary: false,
      tag: "Training Location",
      tagColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      area: "West Singapore",
      headline: "West Training Hub",
      description:
        "Dedicated location offering customized adult coaching, tactical masterclasses, and corporate executive sessions across the Jurong and Western region.",
      features: [
        "Adult strategic coaching cohorts",
        "Private 1-on-1 master faculty slots",
        "Corporate & executive training bookings"
      ],
      whatsappMsg: "Hi Chessmatic! I'm interested in chess coaching sessions at your Jurong West location."
    }
  ]

  return (
    <section id="locations" className="py-16 md:py-24 bg-[#0a192f] text-white font-sans relative overflow-hidden">
      {/* BACKGROUND ACCENTS */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
          backgroundSize: "28px 28px"
        }}
      />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 shadow-sm">
            <MapPin size={13} className="text-sky-400" />
            <span className="text-sky-300 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em]">
              Islandwide Presence
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[1000] tracking-tight leading-tight uppercase italic">
            Academy <span className="text-sky-400">Locations.</span>
          </h2>
          <p className="text-slate-300 font-medium text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Train in person at our flagship Woodlands studio or join our regional coaching hubs across Singapore.
          </p>
        </div>

        {/* LOCATION CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {locations.map((loc, idx) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-[32px] p-7 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                loc.isPrimary
                  ? "bg-gradient-to-b from-[#142d4c] to-[#0d2038] border-2 border-sky-400/50 shadow-[0_20px_50px_rgba(14,165,233,0.18)] ring-1 ring-sky-400/20"
                  : "bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 shadow-lg"
              }`}
            >
              {/* PRIMARY BADGE GLOW */}
              {loc.isPrimary && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-sky-500 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                  <Sparkles size={11} className="fill-white" />
                  <span>Primary Location</span>
                </div>
              )}

              <div>
                {/* TOP META */}
                <div className="flex items-center justify-between mb-4 mt-1">
                  <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${loc.tagColor}`}>
                    {loc.tag}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1">
                    <Navigation size={11} className="text-sky-400" />
                    {loc.area}
                  </span>
                </div>

                {/* NAME & HEADLINE */}
                <h3 className="text-2xl sm:text-3xl font-[1000] text-white tracking-tight mb-1 flex items-center gap-2">
                  <span>{loc.name}</span>
                </h3>
                <p className="text-sky-400 text-xs font-bold uppercase tracking-wider mb-4">
                  {loc.headline}
                </p>

                <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                  {loc.description}
                </p>

                {/* KEY HIGHLIGHTS */}
                <div className="space-y-2.5 pt-4 border-t border-white/10 mb-6">
                  {loc.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-200 font-medium">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ACTION BUTTON */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={getWhatsAppUrl(loc.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button
                    className={`w-full py-3.5 px-5 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${
                      loc.isPrimary
                        ? "bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg hover:scale-[1.02]"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/15"
                    }`}
                  >
                    <span>Inquire {loc.name}</span>
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM HELPER NOTE */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 font-medium inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10">
            <Building2 size={13} className="text-sky-400" />
            <span>Prefer virtual learning? Full live interactive curriculum also available via <strong>Online Zoom / Lichess batches</strong>.</span>
          </p>
        </div>

      </div>
    </section>
  )
}

