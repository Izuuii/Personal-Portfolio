import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Experience({ isPreview = false, onNavigate }) {
  const experiences = [
    {
      id: 'kmc-solutions',
      year: '2025 – PRESENT',
      initials: 'KMC',
      company: 'KMC - Solutions',
      employmentType: 'Full-time · Remote',
      location: 'Philippines · Remote',
      role: 'Jr. Full Stack Developer',
      dateRange: 'DEC 2025 – PRESENT',
      duration: 'CURRENT',
      description: [
        'Engineered AI chatbots for a central data-intelligence engine and client-facing pharmaceutical SaaS platform, implementing WebSocket answer streaming with dropped-connection recovery, multi-turn conversation persistence, and inline citation parsing with markdown theming.',
        'Drove V1 to V2 infrastructure migration for competitive intelligence SaaS, resolving monorepo drift, rewiring authentication/permissions to the V2 API, and building foundational read adapters consumed across all subsequent domain migrations.',
        'Developed Knowledge Graph UI from scratch to visualize complex pharmaceutical data relationships, engineering canvas rendering, dynamic layout panels, schema tabs, and interactive node-detail views.',
        'Owned end-to-end development of internal admin console managing data-collection infrastructure, building comprehensive dashboards (Collector Health, Scope Manager) with live filtering, pagination, bulk selection, and fleet-wide operational summaries.',
        'Built an AI Interviewer frontend from scratch and delivered early-stage feature development for multiple enterprise-level client applications.'
      ],
      skills: ['React.js', 'TypeScript', 'WebSockets', 'AI Chatbots / Streaming', 'Knowledge Graph Canvas', 'V2 Migration', 'Admin Consoles', 'Tailwind CSS']
    },
    {
      id: 'mk-trading',
      year: '2025',
      initials: 'MK',
      company: 'MK International Trading',
      employmentType: 'Full-time · Junior Role',
      location: 'Quezon, Philippines · On-site',
      role: 'Junior Full Stack Developer',
      dateRange: 'JUL 2025 – OCT 2025',
      duration: '4 MOS',
      description: [
        'Contributed to full-stack engineering and UI/UX design for Indigo App (Ride-Hailing Mobile & Web Application) using React Native, Express.js, Node.js, and PostgreSQL.',
        'Engineered real-time rider dispatch telemetry, user management across Rider, Customer apps, and Web Admin portal using WebSockets and TanStack Query state caching.',
        'Collaborated in agile sprint cycles, delivering intuitive ride booking interactions and real-time push notifications.'
      ],
      skills: ['React Native', 'React.js', 'Express.js', 'Node.js', 'PostgreSQL', 'Firebase', 'WebSockets', 'TanStack Query']
    },
    {
      id: 'legacy-globalsa',
      year: '2025',
      initials: 'LG',
      company: 'Legacy Global S.A. / Independent Engagements',
      employmentType: 'Contract · Lead Full Stack Architect',
      location: 'Panama / International · Remote',
      role: 'Lead Full Stack Architect & Team Lead',
      dateRange: 'JUL 2025 – OCT 2025',
      duration: '4 MOS',
      description: [
        'Architected LegacyGlobal: a multi-tenant international trade & commodity procurement portal with 3-tier role-based access control (Admin, Client, TriParty), integrating automated KYC document verification, proposal builders, and contract lifecycle workflows.',
        'Led full-stack engineering of LegaShop & LGGM multi-vendor marketplaces, bridging Python/Django REST API backend services with responsive React TypeScript interfaces for store management and catalog fulfillment.',
        'Engineered interactive 3D visualizations and real-time event telemetry utilizing Three.js, OGL, GSAP, Socket.io, and Recharts operational dashboards.',
        'Delivered high-impact client systems including AcadFlow (DepEd reporting automation) and AppliLoan (financial analytics dashboard with Supabase RLS security).'
      ],
      skills: ['TypeScript', 'React.js', 'Python (Django)', 'Three.js / OGL', 'GSAP', 'Socket.io', 'Supabase (RLS)', 'Radix UI', 'TanStack Query', 'Tailwind CSS']
    },
    {
      id: 'supsoft-tech',
      year: '2025',
      initials: 'ST',
      company: 'Supsoft Tech',
      employmentType: 'Internship (OJT) · UI/UX Team Lead',
      location: 'Quezon, Philippines · Remote',
      role: 'Web Developer Intern & UI/UX Lead',
      dateRange: 'MAR 2025 – JUN 2025',
      duration: '4 MOS',
      description: [
        'Received internal training in ReactJS and foundational lessons in Laravel under the guidance of the Team Lead.',
        'Integrated Laravel backend APIs with the React frontend using Axios for real-time verification in CertiCode certification platform.',
        'Designed & implemented the "Seminar History" table in user profiles and led a team of OJT interns in UI/UX redesign initiatives.',
        'Participated in Git/GitHub version control workflows and frontend responsiveness optimizations.'
      ],
      skills: ['React.js', 'Laravel', 'PHP', 'JavaScript', 'Axios', 'Tailwind CSS', 'Figma', 'Git/GitHub']
    }
  ];

  return (
    <section id="experience" className="py-10">
      {/* Back to Home button on dedicated page */}
      {!isPreview && onNavigate && (
        <div className="mb-6">
          <button 
            onClick={() => onNavigate('home')} 
            className="btn btn-ghost btn-xs font-mono text-xs gap-1.5 text-base-content/70 hover:text-base-content"
          >
            <ArrowLeft size={13} />
            Back to Home
          </button>
        </div>
      )}

      {/* Section Label Header */}
      <div className="mb-8">
        <div className="text-[11px] font-mono text-base-content/50 uppercase tracking-widest flex items-center gap-2">
          <span>02 — experience</span>
          <span className="h-px w-6 bg-base-300 inline-block" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-base-content lowercase font-sans mt-1">
          {isPreview ? 'Work Experience & OJT' : 'experience'}
        </h2>
        <p className="text-xs font-mono text-base-content/60 mt-2 max-w-2xl leading-relaxed">
          Full-stack engineering & software development — from enterprise ride-hailing & web apps to freelance commissions & OJT contributions.
        </p>
      </div>

      {/* HOME PAGE PREVIEW: Minimal 3-Column Table Row Layout */}
      {isPreview ? (
        <div className="divide-y divide-base-300/40 border-t border-b border-base-300/40">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              onClick={() => onNavigate && onNavigate('experience')}
              className="py-4 font-mono flex items-center justify-between gap-4 group cursor-pointer hover:bg-base-200/30 px-2 rounded-lg transition-colors"
            >
              <span className="text-xs text-base-content/50 w-16 shrink-0">
                {exp.year}
              </span>
              <span className="font-sans font-bold text-sm text-base-content flex-1 group-hover:text-neutral transition-colors">
                {exp.role}
              </span>
              <span className="text-xs text-base-content/60 text-right shrink-0">
                {exp.company}
              </span>
            </div>
          ))}
        </div>
      ) : (
        /* DEDICATED EXPERIENCE PAGE: Perfectly Centered Vertical Timeline Layout */
        <div className="border-l-2 border-base-300 space-y-12 py-2 ml-5 sm:ml-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-7 sm:pl-9 group">
              {/* 36px Circular Logo Node Centered 100% Exactly Over the 2px Vertical Timeline Line */}
              <div className="absolute -left-[19px] top-0 w-9 h-9 rounded-full border-2 border-base-300 bg-base-100 flex items-center justify-center font-mono text-[11px] font-bold text-base-content/80 shadow-xs group-hover:border-neutral transition-colors z-10">
                {exp.initials}
              </div>

              {/* Company & Role Details Header */}
              <div className="space-y-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-bold text-base-content tracking-tight font-sans">
                    {exp.company}
                  </h3>
                  <span className="font-mono text-[11px] text-base-content/50 uppercase">
                    {exp.location}
                  </span>
                </div>

                <p className="text-xs font-mono text-base-content/60">
                  {exp.employmentType}
                </p>

                {/* Role Title & Date Duration */}
                <div className="pt-2">
                  <h4 className="text-sm font-semibold text-base-content/90 font-sans">
                    {exp.role}
                  </h4>
                  <p className="text-[10px] font-mono text-base-content/50 uppercase tracking-wider mt-0.5">
                    {exp.dateRange} • {exp.duration}
                  </p>
                </div>
              </div>

              {/* Description Paragraphs / Bullet Highlights */}
              <div className="mt-3 space-y-2 text-xs leading-relaxed text-base-content/75 font-sans">
                {exp.description.map((paragraph, pIdx) => (
                  <p key={pIdx}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tech Skills Pills Cloud */}
              <div className="flex flex-wrap gap-2 pt-4">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-lg border border-base-300/70 bg-base-100/80 font-mono text-[11px] text-base-content/80 shadow-xs hover:border-neutral transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Preview See More Button */}
      {isPreview && onNavigate && (
        <div className="mt-8 text-center sm:text-right">
          <button
            onClick={() => onNavigate('experience')}
            className="btn btn-neutral btn-sm font-mono text-xs gap-2 rounded-xl group"
          >
            <span>View Full Experience History ({experiences.length})</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </section>
  );
}
