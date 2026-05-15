import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Phone, MapPin, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';

export default function Contact() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const pkrTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).format(new Date());
      setTime(pkrTime);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="contact-page" className="relative min-h-screen bg-transparent overflow-hidden pt-32 pb-24">
      <SEO 
        title="Contact" 
        description="Get in touch with Muhammad Sultan for software development opportunities, collaborations, or technical discussions."
        keywords="Contact Muhammad Sultan, UET Lahore Student Contact, Hire Software Engineer, Software Collaboration"
      />
      {/* Technical Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#020617]/80 z-10" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="mb-24"
        >
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4">
            Contact
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Side: Contact Methods */}
          <div className="lg:col-span-12 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/5 border border-white/10 p-10 backdrop-blur-xl rounded-3xl group hover:border-accent/30 transition-all"
            >
              <a 
                href="mailto:sultan08.f@gmail.com"
                className="text-3xl md:text-5xl font-bold text-white hover:text-accent transition-colors break-all flex items-center gap-4 group/mail"
              >
                sultan08.f@gmail.com
                <Mail className="opacity-20 group-hover/mail:opacity-100 group-hover/mail:translate-x-2 transition-all" size={32} />
              </a>
              <p className="mt-8 text-slate-400 text-lg max-w-4xl">
                I'm currently open for new opportunities and collaborations. Whether you have a groundbreaking project in mind or just want to say hello, my inbox is always monitored.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.a 
                href="https://wa.me/923054700154"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-accent/5 border border-accent/20 p-8 rounded-2xl flex items-center gap-6 hover:bg-accent/10 transition-all group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <div className="relative z-10 p-4 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div className="relative z-10">
                  <span className="block font-mono text-[10px] text-accent uppercase tracking-widest mb-1">WhatsApp</span>
                  <span className="text-white font-bold">+92 305 4700154</span>
                </div>
              </motion.a>

              <motion.a 
                href="https://github.com/SULTAN096"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-accent/5 border border-accent/20 p-8 rounded-2xl flex items-center gap-6 hover:bg-accent/10 transition-all group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <div className="relative z-10 p-4 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition-transform">
                  <Github size={24} />
                </div>
                <div className="relative z-10">
                  <span className="block font-mono text-[10px] text-accent uppercase tracking-widest mb-1">GitHub</span>
                  <span className="text-white font-bold">@SULTAN096</span>
                </div>
              </motion.a>

              <motion.a 
                href="https://www.linkedin.com/in/muhammad-sultan08/"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-accent/5 border border-accent/20 p-8 rounded-2xl flex items-center gap-6 hover:bg-accent/10 transition-all group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <div className="relative z-10 p-4 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </div>
                <div className="relative z-10">
                  <span className="block font-mono text-[10px] text-accent uppercase tracking-widest mb-1">LinkedIn</span>
                  <span className="text-white font-bold">@muhammad-sultan08</span>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Status Section Below or Integrated */}
          <div className="lg:col-span-12">
            <motion.div 
               initial={{ opacity: 1 }}
               className="bg-accent border border-accent rounded-3xl p-10 text-[#020617] flex flex-col md:flex-row justify-between items-center gap-8"
            >
              <div className="flex items-center gap-6">
                <Globe className="animate-spin-slow" size={40} />
                <div>
                  <span className="block font-mono text-[10px] uppercase font-black tracking-widest opacity-60">Status</span>
                  <span className="font-bold uppercase tracking-tight text-2xl">Available For Work</span>
                </div>
              </div>
              <div className="text-center md:text-right">
                <span className="block font-mono text-[10px] uppercase font-black tracking-widest opacity-60">Local Time // PKT</span>
                <span className="text-4xl font-black tracking-tighter tabular-nums">{time}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
