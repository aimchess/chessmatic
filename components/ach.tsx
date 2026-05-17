import React from 'react';
import { Trophy, Medal, Globe, GraduationCap, CheckCircle2, Calendar, MapPin, IndianRupee } from "lucide-react";

export default function FMAwardSection() {
  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Single High-Impact Visual */}
          <div className="relative group">
            {/* Main Image Container */}
            <div className="relative aspect-[4/5] md:aspect-[9/11] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden bg-violet-950 shadow-2xl shadow-purple-200 border-4 border-violet-50">
              <img 
                src="/fide-manvendra.jpeg" 
                alt="Madhvendra Pratap Sharma National Bronze Medalist" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-violet-950/80 via-transparent to-transparent" />
              
              {/* Floating Badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-3">
                <span className="bg-orange-500 text-white text-[10px] md:text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">
                  National Bronze
                </span>
                <span className="bg-white/10 backdrop-blur-md text-white text-[10px] md:text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] border border-white/20">
                  Age: 12 Years
                </span>
              </div>

              {/* Prize Tag */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-500 p-2 rounded-lg">
                    <Trophy size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-80 leading-none mb-1">National Prize</p>
                    <p className="text-2xl font-black flex items-center tracking-tight">
                      <IndianRupee size={20} /> 58,000
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50" />
          </div>

          {/* RIGHT COLUMN: Achievement Data */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Heading Section */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-orange-600 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs justify-center lg:justify-start">
                <Medal size={16} /> 35th National U-17 Championship
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-violet-950 uppercase tracking-tighter leading-[0.9]">
                National <br />
                <span className="text-orange-500">Bronze Medalist</span>
              </h2>
              <p className="text-lg md:text-xl font-bold text-violet-800 uppercase tracking-widest border-b-2 border-violet-100 pb-4 inline-block">
                FM Madhvendra Pratap Sharma
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-violet-50 p-5 rounded-2xl border border-violet-100">
                <p className="text-[10px] font-bold text-violet-400 uppercase tracking-widest mb-1">FIDE Rating</p>
                <p className="text-xl font-black text-violet-950">2353</p>
              </div>
              <div className="bg-violet-50 p-5 rounded-2xl border border-violet-100">
                <p className="text-[10px] font-bold text-violet-400 uppercase tracking-widest mb-1">Category</p>
                <p className="text-xl font-black text-violet-950 uppercase">U-17 Open</p>
              </div>
            </div>

            {/* Event Context Card */}
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-2 rounded-lg shrink-0">
                  <MapPin className="text-orange-600" size={20} />
                </div>
                <div>
                  <h4 className="font-black text-violet-950 uppercase text-xs tracking-widest">Venue</h4>
                  <p className="text-slate-600 font-medium">Rajpath Club, Ahmedabad, Gujarat</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-2 rounded-lg shrink-0">
                  <Calendar className="text-orange-600" size={20} />
                </div>
                <div>
                  <h4 className="font-black text-violet-950 uppercase text-xs tracking-widest">Event Dates</h4>
                  <p className="text-slate-600 font-medium">30th March to 7th April 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-2 rounded-lg shrink-0">
                  <CheckCircle2 className="text-orange-600" size={20} />
                </div>
                <div>
                  <h4 className="font-black text-violet-950 uppercase text-xs tracking-widest">Authorized By</h4>
                  <p className="text-slate-600 font-medium leading-tight">Gujarat State Chess Association & AICF</p>
                </div>
              </div>
            </div>

            {/* Academy Branding Footer */}
            <div className="bg-violet-950 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 text-white shadow-xl shadow-purple-100 text-left relative overflow-hidden group">
               <GraduationCap className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform" size={100} />
               <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-widest text-orange-400 mb-2">Training & Support</p>
                <h4 className="text-lg md:text-xl font-black uppercase leading-tight">
                  Genius Chess Academy
                </h4>
                <p className="text-xs md:text-sm font-bold opacity-70 mt-1">
                  International School of Chess (Bari-Sadri)
                </p>
              </div>
            </div>

            <p className="text-[10px] font-black text-violet-300 uppercase tracking-[0.4em]">
              Gens Una Sumus ♟️👏
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
