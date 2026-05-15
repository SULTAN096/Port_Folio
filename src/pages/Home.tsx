import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export default function Home() {
  return (
    <div id="home-page" className="relative min-h-screen flex flex-col justify-center bg-transparent overflow-hidden">
      <SEO 
        title="Software Engineer" 
        description="Muhammad Sultan - Computer Science student at UET Lahore. Specializing in high-performance web development and system engineering."
      />
      {/* Background Tech Simulation Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#22d3ee 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
        
        {/* Subtle global dark overlay to ensure text contrast */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Animated Particles Simulation */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent/20"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}

        {/* Moving Lines */}
        <motion.div 
          className="absolute inset-0 opacity-[0.05]"
          animate={{ backgroundPosition: ['0% 0%', '0% 100%'] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ 
            backgroundImage: 'linear-gradient(to bottom, transparent 49.5%, #22d3ee 50%, transparent 50.5%)',
            backgroundSize: '100% 100px'
          }}
        />
      </div>

      {/* Hero Content */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
        <div className="relative flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[14vw] md:text-[11vw] font-black text-white leading-[0.9] tracking-tighter uppercase"
          >
            MUHAMMAD
          </motion.h1>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-[14vw] md:text-[11vw] font-black text-white leading-[0.9] tracking-tighter uppercase mt-2 md:mt-4"
          >
            SULTAN
          </motion.h1>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="mt-12"
        >
          <span className="font-mono text-sm md:text-lg tracking-[0.5em] uppercase font-bold text-accent">
            Software Developer, Web Developer
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 w-full max-w-lg"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <Link 
              to="/projects"
              className="group relative inline-flex items-center gap-3 bg-accent/5 hover:bg-accent/10 px-10 py-5 rounded-full border border-accent/20 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative text-accent font-bold uppercase tracking-[0.2em] text-xs">Explore Work</span>
              <ArrowRight size={18} className="relative text-accent group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link 
              to="/about"
              className="group relative inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 px-10 py-5 rounded-full border border-white/10 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative text-white font-bold uppercase tracking-[0.2em] text-xs">About Me</span>
            </Link>
          </div>
        </motion.div>
      </section>
      
      {/* Large Watermark */}
      <div className="absolute right-[-2%] bottom-[-5%] pointer-events-none opacity-[0.015] select-none">
        <h1 className="text-[35rem] font-black uppercase leading-none text-white">SULTAN</h1>
      </div>
    </div>
  );
}
