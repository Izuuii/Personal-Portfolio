import React from 'react';
import { X, Layers, Calendar, UserCheck, CheckCircle, ExternalLink, Code2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <dialog className="modal modal-open bg-black/60 backdrop-blur-xs">
      <div className="modal-box max-w-2xl bg-base-100 border border-base-300 shadow-2xl p-6 relative rounded-2xl">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-base-content/60 hover:text-base-content"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge badge-neutral font-mono text-[10px] uppercase tracking-wider">
              {project.category}
            </span>
            <span className="badge badge-outline font-mono text-[10px] uppercase tracking-wider">
              {project.role}
            </span>
          </div>
          <h3 className="text-xl font-bold tracking-tight text-base-content">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-base-content/60 flex items-center gap-2">
            <Calendar size={12} />
            {project.date}
          </p>
        </div>

        {/* Divider */}
        <div className="divider my-4" />

        {/* Project Description & Key Achievements */}
        <div className="space-y-4 text-sm text-base-content/80">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-base-content/60 mb-1 flex items-center gap-1.5">
              <Code2 size={13} />
              Project Overview
            </h4>
            <p className="text-xs leading-relaxed">
              {project.longDescription || project.subtitle}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-base-content/60 mb-2 flex items-center gap-1.5">
              <CheckCircle size={13} className="text-emerald-500" />
              Key Deliverables & Responsibilities
            </h4>
            <ul className="space-y-2 text-xs">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-base-200/40 p-2.5 rounded-lg border border-base-200">
                  <span className="font-mono text-[10px] text-base-content/40 mt-0.5">0{idx + 1}.</span>
                  <span className="leading-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack List */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-base-content/60 mb-2 flex items-center gap-1.5">
              <Layers size={13} />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech, idx) => (
                <span key={idx} className="badge badge-neutral badge-dash font-mono text-[11px] px-2.5 py-1">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="modal-action mt-6 pt-4 border-t border-base-200">
          <button 
            onClick={onClose} 
            className="btn btn-sm btn-ghost font-mono text-xs"
          >
            Close
          </button>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-sm btn-neutral font-mono text-xs gap-1.5"
          >
            View Repository
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
}
