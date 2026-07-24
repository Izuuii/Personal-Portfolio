import React, { useState } from 'react';
import { Mail, Phone, ArrowUp, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('denverdeleon21@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 mt-8 bg-base-100">
      {/* Contact Callout Banner */}
      <div className="bg-neutral text-neutral-content rounded-2xl p-6 sm:p-8 mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden shadow-lg">
        {/* Background halftone accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-halftone-dots opacity-15 mask-radial-fade pointer-events-none" />

        <div className="space-y-2 max-w-xl">
          <span className="badge badge-outline border-white/30 text-white font-mono text-[10px] uppercase tracking-widest">
            Let's Connect
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight uppercase font-sans">
            Ready to collaborate or hire?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-content/80 font-sans leading-relaxed">
            I'm currently available for Full Stack and Front-End developer opportunities, freelance projects, and technical initiatives.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={handleCopyEmail}
            className="btn btn-sm bg-white text-black hover:bg-neutral-200 border-0 font-mono text-xs gap-1.5 shadow-md"
          >
            {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
            {copied ? 'Email Copied!' : 'Copy Email'}
          </button>
          <a
            href="mailto:denverdeleon21@gmail.com"
            className="btn btn-sm btn-outline border-white/40 text-white hover:bg-white/10 font-mono text-xs gap-1.5"
          >
            <Mail size={14} />
            Send Email
          </a>
        </div>
      </div>

      {/* Footer Navigation & Copyright */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-base-content/60">
        <div>
          <p className="font-semibold text-base-content text-sm tracking-tight">Dan Denver De Leon</p>
          <p className="text-[11px] text-base-content/50">Full Stack & Front-End Web Developer • Philippines</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-[11px]">
          <a 
            href="mailto:denverdeleon21@gmail.com" 
            className="hover:text-base-content transition-colors flex items-center gap-1"
          >
            <Mail size={12} />
            Email
          </a>
          <a 
            href="tel:+639982323125" 
            className="hover:text-base-content transition-colors flex items-center gap-1"
          >
            <Phone size={12} />
            +63 998 232 3125
          </a>
          <a 
            href="https://github.com/Izuuii" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-base-content transition-colors flex items-center gap-1"
          >
            <GithubIcon size={12} />
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/dan-denver-de-leon-1887ab272/" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-base-content transition-colors flex items-center gap-1"
          >
            <LinkedinIcon size={12} />
            LinkedIn
          </a>
          <button 
            onClick={scrollToTop} 
            className="btn btn-ghost btn-xs btn-square hover:bg-base-200 ml-2"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
