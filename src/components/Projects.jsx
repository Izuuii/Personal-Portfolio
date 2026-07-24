import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects({ isPreview = false, onNavigate }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const projects = [
    {
      id: 'indigo-app',
      title: 'Indigo App - Full Stack Ride-Hailing Platform',
      subtitle: 'Engineered real-time ride-hailing & dispatch telemetry across mobile apps and Web Admin portal using WebSockets & TanStack Query.',
      longDescription: 'Engineered during junior developer role at MK International Trading. Built end-to-end telemetry workflows across Rider App, Customer App, and Web Admin management interface using WebSockets and TanStack Query state caching.',
      category: 'Full Stack',
      role: 'Junior Full Stack Developer',
      date: 'July 2025 – Dec 2025',
      stack: ['React Native', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Firebase', 'WebSockets', 'TanStack Query'],
      highlights: [
        'Architected real-time rider location tracking and dispatch telemetry using WebSockets.',
        'Engineered responsive Web Admin portal with live interactive map telemetry and user session management.',
        'Optimized client-side data fetching with TanStack Query caching and automated push notification flows.'
      ],
      featured: true
    },
    {
      id: 'acadflow',
      title: 'AcadFlow - Centralized DepEd School Forms & Analytics',
      subtitle: 'Automated reporting engine digitizing DepEd SF 1–SF 10 calculations & digital certificate generation for Castañas National High School.',
      longDescription: 'Lead capstone & commission project designed to eliminate manual paper-based school form processing. Features automated DepEd SF 1 to SF 10 calculations, digital certificate issuance, and administrative analytics dashboards.',
      category: 'IoT & Capstone',
      role: 'Team Lead & Full Stack Architect',
      date: 'July 2025 – Present',
      stack: ['React.js', 'Tailwind CSS', 'DaisyUI', 'Laravel', 'MySQL', 'Zustand', 'Chart.js'],
      highlights: [
        'Digitized complex DepEd School Forms (SF 1 - SF 10) calculations into automated web workflows.',
        'Architected digital certificate generation engine with cryptographic verification tags.',
        'Implemented role-based access control (RBAC) for Teachers, Advisers, and School Administrators.'
      ],
      featured: true
    },
    {
      id: 'beemo-iot',
      title: 'BeeMo - IoT-Enabled Stingless Beehive Management System',
      subtitle: 'IoT-enabled web system for real-time hive temperature, humidity, and weight monitoring with descriptive analytics.',
      longDescription: 'An IoT-enabled web-based system designed to enhance and improve the honey production of stingless bees through continuous monitoring and regulating of parameters with Descriptive Analytics (CAPSTONE PROJECT).',
      category: 'IoT & Capstone',
      role: 'Lead Capstone & IoT Developer',
      date: '2024 – 2025',
      stack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP', 'Chart.js', 'Arduino'],
      highlights: [
        'Engineered IoT hardware sensor integrations using Arduino for real-time monitoring of beehive temperature, humidity, and weight metrics.',
        'Developed interactive descriptive analytics dashboards powered by Chart.js to optimize honey production conditions.',
        'Built a web-based management platform in PHP, Bootstrap, and JavaScript for beehive parameter tracking and automated threshold alerts.'
      ],
      featured: true
    },
    {
      id: 'contentcraft',
      title: 'ContentCraft - Scalable MERN Blog Application',
      subtitle: 'Full-stack MERN blog platform with user authentication (bcrypt & JWT), complete CRUD features, and AWS S3 image storage.',
      longDescription: 'A full-stack blog application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Features user authentication (bcrypt & JWT) and complete CRUD functionality, allowing users to create, read, update, and delete blog posts. Includes AWS S3 integration for uploading and displaying blog post images.',
      category: 'Full Stack',
      role: 'Full Stack MERN Developer',
      date: '2024 – 2025',
      stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'AWS S3', 'Tailwind CSS', 'JWT', 'bcrypt'],
      highlights: [
        'Engineered complete CRUD operations allowing users to create, read, update, and delete blog posts.',
        'Integrated AWS S3 cloud storage for high-availability uploading and serving of blog post media assets.',
        'Implemented secure authentication and user authorization using bcrypt password hashing and JSON Web Tokens (JWT).'
      ],
      featured: false
    },
    {
      id: 'ai-chatbot',
      title: 'Multi-Model AI Chatbot (ChatGPT, Gemini, DeepSeek)',
      subtitle: 'Interactive web AI-powered chatbot integrating ChatGPT, Gemini, and DeepSeek models for dynamic, intelligent conversations.',
      longDescription: 'An interactive web AI-powered chatbot that integrates AI models (ChatGPT, Gemini, DeepSeek) to provide dynamic and intelligent conversations within a unified, responsive interface.',
      category: 'AI & Web',
      role: 'Frontend & AI Engineer',
      date: '2024 – 2025',
      stack: ['React.js', 'Tailwind CSS', 'OpenAI API', 'Google Gemini API', 'DeepSeek API', 'JavaScript'],
      highlights: [
        'Integrated multiple AI model provider APIs (ChatGPT, Gemini, DeepSeek) into a unified dynamic conversation engine.',
        'Engineered real-time chat response handling with dynamic prompt controls and model switching.',
        'Styled custom dark/light UI themes and fluid chat component micro-interactions using Tailwind CSS.'
      ],
      featured: false
    },
    {
      id: 'appliloan',
      title: 'AppliLoan - Cooperative Appliance Loan Management System',
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
      title: 'PitchTents Outdoor Gear & Rental E-Commerce',
      subtitle: 'Modern frontend e-commerce platform for outdoor gear rentals with interactive booking calendars and gear filter matrix.',
      longDescription: 'A sleek, high-aesthetic e-commerce web application featuring equipment rental booking date selection, dynamic inventory search, interactive shopping cart, and smooth responsive UI micro-interactions.',
      category: 'Front-End',
      role: 'Frontend Engineer',
      date: '2024',
      stack: ['React.js', 'Tailwind CSS', 'DaisyUI', 'Zustand', 'Vite'],
      highlights: [
        'Built fluid rental booking calendar date pickers and dynamic price calculation state flows.',
        'Implemented rich micro-animations using DaisyUI and Tailwind CSS design tokens.',
        'Structured modular client-side state management with Zustand.'
      ],
      featured: false
    },
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
            <span>01 — projects & engineering craft</span>
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
            {/* Subtle halftone dot matrix accent on hover */}
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

            {/* Right Meta & CTA Column */}
            <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 font-mono text-xs pt-2 md:pt-0 border-t md:border-t-0 border-base-300/30">
              <div className="text-left md:text-right">
                <div className="text-[11px] font-semibold text-base-content/80">
                  {project.role}
                </div>
                <div className="text-[10px] text-base-content/50 uppercase tracking-wider">
                  {project.date}
                </div>
              </div>

              <button className="btn btn-neutral btn-xs font-mono text-[11px] gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>Details</span>
                <ExternalLink size={11} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Monochrome Halftone Tech Engine Feature Banner (Positioned Below Projects List) */}
      <div className="mt-8 mb-6 rounded-2xl overflow-hidden bg-base-200/40 border border-base-300/40 p-4 sm:p-6 relative group">
        <div className="absolute inset-0 bg-halftone-grid opacity-20 pointer-events-none" />
        <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
          {/* DaisyUI 5 hover-3d Component Wrapping the Monochrome Technical Diagram */}
          <div className="hover-3d w-full md:w-1/2 shrink-0">
            <figure className="rounded-xl overflow-hidden border border-base-300 bg-base-100 shadow-md">
              <img
                src="/projects_engine.png"
                alt="Software Architecture & Systems Engine Diagram"
                className="w-full h-auto object-cover contrast-125 hover:contrast-100 transition-all duration-300"
              />
            </figure>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* Architecture & Engineering Process Banner Description */}
          <div className="space-y-3 font-sans">
            <span className="badge badge-neutral font-mono text-[10px] uppercase tracking-wider">
              Engineering Mindset & Craft
            </span>
            <h3 className="text-xl font-bold tracking-tight text-base-content uppercase">
              HOW I ENGINEER & BUILD SYSTEMS
            </h3>
            <p className="text-xs text-base-content/80 leading-relaxed font-sans">
              I approach software engineering with a product-first mindset: decomposing complex real-world requirements into modular frontend architectures, resilient backend engines, and fluid interactive user flows. By combining human-in-the-loop Vibe Engineering with <span className="font-semibold text-base-content">AI coding agents, custom agent skills, and LLM pair programming</span>, I accelerate developer iteration while ensuring high architectural craft, robust state management, and pixel-perfect polish across every project.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[10px] text-base-content/70">
              <span className="bg-base-100 px-2 py-0.5 rounded border border-base-300/60 font-semibold">MODULAR ARCHITECTURE</span>
              <span className="bg-base-100 px-2 py-0.5 rounded border border-base-300/60 font-semibold">AI & AGENT SKILLS</span>
              <span className="bg-base-100 px-2 py-0.5 rounded border border-base-300/60 font-semibold">STATE CACHING</span>
              <span className="bg-base-100 px-2 py-0.5 rounded border border-base-300/60 font-semibold">REST & WEBSOCKET APIS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Preview See More Button */}
      {isPreview && onNavigate && (
        <div className="mt-8 text-center sm:text-right">
          <button
            onClick={() => onNavigate('projects')}
            className="btn btn-neutral btn-sm font-mono text-xs gap-2 rounded-xl group"
          >
            <span>View All Works ({projects.length})</span>
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
