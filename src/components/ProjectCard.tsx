import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      id={`project-card-${project.id}`}
      whileHover={{ y: -5 }}
      className="bg-white rounded-3xl p-1 border border-slate-200 shadow-sm transition-all hover:shadow-xl group"
    >
      <div className="aspect-[16/10] bg-slate-100 rounded-2xl overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            {project.tags.join(' • ')}
          </p>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
        <p className="text-slate-500 text-sm mb-8 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
            Case Study
          </span>
          <div className="flex gap-4">
             {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-slate-900 transition-colors"
                title="Live Demo"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-slate-900 transition-colors"
                title="GitHub Code"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
