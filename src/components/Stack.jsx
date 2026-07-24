import React from 'react';
import { Layout, Server, Database, Wrench, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Stack({ isPreview = false, onNavigate }) {
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Front-End Development',
      icon: Layout,
      typeTag: 'Component',
      skills: [
        { name: 'React.js', level: 'Advanced', badgeClass: 'badge-neutral' },
        { name: 'JavaScript (ES6+)', level: 'Advanced', badgeClass: 'badge-neutral' },
        { name: 'Tailwind CSS', level: 'Advanced', badgeClass: 'badge-neutral' },
        { name: 'DaisyUI', level: 'Advanced', badgeClass: 'badge-neutral' },
        { name: 'TypeScript', level: 'Intermediate', badgeClass: 'badge-ghost' },
        { name: 'HTML5 / CSS3', level: 'Advanced', badgeClass: 'badge-neutral' },
        { name: 'Bootstrap', level: 'Intermediate', badgeClass: 'badge-ghost' },
        { name: 'WordPress', level: 'Intermediate', badgeClass: 'badge-ghost' },
      ]
    },
    {
      id: 'backend',
      title: 'Back-End Development',
      icon: Server,
      typeTag: 'Modifier',
      skills: [
        { name: 'Node.js', level: 'Intermediate', badgeClass: 'badge-neutral' },
        { name: 'Express.js', level: 'Intermediate', badgeClass: 'badge-neutral' },
        { name: 'Laravel', level: 'Intermediate', badgeClass: 'badge-neutral' },
        { name: 'PHP', level: 'Intermediate', badgeClass: 'badge-ghost' },
        { name: 'REST APIs', level: 'Advanced', badgeClass: 'badge-neutral' },
        { name: 'WebSocket', level: 'Intermediate', badgeClass: 'badge-ghost' },
        { name: 'JWT Auth', level: 'Intermediate', badgeClass: 'badge-ghost' },
      ]
    },
    {
      id: 'database',
      title: 'Database & Cloud',
      icon: Database,
      typeTag: 'Component',
      skills: [
        { name: 'MySQL', level: 'Advanced', badgeClass: 'badge-neutral' },
        { name: 'MongoDB', level: 'Intermediate', badgeClass: 'badge-ghost' },
        { name: 'PostgreSQL', level: 'Intermediate', badgeClass: 'badge-ghost' },
        { name: 'Firebase', level: 'Intermediate', badgeClass: 'badge-ghost' },
        { name: 'AWS S3', level: 'Basic', badgeClass: 'badge-dash' },
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Ecosystem',
      icon: Wrench,
      typeTag: 'Utility',
      skills: [
        { name: 'Git & GitHub', level: 'Advanced', badgeClass: 'badge-neutral' },
        { name: 'VS Code / Cursor', level: 'Advanced', badgeClass: 'badge-neutral' },
        { name: 'Postman', level: 'Intermediate', badgeClass: 'badge-ghost' },
        { name: 'Figma', level: 'Intermediate', badgeClass: 'badge-ghost' },
        { name: 'Vercel', level: 'Intermediate', badgeClass: 'badge-ghost' },
      ]
    },
    {
      id: 'practices',
      title: 'Engineering Practices',
      icon: ShieldCheck,
      typeTag: 'Standard',
      skills: [
        { name: 'Responsive Web Design', level: 'Core', badgeClass: 'badge-neutral' },
        { name: 'UI/UX Design', level: 'Core', badgeClass: 'badge-neutral' },
        { name: 'Cross-Browser Compatibility', level: 'Core', badgeClass: 'badge-neutral' },
        { name: 'Agile Methodology', level: 'Core', badgeClass: 'badge-ghost' },
        { name: 'API Integration', level: 'Core', badgeClass: 'badge-neutral' },
      ]
    }
  ];

  const displayedCategories = isPreview ? skillCategories.slice(0, 4) : skillCategories;

  return (
    <section id="stack" className="py-10">
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
          <span>03 — stack</span>
          <span className="h-px w-6 bg-base-300 inline-block" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-base-content uppercase font-sans mt-1">
          {isPreview ? 'Core Technical Stack' : 'Full Technical Skills & Tools'}
        </h2>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div 
              key={cat.id}
              className="bg-base-200/40 rounded-2xl p-6 hover:bg-base-200/70 transition-all duration-300"
            >
              {/* Category Title & Badge Tag */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-base-300/40">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-base-200 text-base-content">
                    <Icon size={16} />
                  </div>
                  <h3 className="font-bold text-sm text-base-content tracking-tight font-sans">
                    {cat.title}
                  </h3>
                </div>
                <span className="badge badge-ghost font-mono text-[10px] uppercase text-base-content/60">
                  {cat.typeTag}
                </span>
              </div>

              {/* Skills Badges Pill Grid */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-base-100/60 hover:bg-base-100 transition-colors"
                  >
                    <span className="text-xs font-mono font-medium text-base-content">
                      {skill.name}
                    </span>
                    <span className={`badge ${skill.badgeClass} text-[9px] font-mono uppercase px-1.5 py-0.5 border-0`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Preview See More Button */}
      {isPreview && onNavigate && (
        <div className="mt-8 text-center sm:text-right">
          <button
            onClick={() => onNavigate('stack')}
            className="btn btn-neutral btn-sm font-mono text-xs gap-2 rounded-xl group"
          >
            <span>View Full Technical Stack</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </section>
  );
}
