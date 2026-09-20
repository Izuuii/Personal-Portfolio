import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Stack({ isPreview = false, onNavigate }) {
  const previewPills = [
    'Next.js 15',
    'React 19',
    'TypeScript',
    'Three.js',
    'Python',
    'FastAPI',
    'Django',
    'Supabase',
    'pgvector',
    'GSAP',
    'Node.js',
    'Express',
    'Laravel',
    'PostgreSQL',
    'MongoDB',
    'Tailwind CSS',
    'DaisyUI',
    'Radix UI',
    'Zod',
    'Vercel AI SDK',
    'Zustand',
    'WebSockets',
    'AWS S3',
    'Arduino',
    'TanStack Query'
  ];

  const fullStackCategories = [
    {
      category: 'FRONTEND',
      skills: [
        'TypeScript',
        'JavaScript (ES6+)',
        'Next.js 15 (App Router)',
        'React.js 19',
        'React Native',
        'Three.js / OGL (WebGL)',
        'Tailwind CSS v4',
        'DaisyUI',
        'GSAP / @gsap/react',
        'Radix UI / shadcn',
        'Zustand',
        'HTML5 & CSS3',
        'Vite / Turbopack'
      ]
    },
    {
      category: 'BACKEND & APIS',
      skills: [
        'Python 3.12',
        'FastAPI',
        'Django / DRF',
        'Node.js',
        'Express.js',
        'Laravel',
        'PHP',
        'SQLAlchemy / aiosqlite',
        'RESTful APIs',
        'WebSockets / Socket.io',
        'JWT Auth',
        'Zod Schema Validation',
        'TanStack Query'
      ]
    },
    {
      category: 'DATABASES & CLOUD',
      skills: [
        'Supabase PostgreSQL',
        'pgvector (Vector Search)',
        'MySQL',
        'MongoDB',
        'AWS S3',
        'Firebase',
        'Clerk Auth',
        'ImageKit.io',
        'Vercel',
        'Git & GitHub'
      ]
    },
    {
      category: 'AI & SYSTEMS',
      skills: [
        'Vercel AI SDK',
        'Vector Embeddings (1536-dim)',
        'OpenAI GPT-4o / Gemini APIs',
        'Oxylabs & Cheerio Web Scraping',
        'AI Coding Agents & Automation',
        'Modular Agent Skills (.agents/skills)',
        'Prompt Engineering & Harnesses'
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
      category: 'TOOLS & UTILITIES',
      skills: [
        'Figma UI/UX',
        'Cursor / VS Code',
        'Postman',
        'uv (Python Package Manager)',
        'Responsive Design',
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
