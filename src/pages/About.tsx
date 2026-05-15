import { motion } from 'motion/react';
import { Code2, Shield, Network, Cpu, Brain } from 'lucide-react';
import { SEO } from '../components/SEO';

export default function About() {
  return (
    <div id="expertise-page" className="relative min-h-screen bg-transparent overflow-hidden pt-32 pb-24">
      <SEO 
        title="Expertise" 
        description="Technical skills and academic background of Muhammad Sultan. Specialized in C++, Network Security, Assembly, and Software Architecture at UET Lahore."
        keywords="C++, Network Security, Kali Linux, UET Lahore, Software Architecture, Muhammad Sultan Skills"
      />
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <div className="absolute inset-0 bg-[#020617]/70 z-10" />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-6">
        {/* Header */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col mb-12"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              Technical Mastery
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl"
          >
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
              Computer Science student at <span className="text-white font-bold">UET Lahore</span> (2024-2028). 
              Focused on software development, networks, and cyber security with a hands-on approach to complex system engineering.
            </p>
          </motion.div>
        </section>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Programming */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-10 backdrop-blur-xl hover:border-accent/40 transition-all group rounded-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-accent/10 rounded-xl text-accent">
                <Code2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Programming</h3>
            </div>
            <ul className="grid grid-cols-2 gap-4">
              {['C++', 'SQL', 'Assembly', 'Python', 'HTML', 'CSS', 'JavaScript'].map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-slate-400 font-mono text-sm">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Networking & Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-10 backdrop-blur-xl hover:border-accent/40 transition-all group rounded-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-accent/10 rounded-xl text-accent">
                <Shield size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Networking & Security</h3>
            </div>
            <ul className="grid grid-cols-2 gap-4">
              {['Packet Tracer', 'Wireshark', 'Kali Linux', 'OpenSSL'].map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-slate-400 font-mono text-sm">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Databases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-10 backdrop-blur-xl hover:border-accent/40 transition-all group rounded-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-accent/10 rounded-xl text-accent">
                <Network size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Databases</h3>
            </div>
            <ul className="grid grid-cols-2 gap-4">
              {['SQL Server', 'MongoDB'].map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-slate-400 font-mono text-sm">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-10 backdrop-blur-xl hover:border-accent/40 transition-all group rounded-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-accent/10 rounded-xl text-accent">
                <Cpu size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Tools</h3>
            </div>
            <ul className="grid grid-cols-2 gap-4">
              {['Visual Studio', 'VS Code', 'GitHub'].map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-slate-400 font-mono text-sm">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Detailed Sections (Bento-ish) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Lab Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-accent/5 border border-accent/10 p-10 rounded-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-accent/10 rounded-xl text-accent">
                <Network size={24} />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-widest">Lab Experience</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              {[
                { title: 'Traffic Analysis', detail: 'Wireshark packet inspection & filtering' },
                { title: 'Integrity', detail: 'SHA-256 file verification protocols' },
                { title: 'Infrastructure', detail: 'Router/Switch & Telnet configuration' },
                { title: 'Low Level', detail: 'Assembly stack operations & procedures' },
                { title: 'OS Security', detail: 'Linux permissions & root hardening' }
              ].map((lab) => (
                <div key={lab.title} className="space-y-1">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide">{lab.title}</h4>
                  <p className="text-slate-500 text-xs font-mono">{lab.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-10 rounded-2xl flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/10 rounded-xl text-slate-300">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-widest">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Problem Solving', 'Communication', 'Teamwork', 'Adaptability', 'Time Management', 'Quick Learner'].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-300 uppercase tracking-wider font-bold">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
