import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, ArrowLeft } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects({ isPreview = false, onNavigate }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const projects = [
    {
      id: 'beemo',
      title: 'BeeMo — IoT Stingless Beehive System',
      subtitle: 'IoT-Enabled Web-Based Beehive Management System with Real-Time Temperature, Humidity, Weight Monitoring & Descriptive Analytics (Capstone Project).',
      longDescription: 'BeeMo is a capstone project designed to enhance and improve the honey production of stingless bees through continuous monitoring and regulating of hive environmental parameters with Descriptive Analytics and interactive Chart.js telemetry dashboards.',
      category: 'IoT & Capstone',
      role: 'Capstone Lead & Arduino/Dev',
      date: '2024 – 2025',
      stack: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'PHP', 'Chart.js', 'Arduino'],
      highlights: [
        'Led capstone team in designing an IoT web portal to enhance stingless bee honey production.',
        'Programmed Arduino microcontrollers and sensors for continuous telemetry monitoring (temperature, humidity, beehive weight).',
        'Built dynamic descriptive analytics dashboards and live chart visualizations using Chart.js.',
        'Integrated PHP backend REST APIs for continuous sensor parameter logging and threshold regulation alerts.'
      ],
      featured: true
    },
    {
      id: 'contentcraft',
      title: 'ContentCraft — Scalable Blog Application',
      subtitle: 'Full-stack MERN blog platform with AWS S3 image storage, user authentication (bcrypt & JWT), and full CRUD functionality.',
      longDescription: 'ContentCraft is a scalable blog application built with MongoDB, Express.js, React.js, and Node.js. It features secure JWT authentication and password hashing with bcrypt, allowing users to create, read, update, and delete posts while uploading media directly to AWS S3.',
      category: 'Full Stack',
      role: 'Full Stack Developer',
      date: '2024 – 2025',
      stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'AWS S3', 'Tailwind CSS', 'JWT'],
      highlights: [
        'Built full-stack blog application with MongoDB, Express, React, and Node.js (MERN stack).',
        'Implemented secure user authentication and authorization using bcrypt and JSON Web Tokens (JWT).',
        'Integrated AWS S3 bucket storage for uploading, hosting, and displaying high-resolution blog post images.',
        'Created full CRUD capabilities enabling users to write, edit, publish, and manage articles seamlessly.'
      ],
      featured: true
    },
    {
      id: 'ai-chatbot',
      title: 'Multi-Model AI Chatbot',
      subtitle: 'Interactive Web AI Chatbot integrating ChatGPT, Gemini, and DeepSeek model APIs for intelligent conversations.',
      longDescription: 'An interactive web-based AI chatbot that connects to multiple state-of-the-art AI model APIs (ChatGPT, Gemini, and DeepSeek) to deliver real-time intelligent responses, code analysis, and conversational capabilities.',
      category: 'AI & Web',
      role: 'Frontend Developer & AI Integration',
      date: '2024 – 2025',
      stack: ['React.js', 'Tailwind CSS', 'ChatGPT API', 'Gemini API', 'DeepSeek API'],
      highlights: [
        'Integrated ChatGPT, Gemini, and DeepSeek AI APIs for multi-engine conversational workflows.',
        'Designed responsive chat interface with code snippet highlighting and real-time message streaming.',
        'Handled API token security, prompt engineering, and smooth conversation state management.'
      ],
      featured: true
    },
    {
      id: 'acadflow',
      title: 'AcadFlow — DepEd Form Digitization Platform',
      subtitle: 'Centralized Academic Records Management & DepEd School Form Digitization (SF 1 – SF 10) for Castañas National High School.',
      longDescription: 'AcadFlow is a freelance commission project that digitizes official DepEd School Forms (SF 1–SF 10), automates report generation and certificate issuing, and provides secure role-based access for teachers, students, and school administrators.',
      category: 'Commissions',
      role: 'Team Leader & Freelance Dev',
      date: 'July 2025 – Present',
      stack: ['React.js', 'Tailwind CSS', 'Laravel', 'MySQL', 'Zustand'],
      highlights: [
        'Developed a centralized web portal digitizing and modernizing DepEd School Forms (SF 1–SF 10).',
        'Automated reporting and certificate generation, significantly reducing manual paperwork time.',
        'Provided secure role-based access to academic records for teachers, students, and parents.',
        'Managed frontend state using Zustand and styled component libraries with React & Tailwind CSS.'
      ],
      featured: true
    },
    {
      id: 'appliloan',
      title: 'AppliLoan — Cooperative Analytics System',
      subtitle: 'Web-Based Information Management & Descriptive Analytics System for Sariaya Multi-Purpose Cooperative.',
      longDescription: 'AppliLoan improves cooperative operations by handling appliance loan applications and client records while incorporating descriptive analytics capabilities for administrators to gain actionable insights.',
      category: 'Commissions',
      role: 'Team Leader & Freelance Dev',
      date: 'July 2025 – Present',
      stack: ['React.js', 'Tailwind CSS', 'DaisyUI', 'Laravel', 'MySQL', 'Zustand'],
      highlights: [
        'Designed and developed a web-based system to optimize applicant tracking for cooperative members.',
        'Incorporated descriptive analytics dashboards enabling administrators to gain valuable operational insights.',
        'Utilized DaisyUI component architecture for fast, clean, accessible UI development.',
        'Built RESTful API endpoints in Laravel for seamless client-server data synchronization.'
      ],
      featured: false
    },
    {
      id: 'movie-app',
      title: 'Watchbase - A Production-grade React Native Movie Database',
      subtitle: 'Mobile movie browsing app built with React Native, NativeWind, Appwrite backend, and TMDB API integration.',
      longDescription: 'A cross-platform mobile application built with React Native and NativeWind. Features TMDB API integration for browsing trending movies, Appwrite user authentication, and bookmarking favorite titles.',
      category: 'Mobile App',
      role: 'Mobile / React Native Developer',
      date: '2024 – 2025',
      stack: ['React Native', 'NativeWind', 'Appwrite', 'TMDB API', 'JavaScript'],
      highlights: [
        'Developed cross-platform mobile app using React Native and NativeWind styling.',
        'Integrated TMDB REST API to display real-time movie categories, ratings, and trailers.',
        'Implemented Appwrite backend for user authentication, session persistence, and saving favorites.'
      ],
      featured: false
    },
    {
      id: 'pitch-tents-clone',
      title: 'Pitch-tents.co.uk Web Clone',
      subtitle: 'Responsive pixel-perfect front-end replication of the Pitch-tents.co.uk web portal.',
      longDescription: 'A high-fidelity front-end web replication of Pitch-tents.co.uk created to practice advanced layout structure, modern responsive design, and UI component architecture.',
      category: 'Front-End',
      role: 'Frontend Developer',
      date: '2024 – 2025',
      stack: ['React.js', 'Tailwind CSS', 'JavaScript'],
      highlights: [
        'Replicated complex layout structure and responsive breakpoints of Pitch-tents.co.uk.',
        'Engineered custom UI components with fluid responsive scaling across mobile and desktop devices.'
      ],
      featured: false
    }
  ];

  const categories = ['All', 'IoT & Capstone', 'Full Stack', 'Commissions', 'AI & Web', 'Mobile App', 'Front-End'];

  const displayedProjects = isPreview
    ? projects.slice(0, 4)
    : (selectedFilter === 'All' ? projects : projects.filter(p => p.category === selectedFilter));

  return (
    <section id="projects" className="py-10">
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

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="text-[11px] font-mono text-base-content/50 uppercase tracking-widest flex items-center gap-2">
            <span>01 — projects</span>
            <span className="h-px w-6 bg-base-300 inline-block" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-base-content uppercase font-sans mt-1">
            {isPreview ? 'Featured Projects' : 'All Projects & Works'}
          </h2>
        </div>

        {/* DaisyUI Tabs for filtering */}
        {!isPreview && (
          <div className="tabs tabs-box bg-base-200/60 p-1 rounded-xl self-start sm:self-auto font-mono text-xs flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`tab tab-xs rounded-lg transition-all ${selectedFilter === cat ? 'tab-active font-bold shadow-xs' : 'text-base-content/70'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Projects List View (Replacing Card View) */}
      <div className="divide-y divide-base-300/40">
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveModalProject(project)}
            className="relative group py-5 px-3 sm:px-4 rounded-xl hover:bg-base-200/40 transition-all duration-200 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 overflow-hidden"
          >
            {/* Subtle halftone dot matrix accent on hover (Matching Bryl Lim reference Image 2) */}
            <div className="absolute inset-0 bg-halftone-grid opacity-0 group-hover:opacity-25 transition-opacity pointer-events-none rounded-xl mask-radial-fade" />
            {/* Left Details Column */}
            <div className="space-y-2 flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-bold text-base-content tracking-tight group-hover:text-neutral transition-colors">
                  {project.title}
                </h3>
                <span className="badge badge-neutral font-mono text-[9px] uppercase tracking-wider">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="badge badge-ghost font-mono text-[9px] uppercase tracking-wider text-base-content/60">
                    Featured
                  </span>
                )}
              </div>

              <p className="text-xs text-base-content/70 leading-relaxed font-sans line-clamp-2">
                {project.subtitle}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[10px] text-base-content/70 bg-base-200/80 px-2 py-0.5 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Meta & Action Column */}
            <div className="flex items-center justify-between md:flex-col md:items-end shrink-0 gap-2 font-mono text-xs text-base-content/50">
              <span className="text-[11px] font-mono">{project.date}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalProject(project);
                }}
                className="btn btn-ghost btn-xs font-mono text-[11px] gap-1 group-hover:bg-neutral group-hover:text-neutral-content transition-all rounded-lg"
              >
                Details
                <ArrowUpRight size={11} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Preview See More Button */}
      {isPreview && onNavigate && (
        <div className="mt-8 text-center sm:text-right">
          <button
            onClick={() => onNavigate('projects')}
            className="btn btn-neutral btn-sm font-mono text-xs gap-2 rounded-xl group"
          >
            <span>View All Projects ({projects.length})</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}

      {/* Project Detail Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
