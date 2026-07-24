import React, { useState } from 'react';
import { 
  GraduationCap, 
  Calendar, 
  CheckCircle2, 
  ExternalLink, 
  X, 
  ArrowLeft, 
  ArrowRight,
  Eye
} from 'lucide-react';

export default function CertificationsEducation({ isPreview = false, onNavigate }) {
  const [selectedCertModal, setSelectedCertModal] = useState(null);

  const education = {
    degree: 'Bachelor of Science in Information Technology',
    shortDegree: 'BSIT Graduate',
    institution: 'College of Sciences, Technology, and Communications Inc. (CSTC)',
    years: '2021 – 2025',
    honors: 'Fresh Graduate with Capstone Excellence',
    location: 'Sariaya, Quezon, Philippines',
    courses: [
      'Web Systems & Development (React, PHP, Node.js)',
      'Database Management Systems (MySQL, MongoDB)',
      'UI/UX Design & Frontend Engineering',
      'Embedded Systems & IoT Integration (Arduino)'
    ]
  };

  const categories = [
    {
      name: 'COMPETITIONS & HONORS',
      certs: [
        {
          id: 'hackathon-1st',
          title: '1st Place Champion — Hackathon 2024',
          issuer: 'ELITEDEVS / CSTC',
          date: '2024',
          badge: '1st Place',
          rotation: '-rotate-2',
          image: '/Certs/Hackathon1st_Dan Denver M. De Leon (1).png',
          description: 'Awarded 1st Place Champion for outstanding full-stack web application design and execution during competitive hackathon.'
        },
        {
          id: 'quizbee-champion',
          title: 'IT Quiz Bee Champion',
          issuer: 'COMPUTER STUDIES',
          date: '2024',
          badge: 'Champion',
          rotation: 'rotate-2',
          image: '/Certs/IT_Quiz_Bee_Champion_Dan Denver M. De Leon (1).png',
          description: 'First Place Champion in annual IT & Computer Science Quiz Bee competition.'
        },
        {
          id: 'cert-dan-denver',
          title: 'Full-Stack Web Engineering Certificate',
          issuer: 'DAN DENVER CREDENTIALS',
          date: '2024',
          badge: 'Verified',
          rotation: '-rotate-1',
          image: '/Certs/Certificate - Dan Denver De Leon.png',
          description: 'Official certification verifying proficiency in full-stack web architectures, APIs, and modern frontend frameworks.'
        }
      ]
    },
    {
      name: 'WORKSHOPS & ACCREDITATION',
      certs: [
        {
          id: 'elite-devs',
          title: 'EliteDevs Participation',
          issuer: 'ELITEDEVS COMMUNITY',
          date: '2024',
          badge: 'Participant',
          rotation: 'rotate-1',
          image: '/Certs/Certificate of Participation_EliteDevs_DELEON (1).png',
          description: 'Recognized for active participation and software contribution in EliteDevs technical summit.'
        },
        {
          id: 'gamedev-workshop',
          title: 'Game Development Workshop',
          issuer: 'CSTC ACADEMY',
          date: 'July 2024',
          badge: 'Workshop',
          rotation: '-rotate-2',
          image: '/Certs/Dan Denver De Leon Game Development Workshop (July 27-28) - Certificate of Participation.png',
          description: 'Completed intensive 2-day Game Development and interactive logic workshop.'
        },
        {
          id: 'data-vis-workshop',
          title: 'Data Visualization Workshop',
          issuer: 'CSTC ACADEMY',
          date: 'August 2024',
          badge: 'Workshop',
          rotation: 'rotate-2',
          image: '/Certs/Dan Denver M. De Leon Data Visualization Workshop (August 3) - Certificate of Participation.png',
          description: 'Completed Data Visualization and dynamic analytics dashboard workshop.'
        },
        {
          id: 'skl-accreditation',
          title: 'Technical Accreditation',
          issuer: 'SKL CREDENTIALS',
          date: '2024',
          badge: 'Verified',
          rotation: '-rotate-1',
          image: '/Certs/SKL24071817213107968671.png',
          description: 'Verified technical skill accreditation for software development and web design.'
        }
      ]
    },
    {
      name: 'ONLINE CERTIFICATIONS',
      certs: [
        {
          id: 'udemy-react-fullstack',
          title: 'Full-Stack Web Development',
          issuer: 'UDEMY ACADEMY',
          date: '2024',
          badge: 'Udemy',
          rotation: '-rotate-1',
          image: '/Certs/UC-bdaf4a8a-ab88-4edb-8053-d9c2a52fadd4.jpg',
          description: 'Completed complete Full-Stack Web Development Bootcamp covering React, Node.js, Express, and MongoDB.'
        },
        {
          id: 'udemy-react-frontend',
          title: 'React & Modern Frontend',
          issuer: 'UDEMY ACADEMY',
          date: '2024',
          badge: 'Udemy',
          rotation: 'rotate-2',
          image: '/Certs/UC-43d19dd0-79f1-476f-85c6-54d6812dfec6.jpg',
          description: 'Certified in modern React.js state management, hooks, and responsive UI design.'
        },
        {
          id: 'udemy-javascript-mastery',
          title: 'JavaScript ES6+ Masterclass',
          issuer: 'UDEMY ACADEMY',
          date: '2024',
          badge: 'Udemy',
          rotation: '-rotate-2',
          image: '/Certs/UC-5e9a96e3-b674-4e79-8ad0-7a478fe9adae.jpg',
          description: 'Mastery certification in JavaScript ES6+, asynchronous programming, and DOM manipulation.'
        },
        {
          id: 'udemy-rest-api',
          title: 'REST API & Node.js',
          issuer: 'UDEMY ACADEMY',
          date: '2024',
          badge: 'Udemy',
          rotation: 'rotate-1',
          image: '/Certs/UC-db1e87b6-9e27-457d-87ec-dc436a7ca8e8.jpg',
          description: 'Certified in RESTful web API construction, Node.js backend services, and database integration.'
        },
        {
          id: 'udemy-uiux-tailwind',
          title: 'UI/UX & Tailwind CSS',
          issuer: 'UDEMY ACADEMY',
          date: '2024',
          badge: 'Udemy',
          rotation: '-rotate-1',
          image: '/Certs/UC-ddfad77d-a85e-46c9-86f8-47a94cf214b7.jpg',
          description: 'Certification in responsive UI design principles, layout hierarchy, and Tailwind CSS.'
        }
      ]
    }
  ];

  // Flatten all certs for preview count logic
  const allCerts = categories.flatMap(c => c.certs);

  return (
    <section id="certifications" className="py-10">
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
          <span>04 — certifications</span>
          <span className="h-px w-6 bg-base-300 inline-block" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-base-content uppercase font-sans mt-1">
          {isPreview ? 'Certifications & Credentials' : 'All Verified Certifications'}
        </h2>
        <p className="text-xs font-mono text-base-content/60 mt-1">
          Credentials across full-stack engineering, AI, IoT, and UI/UX — each verifiable at its source.
        </p>
      </div>

      <div className="space-y-12">
        {/* Render Grouped Pure Certificate Images */}
        {categories.map((catGroup, gIdx) => {
          const renderedCerts = isPreview ? catGroup.certs.slice(0, 2) : catGroup.certs;
          if (renderedCerts.length === 0) return null;

          return (
            <div key={gIdx} className="space-y-4">
              <h3 className="text-[10px] font-mono text-base-content/40 uppercase tracking-widest px-1">
                {catGroup.name}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {renderedCerts.map((cert) => (
                  <div
                    key={cert.id}
                    onClick={() => setSelectedCertModal(cert)}
                    className={`
                      group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 
                      cursor-pointer relative border border-base-300/40 bg-base-200/30
                      ${cert.rotation} hover:rotate-0 hover:scale-105 hover:-translate-y-2 hover:z-20
                    `}
                  >
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-48 object-cover object-top rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                      <span className="btn btn-neutral btn-xs font-mono text-[10px] gap-1 shadow-md">
                        <Eye size={12} />
                        Preview
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Education Block Below */}
        <div id="education" className="bg-base-200/40 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-base-300/40">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-neutral text-neutral-content">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <span className="badge badge-neutral font-mono text-[10px] uppercase">Higher Education</span>
                  <h3 className="font-bold text-base text-base-content tracking-tight mt-0.5">
                    {education.degree}
                  </h3>
                </div>
              </div>
              <span className="font-mono text-xs text-base-content/60 flex items-center gap-1">
                <Calendar size={12} />
                {education.years}
              </span>
            </div>

            <div className="mt-4 space-y-1">
              <p className="text-xs font-mono font-semibold text-base-content/90">
                {education.institution}
              </p>
              <p className="text-xs text-base-content/70">
                Location: {education.location}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-base-300/40">
              <p className="text-[11px] font-mono uppercase tracking-wider text-base-content/50 mb-2">
                Core Competencies & Specializations
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-base-content/80">
                {education.courses.map((course, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 bg-base-100/60 p-2 rounded-md font-sans">
                    <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                    <span className="text-[11px]">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-base-300/40 flex items-center justify-between text-xs font-mono">
            <span className="text-base-content/60">Degree Status</span>
            <span className="badge badge-ghost badge-sm font-mono text-[10px]">Graduated 2025</span>
          </div>
        </div>
      </div>

      {/* Preview See More Button */}
      {isPreview && onNavigate && (
        <div className="mt-8 text-center sm:text-right">
          <button
            onClick={() => onNavigate('certifications')}
            className="btn btn-neutral btn-sm font-mono text-xs gap-2 rounded-xl group"
          >
            <span>View All Credentials ({allCerts.length})</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}

      {/* High-Res Certificate Preview Modal */}
      {selectedCertModal && (
        <dialog className="modal modal-open bg-black/70 backdrop-blur-sm z-50">
          <div className="modal-box max-w-3xl bg-base-100 shadow-2xl p-6 relative rounded-2xl">
            <button 
              onClick={() => setSelectedCertModal(null)}
              className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-base-content/60 hover:text-base-content z-10 bg-base-100/80"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="space-y-4">
              {/* Modal Title & Header */}
              <div className="pr-8">
                <span className="badge badge-neutral font-mono text-[10px] uppercase mb-1">
                  {selectedCertModal.badge}
                </span>
                <h3 className="text-xl font-bold tracking-tight text-base-content">
                  {selectedCertModal.title}
                </h3>
                <p className="text-xs font-mono text-base-content/60">
                  Issued by {selectedCertModal.issuer} • {selectedCertModal.date}
                </p>
              </div>

              {/* Full Image Preview Container */}
              <div className="rounded-xl overflow-hidden border border-base-300 bg-neutral/5 flex items-center justify-center max-h-[70vh]">
                <img 
                  src={selectedCertModal.image} 
                  alt={selectedCertModal.title}
                  className="max-h-[68vh] w-auto object-contain rounded-lg shadow-sm"
                />
              </div>

              <p className="text-xs leading-relaxed text-base-content/80">
                {selectedCertModal.description}
              </p>

              <div className="pt-3 border-t border-base-200 flex items-center justify-between">
                <a 
                  href={selectedCertModal.image} 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-xs btn-outline font-mono text-[11px] gap-1"
                >
                  Open Original Image
                  <ExternalLink size={10} />
                </a>
                <button 
                  onClick={() => setSelectedCertModal(null)}
                  className="btn btn-sm btn-neutral font-mono text-xs"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={() => setSelectedCertModal(null)}>close</button>
          </form>
        </dialog>
      )}
    </section>
  );
}
