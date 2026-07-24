import React, { useState } from 'react';
import { Mail, Phone, ArrowUpRight, Code2, Sparkles, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function HeroHeader() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('denverdeleon21@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="pt-6 pb-10">
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
        
        {/* DaisyUI hover-3d Tilt Avatar Component */}
        <div className="shrink-0 relative group">
          <div className="hover-3d">
            {/* 9 hover-3d child trigger nodes for 3D tilt tracking */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className="hover-3d-child w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden shadow-xl border border-base-300 bg-base-200">
              <img 
                src="/avatar.png" 
                alt="Dan Denver De Leon Portrait" 
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          {/* Subtle Halftone Background Glow */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-neutral/20 to-transparent rounded-3xl blur-md -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Bio Header Content */}
        <div className="flex-1 space-y-3">
          {/* Top Pill Badges */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="badge badge-neutral font-mono text-[10px] tracking-wider uppercase">
              Developer Profile
            </span>
            <span className="badge badge-outline font-mono text-[10px] tracking-wider uppercase">
              Component
            </span>
            <span className="badge badge-ghost font-mono text-[10px] text-base-content/70">
              React + Tailwind + DaisyUI
            </span>
          </div>

          {/* Name & Role Title */}
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight font-sans text-base-content uppercase">
              Dan Denver De Leon
            </h1>
            <p className="text-sm md:text-base font-mono font-medium text-base-content/70 mt-1 flex items-center gap-2">
              <Code2 size={16} className="text-neutral-content/80" />
              FULL STACK / FRONT-END WEB DEVELOPER
            </p>
          </div>

          {/* Short Narrative Bio */}
          <p className="text-xs md:text-sm text-base-content/80 leading-relaxed font-sans max-w-2xl">
            Fresh graduate in <span className="font-semibold text-base-content">BS Information Technology</span> with a strong focus on building modern, responsive, and visually engaging web applications. Experienced in <span className="font-mono text-xs bg-base-200/80 px-1.5 py-0.5 rounded">React.js</span>, <span className="font-mono text-xs bg-base-200/80 px-1.5 py-0.5 rounded">Node.js</span>, <span className="font-mono text-xs bg-base-200/80 px-1.5 py-0.5 rounded">Laravel</span>, <span className="font-mono text-xs bg-base-200/80 px-1.5 py-0.5 rounded">Tailwind CSS</span>, and <span className="font-mono text-xs bg-base-200/80 px-1.5 py-0.5 rounded">DaisyUI</span> with proven experience leading web initiatives and capstone projects.
          </p>

          {/* Quick Contact & Resource Links Bar */}
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono">
            <a
              href="https://www.linkedin.com/in/dan-denver-de-leon-1887ab272/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-neutral btn-xs gap-1.5 tracking-wider font-mono text-[11px]"
            >
              <LinkedinIcon size={12} />
              LinkedIn
              <ArrowUpRight size={10} />
            </a>
            <a
              href="https://github.com/Izuuii"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline btn-xs gap-1.5 font-mono text-[11px]"
            >
              <GithubIcon size={12} />
              Github
              <ArrowUpRight size={10} />
            </a>
            <button
              onClick={handleCopyEmail}
              className="btn btn-ghost btn-xs bg-base-200/60 gap-1.5 font-mono text-[11px]"
            >
              {copied ? <Check size={12} className="text-emerald-500" /> : <Mail size={12} />}
              {copied ? 'Copied Email!' : 'denverdeleon21@gmail.com'}
            </button>
            <a
              href="tel:+639982323125"
              className="btn btn-ghost btn-xs bg-base-200/60 gap-1.5 font-mono text-[11px]"
            >
              <Phone size={12} />
              +63 998 232 3125
            </a>
          </div>
        </div>

      </div>

      {/* Metrics Row Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 p-4 rounded-2xl bg-base-200/40 font-mono text-center">
        <div>
          <span className="text-xl md:text-2xl font-bold text-base-content block">2025</span>
          <span className="text-[10px] text-base-content/60 uppercase tracking-widest">BSIT Graduate</span>
        </div>
        <div>
          <span className="text-xl md:text-2xl font-bold text-base-content block">7+</span>
          <span className="text-[10px] text-base-content/60 uppercase tracking-widest">Projects Built</span>
        </div>
        <div>
          <span className="text-xl md:text-2xl font-bold text-base-content block">12+</span>
          <span className="text-[10px] text-base-content/60 uppercase tracking-widest">Certifications</span>
        </div>
        <div>
          <span className="text-xl md:text-2xl font-bold text-base-content block">1st</span>
          <span className="text-[10px] text-base-content/60 uppercase tracking-widest">Hackathon Place</span>
        </div>
      </div>
    </header>
  );
}
