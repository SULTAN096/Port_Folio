import { motion } from 'motion/react';
import { Github, Linkedin, Menu, X, Code2, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/', num: '01' },
  { name: 'Expertise', path: '/about', num: '02' },
  { name: 'Work', path: '/projects', num: '03' },
  { name: 'Blog', path: '/blog', num: '04' },
  { name: 'Contact', path: '/contact', num: '05' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isProjects = location.pathname === '/projects';
  const isContact = location.pathname === '/contact';
  const isBlog = location.pathname === '/blog';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        id="main-nav" 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'h-16 bg-[#020617]/90 backdrop-blur-md border-b border-white/5' : 'h-20 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center"
          >
            <button 
              onClick={() => setIsZoomed(!isZoomed)}
              className="w-10 h-10 overflow-hidden rounded-full border border-white/5 group bg-white/5 flex items-center justify-center cursor-zoom-in"
            >
              <img 
                src="/image.jpeg" 
                alt="Muhammad Sultan" 
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150";
                }}
              />
            </button>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  id={`nav-link-${link.name.toLowerCase()}`}
                  to={link.path}
                  className="flex flex-col items-center group relative"
                >
                  <span className="font-mono text-[9px] text-slate-400 group-hover:text-accent transition-colors mb-0.5">{link.num}</span>
                  <div className="flex items-center gap-1">
                    <span className="font-mono text-[11px] text-accent opacity-0 group-hover:opacity-100 transition-opacity tracking-widest">//</span>
                    <span className={`text-[12px] uppercase font-bold tracking-[0.2em] transition-colors ${
                      location.pathname === link.path ? 'text-accent' : 'text-slate-100 group-hover:text-accent'
                    }`}>
                      {link.name}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-accent focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed inset-0 z-40 bg-[#020617]/95 backdrop-blur-xl flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="flex flex-col items-center gap-12">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="flex flex-col items-center gap-2 group"
                >
                  <span className="font-mono text-xs text-slate-400 group-hover:text-accent transition-colors">{link.num}</span>
                  <span className="text-3xl font-bold text-slate-100 hover:text-accent transition-colors uppercase tracking-widest">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Image Zoom Overlay */}
      {isZoomed && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <motion.img 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src="/image.jpeg" 
            alt="Muhammad Sultan" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150";
            }}
          />
          <button className="absolute top-8 right-8 text-white hover:text-accent transition-colors">
            <X size={40} />
          </button>
        </motion.div>
      )}

      {/* Sidebars */}
      {!isProjects && !isContact && !isBlog && (
        <>
          <div className="hidden lg:block fixed left-6 bottom-0 z-40">
            <div className="flex flex-col items-center gap-10 after:content-[''] after:w-px after:h-24 after:bg-white/5 after:mt-4">
              <motion.a 
                whileHover={{ y: -4, color: '#22d3ee' }}
                href="https://github.com/SULTAN096" target="_blank" rel="noreferrer" className="text-accent transition-all">
                <Github className={isHome ? "w-8 h-8" : "w-6 h-6"} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -4, color: '#22d3ee' }}
                href="https://www.linkedin.com/in/muhammad-sultan08/" target="_blank" rel="noreferrer" className="text-accent transition-all">
                <Linkedin className={isHome ? "w-8 h-8" : "w-6 h-6"} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -4, color: '#22d3ee' }}
                href="https://wa.me/923054700154" target="_blank" rel="noreferrer" className="text-accent transition-all">
                <Phone className={isHome ? "w-8 h-8" : "w-6 h-6"} />
              </motion.a>
            </div>
          </div>

          <div className="hidden lg:block fixed right-6 bottom-0 z-40">
            <div className="flex flex-col items-center gap-10 after:content-[''] after:w-px after:h-24 after:bg-white/5 after:mt-4">
              <motion.a 
                whileHover={{ y: -4, color: '#22d3ee' }}
                href="mailto:sultan08.f@gmail.com" 
                className={`font-mono ${isHome ? 'text-[15px]' : 'text-[13px]'} tracking-[0.3em] font-bold text-accent transition-all vertical-text`}
                style={{ writingMode: 'vertical-rl' }}
              >
                sultan08.f@gmail.com
              </motion.a>
            </div>
          </div>
        </>
      )}
    </>

  );
}

export function Footer() {
  return (
    <footer id="main-footer" className="py-12 bg-transparent border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          <button 
            onClick={() => {
              // Creating a custom event for Navbar to handle zoom
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-12 h-12 overflow-hidden rounded-full border border-white/5 bg-white/5 p-1 mb-2 group"
          >
            <img 
              src="/image.jpeg" 
              alt="Muhammad Sultan" 
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150";
              }}
            />
          </button>
          <p className="font-mono text-[10px] text-accent uppercase tracking-[0.4em] font-bold">
            Designed & Built by Muhammad Sultan
          </p>
        </div>
      </div>
    </footer>
  );
}
