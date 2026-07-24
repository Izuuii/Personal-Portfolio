import React, { useState } from 'react';
import { 
  Home as HomeIcon,
  FolderGit2, 
  Briefcase, 
  Layers, 
  Award, 
  GraduationCap, 
  Mail, 
  Phone, 
  Menu,
  X,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import ThemeController from './ThemeController';

export default function Sidebar({ currentPage, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon, badge: 'Overview' },
    { id: 'projects', label: 'Projects', icon: FolderGit2, badge: '4' },
    { id: 'experience', label: 'Experience', icon: Briefcase, badge: '3 roles' },
    { id: 'stack', label: 'Stack', icon: Layers, badge: 'Skills' },
    { id: 'certifications', label: 'Certifications', icon: Award, badge: 'New' },
  ];

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Top Navbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-base-100/90 backdrop-blur-md px-4 py-3 flex items-center justify-between shadow-xs">
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="avatar">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img src="/avatar.png" alt="Dan Denver" className="object-cover" />
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-sm tracking-tight">Dan Denver De Leon</h1>
            <p className="text-[10px] font-mono text-base-content/60 uppercase tracking-wider">Vibe Engineer</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeController compact={true} />
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="btn btn-ghost btn-xs btn-square"
            aria-label="Open menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-0 bottom-0 left-0 z-50 w-56 lg:w-60 bg-base-100 flex flex-col justify-between p-4 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        pt-16 lg:pt-6
      `}>
        {/* Brand / Profile Header */}
        <div className="space-y-4">
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 pb-3 cursor-pointer group"
          >
            <div className="avatar placeholder">
              <div className="w-10 rounded-full shadow-sm overflow-hidden bg-neutral text-neutral-content group-hover:scale-105 transition-transform">
                <img src="/avatar.png" alt="Dan Denver De Leon" className="object-cover" />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="font-bold text-sm tracking-tight truncate group-hover:text-neutral transition-colors">
                Dan Denver
              </h2>
              <p className="text-[9px] font-mono text-base-content/60 uppercase tracking-widest truncate">
                Vibe Engineer / Full Stack
              </p>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-1">
            <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-base-content/40">
              Navigation
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-sans transition-all duration-200
                    ${isActive 
                      ? 'bg-neutral text-neutral-content font-semibold shadow-xs' 
                      : 'hover:bg-base-200/80 text-base-content/80'
                    }
                  `}
                >
                  <span className="flex items-center gap-2.5">
                    <Icon size={14} className={isActive ? 'text-neutral-content' : 'text-base-content/60'} />
                    {item.label}
                  </span>
                  <span className={`badge badge-xs font-mono border-0 ${
                    isActive ? 'badge-ghost text-neutral-content bg-white/20' : 'badge-ghost text-base-content/60 bg-base-200'
                  }`}>
                    {item.badge}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="space-y-4 pt-4 border-t border-base-300/40">
          {/* Quick Contact Info */}
          <div className="space-y-1.5 text-[11px] font-mono">
            <a 
              href="mailto:denverdeleon21@gmail.com" 
              className="flex items-center gap-2 text-base-content/70 hover:text-base-content transition-colors truncate"
            >
              <Mail size={12} className="shrink-0" />
              <span className="truncate">denverdeleon21@gmail.com</span>
            </a>
            <a 
              href="tel:+639982323125" 
              className="flex items-center gap-2 text-base-content/70 hover:text-base-content transition-colors truncate"
            >
              <Phone size={12} className="shrink-0" />
              <span>+63 998 232 3125</span>
            </a>
            <a 
              href="https://github.com/Izuuii" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-base-content/70 hover:text-base-content transition-colors"
            >
              <GithubIcon size={12} className="shrink-0" />
              <span>github.com/Izuuii</span>
              <ExternalLink size={10} className="ml-auto opacity-50" />
            </a>
            <a 
              href="https://www.linkedin.com/in/dan-denver-de-leon-1887ab272/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-base-content/70 hover:text-base-content transition-colors"
            >
              <LinkedinIcon size={12} className="shrink-0" />
              <span>LinkedIn Profile</span>
              <ExternalLink size={10} className="ml-auto opacity-50" />
            </a>
          </div>

          {/* Theme Switcher & Mute Bar */}
          <div className="pt-2 flex items-center justify-between border-t border-base-300/30">
            <ThemeController />
          </div>

          {/* Copyright Footer */}
          <div className="text-[10px] font-mono text-base-content/40 flex items-center justify-between">
            <span>© 2026 Dan Denver</span>
            <span>v1.0.0</span>
          </div>
        </div>
      </aside>
    </>
  );
}
