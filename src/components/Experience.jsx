import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Experience({ isPreview = false, onNavigate }) {
  const experiences = [
    {
      id: 'mk-trading',
      role: 'Junior Full Stack Developer',
      company: 'MK International Trading',
      projectTitle: 'Indigo — A Ride Hailing Application',
      type: 'Onsite',
      date: 'July 2025 – Oct 2025',
      location: 'Philippines',
      badge: 'Full Stack',
      stack: ['React.js', 'React Native', 'Express', 'Node.js', 'PostgreSQL', 'Firebase', 'WebSocket', 'TanStack Query'],
      points: [
        'Contributed to the development of UI/UX and frontend designs to enhance the overall user experience and interface consistency.',
        'Implemented user management features across the Rider, Customer applications, and Web Admin portal.',
        'Assisted in developing core Rider App functionalities, ensuring smooth and intuitive interactions.',
        'Integrated real-time notifications to improve communication and engagement between users and the platform.',
        'Collaborated with team members through regular meetings to align project goals and ensure timely progress.'
      ]
    },
    {
      id: 'freelance-lead',
      role: 'Team Leader | Freelance Frontend Developer',
      company: 'Freelance Commissions (AcadFlow & AppliLoan)',
      type: 'Remote',
      date: 'July 2025 – Present',
      location: 'Remote',
      badge: 'Commissions',
      stack: ['React.js', 'Tailwind CSS', 'DaisyUI', 'Laravel', 'MySQL', 'Zustand'],
      points: [
        'AcadFlow: Developed a centralized web-based portal digitizing DepEd School Forms (SF 1–SF 10), automating reporting & certificate generation with role-based access for teachers, students, and parents.',
        'AppliLoan: Designed & developed a web-based system incorporating descriptive analytics capabilities for Sariaya Multi-Purpose Cooperative to gain operational insights.',
        'Managed React.js frontend architecture, Zustand state flows, and Laravel MySQL backend integrations.'
      ]
    },
    {
      id: 'supsoft-tech',
      role: 'Web Developer Intern | UI/UX Team Lead',
      company: 'Supsoft Tech',
      projectTitle: 'CertiCode Platform & Attendance Module',
      type: 'OJT / Internship',
      date: 'March 2025 – June 2025',
      location: 'Remote',
      badge: 'OJT / Intern',
      stack: ['React.js', 'Laravel', 'Axios', 'Tailwind CSS', 'Figma'],
      points: [
        'Received internal training in ReactJS and foundational lessons in Laravel under the guidance of the Team Lead.',
        'Integrated Laravel backend APIs with React frontend using Axios to enable efficient data communication across modules.',
        'Contributed to CertiCode certification platform, assisting the frontend team with design updates and responsiveness fixes.',
        'Implemented a "Seminar History" table in the user profile section to enhance user experience and functionality.',
        'Actively participated in UI/UX redesign efforts for the CertiCode Attendance module, focusing on usability and visual design.',
        'Led a small team of interns in UI/UX initiatives, ensuring consistent design practices across the platform.'
      ]
    }
  ];

  const displayedExperiences = isPreview ? experiences.slice(0, 2) : experiences;

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
        <h2 className="text-2xl font-bold tracking-tight text-base-content uppercase font-sans mt-1">
          {isPreview ? 'Work Experience & OJT' : 'Complete Work Experience & OJT History'}
        </h2>
      </div>

      {/* Experience List */}
      <div className="space-y-6">
        {displayedExperiences.map((exp) => (
          <div 
            key={exp.id}
            className="group bg-base-200/40 rounded-2xl p-6 hover:bg-base-200/70 transition-all duration-300 relative overflow-hidden"
          >
            {/* Header info row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-base-300/40">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="badge badge-neutral font-mono text-[10px] uppercase tracking-wider">
                    {exp.badge}
                  </span>
                  <span className="badge badge-ghost font-mono text-[10px] text-base-content/70">
                    {exp.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-base-content tracking-tight mt-1">
                  {exp.role}
                </h3>
                <p className="text-xs font-mono font-medium text-base-content/70 flex items-center gap-1.5 mt-0.5">
                  <Briefcase size={12} className="text-base-content/40" />
                  {exp.company}
                </p>
                {exp.projectTitle && (
                  <p className="text-xs font-mono text-neutral font-semibold mt-1">
                    Project: {exp.projectTitle}
                  </p>
                )}
              </div>

              <div className="text-right sm:self-start font-mono text-xs text-base-content/60 space-y-0.5">
                <div className="flex items-center gap-1 sm:justify-end">
                  <Calendar size={12} />
                  <span>{exp.date}</span>
                </div>
                <div className="flex items-center gap-1 sm:justify-end text-[11px] text-base-content/40">
                  <MapPin size={11} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Bullet Points List */}
            <ul className="mt-4 space-y-2.5 text-xs text-base-content/80 font-sans">
              {exp.points.map((pt, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2.5 leading-relaxed">
                  <ChevronRight size={14} className="shrink-0 mt-0.5 text-neutral opacity-60" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack Footer */}
            {exp.stack && (
              <div className="mt-5 pt-3 border-t border-base-300/30 flex flex-wrap gap-1">
                {exp.stack.map((tech, sIdx) => (
                  <span 
                    key={sIdx}
                    className="badge badge-ghost font-mono text-[9px] text-base-content/70 bg-base-100/70 border-0 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Preview See More Button */}
      {isPreview && onNavigate && (
        <div className="mt-8 text-center sm:text-right">
          <button
            onClick={() => onNavigate('experience')}
            className="btn btn-neutral btn-sm font-mono text-xs gap-2 rounded-xl group"
          >
            <span>View Full Experience ({experiences.length} Roles)</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </section>
  );
}
