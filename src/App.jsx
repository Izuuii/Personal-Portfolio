import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import HeroHeader from './components/HeroHeader';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Stack from './components/Stack';
import GithubContributions from './components/GithubContributions';
import CertificationsEducation from './components/CertificationsEducation';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content antialiased overflow-x-hidden">
      {/* Sidebar Navigation */}
      <Sidebar currentPage={currentPage} setCurrentPage={handlePageChange} />

      {/* Main Content Area */}
      <div className="lg:pl-60 min-h-screen w-full flex justify-center overflow-x-hidden">
        <main className="w-full max-w-4xl lg:max-w-5xl px-4 sm:px-6 lg:px-10 pt-16 lg:pt-8 transition-all duration-300 overflow-x-hidden">

          {/* HOME PAGE VIEW */}
          {currentPage === 'home' && (
            <>
              <HeroHeader />
              <Projects isPreview={true} onNavigate={handlePageChange} />
              <Experience isPreview={true} onNavigate={handlePageChange} />
              <Stack isPreview={true} onNavigate={handlePageChange} />
              <GithubContributions username="Izuuii" />
              <CertificationsEducation isPreview={true} onNavigate={handlePageChange} />
            </>
          )}

          {/* DEDICATED PROJECTS PAGE */}
          {currentPage === 'projects' && (
            <Projects isPreview={false} onNavigate={handlePageChange} />
          )}

          {/* DEDICATED EXPERIENCE PAGE */}
          {currentPage === 'experience' && (
            <Experience isPreview={false} onNavigate={handlePageChange} />
          )}

          {/* DEDICATED STACK PAGE */}
          {currentPage === 'stack' && (
            <Stack isPreview={false} onNavigate={handlePageChange} />
          )}

          {/* DEDICATED CERTIFICATIONS & EDUCATION PAGE */}
          {(currentPage === 'certifications' || currentPage === 'education') && (
            <CertificationsEducation isPreview={false} onNavigate={handlePageChange} />
          )}

          {/* FOOTER */}
          <Footer />
        </main>
      </div>
    </div>
  );
}
