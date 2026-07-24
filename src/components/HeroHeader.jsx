import React, { useState } from 'react';
import { Mail, ArrowUpRight, Code2, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function HeroHeader() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('denverdeleon21@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="pt-6 pb-10 space-y-6">
      {/* Avatar & Narrative Bio Header */}
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 pt-2">
        {/* DaisyUI hover-3d Tilt Avatar Component */}
        <div className="shrink-0 relative group">
          <div className="hover-3d">
            {/* 1st Child: Main Avatar Figure Content */}
            <figure className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden shadow-xl border border-base-300 bg-base-200">
              <img
                src="/avatar.png"
                alt="Dan Denver De Leon Portrait"
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              />
            </figure>
            {/* 8 Empty Div Children for 3D Mouse Tilt Tracking Zones */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          {/* Subtle Halftone Background Glow */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-neutral/20 to-transparent rounded-3xl blur-md -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Bio Header Content */}
        <div className="flex-1 space-y-3">
          {/* Top Pill Badges */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="badge badge-neutral font-mono text-[10px] tracking-wider uppercase">
              Vibe Engineering
            </span>
            <span className="badge badge-outline font-mono text-[10px] tracking-wider uppercase">
              Frontend & Full Stack
            </span>
            <span className="badge badge-ghost font-mono text-[10px] text-base-content/70">
              Available for Opportunities
            </span>
          </div>

          {/* Name & Role Title */}
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight font-sans text-base-content uppercase">
              Dan Denver De Leon
            </h1>
            <p className="text-sm md:text-base font-mono font-medium text-base-content/70 mt-1 flex items-center gap-2">
              <Code2 size={16} className="text-neutral-content/80" />
              VIBE ENGINEER / FRONTEND / FULL STACK
            </p>
          </div>

          {/* Engaging Narrative Bio */}
          <p className="text-xs md:text-sm text-base-content/80 leading-relaxed font-sans max-w-2xl">
            Passionate <span className="font-semibold text-base-content">Vibe Engineer, Frontend & Full-Stack Developer</span> dedicated to crafting high-aesthetic, fluid web applications with seamless user flows, responsive micro-interactions, and robust backend architectures. Driven by code aesthetics and interactive polish, I transform complex system requirements into clean, modern digital experiences that feel effortless and wows at first glance.
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
              <span>{copied ? 'Copied Email' : 'Email Me'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats Counter Bar (Positioned Below Hero Bio Header) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono pt-4 border-t border-base-300/40">
        <div className="relative p-3 rounded-xl bg-base-200/40 border border-base-300/40 overflow-hidden group">
          <div className="absolute inset-0 bg-halftone-grid opacity-20 group-hover:opacity-40 transition-opacity" />
          <span className="relative z-10 text-base font-extrabold text-base-content block">7+</span>
          <span className="relative z-10 text-[10px] text-base-content/60 uppercase tracking-widest block">Projects Built</span>
        </div>
        <div className="relative p-3 rounded-xl bg-base-200/40 border border-base-300/40 overflow-hidden group">
          <div className="absolute inset-0 bg-halftone-grid opacity-20 group-hover:opacity-40 transition-opacity" />
          <span className="relative z-10 text-base font-extrabold text-base-content block">3+</span>
          <span className="relative z-10 text-[10px] text-base-content/60 uppercase tracking-widest block">Work Roles</span>
        </div>
        <div className="relative p-3 rounded-xl bg-base-200/40 border border-base-300/40 overflow-hidden group">
          <div className="absolute inset-0 bg-halftone-grid opacity-20 group-hover:opacity-40 transition-opacity" />
          <span className="relative z-10 text-base font-extrabold text-base-content block">200+</span>
          <span className="relative z-10 text-[10px] text-base-content/60 uppercase tracking-widest block">Commits (2026)</span>
        </div>
        <div className="relative p-3 rounded-xl bg-base-200/40 border border-base-300/40 overflow-hidden group">
          <div className="absolute inset-0 bg-halftone-grid opacity-20 group-hover:opacity-40 transition-opacity" />
          <span className="relative z-10 text-base font-extrabold text-base-content block">1st</span>
          <span className="relative z-10 text-[10px] text-base-content/60 uppercase tracking-widest block">Hackathon Champ</span>
        </div>
      </div>
    </header>
  );
}
