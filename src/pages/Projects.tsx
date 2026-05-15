import { motion } from 'motion/react';
import { Github, ExternalLink, Folder, Loader2, ArrowRight, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  language: string;
  stargazers_count: number;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/SULTAN096/repos?sort=updated&per_page=100')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data.filter(repo => !repo.fork));
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching repos:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div id="projects-page" className="relative min-h-screen bg-transparent overflow-hidden pt-32 pb-24">
      <SEO 
        title="Works" 
        description="A showcase of technical projects by Muhammad Sultan, featuring GitHub repositories related to software architecture and system engineering."
        keywords="GitHub Projects, Software Engineering Portfolio, Muhammad Sultan Projects"
      />
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <div className="absolute inset-0 bg-[#020617]/70 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="flex flex-col mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
            Project Architecture
          </h2>
        </motion.div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 text-accent gap-4">
            <Loader2 className="animate-spin" size={48} />
            <span className="font-mono text-sm tracking-widest uppercase">Syncing Repositories...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            {repos.map((project, idx) => (
              <motion.a
                key={project.id}
                href={project.html_url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (idx % 6) * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-8 backdrop-blur-xl hover:border-accent/40 transition-all group rounded-2xl flex flex-col justify-between cursor-pointer no-underline h-full"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition-transform">
                      <Folder size={24} />
                    </div>
                    <div className="flex gap-4">
                      <div className="text-slate-400 group-hover:text-accent transition-colors">
                        <Github size={20} />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-wider group-hover:text-accent transition-colors truncate">
                    {project.name.replace(/-/g, ' ')}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3">
                    {project.description || "Experimental development and research project focused on system architecture."}
                  </p>

                  <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] text-accent/60 mb-8 uppercase tracking-widest">
                    {project.language && <li>// {project.language}</li>}
                    {project.topics && project.topics.slice(0, 2).map(tag => <li key={tag}>// {tag}</li>)}
                  </ul>
                </div>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-[0.2em] text-[10px] group-hover:translate-x-2 transition-transform">
                    Explore Project <ArrowRight size={14} />
                  </div>
                  {project.homepage && (
                    <div className="text-white group-hover:text-accent transition-colors">
                      <ExternalLink size={16} />
                    </div>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {/* LinkedIn Focused Section */}
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-accent/5 border border-accent/20 rounded-3xl p-10 md:p-16 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
            <Linkedin size={120} className="text-accent" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <span className="font-mono text-accent text-[10px] tracking-[.5em] uppercase mb-6 block font-bold">Featured // Professional</span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
              Professional <br /> Network & Certs
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Beyond code, I maintain an active presence on LinkedIn where I share technical insights, network with engineers, and document my progress at UET Lahore.
            </p>
            <a 
              href="https://www.linkedin.com/in/muhammad-sultan08/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-4 bg-accent text-[#020617] px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-all hover:scale-105"
            >
              View LinkedIn Profile <Linkedin size={18} />
            </a>
          </div>
        </motion.div>

        <div className="mt-32 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="https://github.com/SULTAN096" 
            target="_blank" 
            rel="noreferrer"
            className="group relative inline-flex items-center gap-4 bg-accent/5 hover:bg-accent/10 px-10 py-5 rounded-full border border-accent/20 transition-all overflow-hidden w-full sm:w-auto justify-center"
          >
             <div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
             <span className="relative text-accent font-mono text-sm uppercase tracking-[0.3em] font-bold">Follow on GitHub</span>
             <Github size={18} className="relative text-accent" />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/muhammad-sultan08/" 
            target="_blank" 
            rel="noreferrer"
            className="group relative inline-flex items-center gap-4 bg-accent/5 hover:bg-accent/10 px-10 py-5 rounded-full border border-accent/20 transition-all overflow-hidden w-full sm:w-auto justify-center"
          >
             <div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
             <span className="relative text-accent font-mono text-sm uppercase tracking-[0.3em] font-bold">Connect on LinkedIn</span>
             <Linkedin className="relative text-accent" size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
