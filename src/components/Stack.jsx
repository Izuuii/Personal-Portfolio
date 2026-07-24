import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Stack({ isPreview = false, onNavigate }) {
  const previewPills = [
    'JavaScript',
    'React',
    'React Native',
    'Node.js',
    'Express',
    'Laravel',
    'PHP',
    'MySQL',
    'MongoDB',
    'PostgreSQL',
    'Tailwind CSS',
    'DaisyUI',
    'Zustand',
    'AWS S3',
    'Firebase',
    'WebSockets',
    'Chart.js',
    'Arduino',
    'TanStack Query',
    'AI Agent Skills',
    'Axios'
  ];

  const fullStackCategories = [
    {
      category: 'FRONTEND',
      skills: [
        'JavaScript (ES6+)',
        'TypeScript',
        'React.js',
        'React Native',
        'Tailwind CSS',
        'DaisyUI',
        'Zustand',
        'HTML5',
        'CSS3',
        'Bootstrap',
        'Vite'
      ]
    },
    {
      category: 'BACKEND',
      skills: [
        'Node.js',
        'Express.js',
        'Laravel',
        'PHP',
        'MySQL',
        'MongoDB',
        'PostgreSQL',
        'REST APIs',
        'WebSockets',
        'JWT Auth',
        'Axios',
        'TanStack Query'
      ]
    },
    {
      category: 'DEVOPS & CLOUD',
      skills: [
        'AWS S3',
        'Firebase',
        'Vercel',
        'Git',
        'GitHub',
        'Postman'
      ]
    },
    {
      category: 'IOT & EMBEDDED',
      skills: [
        'Arduino',
        'Sensors Telemetry',
        'Chart.js',
        'Descriptive Analytics'
      ]
    },
    {
      category: 'AI & AGENTIC DEV',
      skills: [
        'Modular Agent Skills (.agents/skills)',
        'LLM Pair Programming (Claude / DeepSeek / Gemini)',
        'AI Coding Agents & Automation',
        'Prompt Engineering & Harnesses',
        'ChatGPT / Gemini / DeepSeek APIs',
        'AI Function Calling & Structured Outputs'
      ]
    },
    {
      category: 'TOOLS & UTILITIES',
      skills: [
        'Figma',
        'VS Code',
        'Cursor',
        'Responsive Design',
        'UI/UX Architecture',
        'Agile Methodology'
      ]
    }
  ];

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
        <h2 className="text-3xl font-bold tracking-tight text-base-content lowercase font-sans mt-1">
          {isPreview ? 'Stack' : 'tech stack'}
        </h2>
        <p className="text-xs font-mono text-base-content/60 mt-2 max-w-2xl leading-relaxed">
          The tools, frameworks, and platforms I reach for — across the front end, back end, cloud, IoT, and AI integrations.
        </p>
      </div>

      {/* HOME PAGE PREVIEW: Keycap / KBD Badge UI Cloud */}
      {isPreview ? (
        <div className="flex flex-wrap gap-2 pt-2">
          {previewPills.map((tech, idx) => (
            <kbd
              key={idx}
              className="kbd font-mono text-xs px-3 py-1.5 bg-base-100/90 border border-base-300/80 border-b-2 border-b-base-300/90 rounded-lg shadow-2xs hover:border-neutral hover:scale-105 transition-all cursor-default text-base-content/85"
            >
              {tech}
            </kbd>
          ))}
          {onNavigate && (
            <button
              onClick={() => onNavigate('stack')}
              className="kbd font-mono text-xs px-3 py-1.5 bg-transparent border border-dashed border-base-300 rounded-lg text-base-content/60 hover:text-base-content hover:border-base-content transition-all cursor-pointer"
            >
              + more
            </button>
          )}
        </div>
      ) : (
        /* DEDICATED STACK PAGE: Categorized Keycap / KBD Badge Groups */
        <div className="space-y-8 pt-2">
          {fullStackCategories.map((catGroup, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-[11px] font-mono text-base-content/50 uppercase tracking-widest">
                {catGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {catGroup.skills.map((skill, sIdx) => (
                  <kbd
                    key={sIdx}
                    className="kbd font-mono text-xs px-3 py-1.5 bg-base-100/90 border border-base-300/80 border-b-2 border-b-base-300/90 rounded-lg shadow-2xs hover:border-neutral hover:scale-105 transition-all cursor-default text-base-content/85"
                  >
                    {skill}
                  </kbd>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
