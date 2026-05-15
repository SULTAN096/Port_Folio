import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Shield, Network, Database, ChevronRight, Calendar, Clock, X, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SEO } from '../components/SEO';

const posts = [
  {
    id: 1,
    title: "Low-Level Stack Analysis: C++ Memory Management",
    excerpt: "Exploring the intricacies of stack allocation, pointer arithmetic, and manual memory management in high-performance C++ applications.",
    content: `
      In the realm of high-performance computing, understanding memory management is paramount. C++ provides low-level primitives that allow developers to control how memory is allocated and deallocated.

      **Stack vs Heap**
      The stack is used for static memory allocation and local variables, while the heap is used for dynamic memory allocation. Understanding the stack frame, return addresses, and local variable scope is critical for preventing buffer overflows and memory leaks.

      **Pointer Arithmetic**
      Directly manipulating memory addresses allows for optimized data structures but comes with significant risks. Proper use of smart pointers (unique_ptr, shared_ptr) in modern C++ helps mitigate these risks while retaining performance.
    `,
    date: "May 12, 2024",
    readTime: "8 min read",
    category: "Technical",
    icon: <Terminal className="text-accent" size={24} />,
    tags: ["C++", "Memory"]
  },
  {
    id: 2,
    title: "Network Security: Proactive Packet Inspection",
    excerpt: "Leveraging Wireshark for deep packet analysis and setting up enterprise-grade security protocols for authenticated communication.",
    content: `
      Network security is no longer just about firewalls; it's about understanding the data flowing through your pipes.

      **Packet Analysis**
      Using tools like Wireshark allows us to inspect individual frames and packets. By analyzing TCP handshakes, TLS negotiation, and application-layer payloads, we can identify anomalies that signify a potential intrusion.

      **Hardening Protocols**
      Implementing secure tunneling (SSH, VPNs) and ensuring that all administrative traffic is encrypted is the first step in building a resilient infrastructure.
    `,
    date: "April 28, 2024",
    readTime: "12 min read",
    category: "Security",
    icon: <Shield className="text-accent" size={24} />,
    tags: ["Networking", "CyberSec"]
  },
  {
    id: 3,
    title: "System Architecture: Relational vs NoSQL Performance",
    excerpt: "A comparative study on data modeling strategies between SQL Server and MongoDB for scalable enterprise architectures.",
    content: `
      Choosing the right database depends on the access patterns of your application.

      **Relational (SQL Server)**
      Best for complex queries, transactions (ACID compliance), and highly structured data. Normalization helps maintain data integrity at the cost of join performance.

      **NoSQL (MongoDB)**
      Optimized for high-throughput, horizontal scalability, and flexible schemas. Storing related data in single documents can significantly reduce latency for modern web applications.
    `,
    date: "April 15, 2024",
    readTime: "10 min read",
    category: "Architecture",
    icon: <Database className="text-accent" size={24} />,
    tags: ["Databases", "Systems"]
  },
  {
    id: 4,
    title: "Cryptographic Hashing: SHA-256 in Assembly",
    excerpt: "Breaking down the mathematical foundations and implementing secure hashing algorithms using x86 Assembly procedures.",
    content: `
      To truly understand security, one must understand it at the bit-level.

      **Assembly Logic**
      Implementing SHA-256 in x86 Assembly requires precise register management and efficient implementation of logical shifts, rotations, and XOR operations.

      **Mathematical Foundations**
      The strength of SHA-256 lies in its one-way function and collision resistance. By auditing the implementation at the low level, we ensure that there are no side-channel vulnerabilities.
    `,
    date: "March 30, 2024",
    readTime: "15 min read",
    category: "Research",
    icon: <Network className="text-accent" size={24} />,
    tags: ["Low-Level", "Crypto"]
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

  return (
    <div id="blog-page" className="relative min-h-screen bg-transparent overflow-hidden pt-32 pb-24">
      <SEO 
        title="Journal" 
        description="Technical articles and deep dives into system engineering, network security, and low-level architecture by Muhammad Sultan."
        keywords="Technical Blog, C++ Memory Management, Network Security Analysis, Software Engineering Insights"
      />
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <div className="absolute inset-0 bg-[#020617]/80 z-10" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="mb-20"
        >
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">
            Technical Insights
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-light lowercase">
            Deep dives into low-level engineering, network security, and system architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:border-accent/40 transition-all group cursor-pointer"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="p-4 bg-accent/10 rounded-2xl group-hover:scale-110 transition-transform">
                    {post.icon}
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-widest mb-2 block">{post.category}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter leading-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/5">
                  <div className="flex gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] text-slate-500 uppercase tracking-widest font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-2 text-accent text-[10px] font-mono uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    Read More <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Article Full View Overlay */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-[#020617]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="max-w-4xl w-full h-full max-h-[85vh] bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col"
              >
                {/* Modal Header */}
                <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="flex items-center gap-2 text-slate-400 hover:text-accent transition-colors font-mono text-[10px] uppercase tracking-widest"
                  >
                    <ArrowLeft size={16} /> Back to Insights
                  </button>
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="p-2 bg-white/5 rounded-full text-slate-400 hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="flex-grow overflow-y-auto p-8 md:p-16 custom-scrollbar">
                  <div className="mb-12">
                     <span className="text-[10px] font-mono text-accent uppercase tracking-[0.3em] mb-4 block font-bold">
                        {selectedPost.category} // {selectedPost.date}
                     </span>
                     <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight mb-8">
                       {selectedPost.title}
                     </h2>
                     <div className="flex gap-3">
                        {selectedPost.tags.map(tag => (
                          <span key={tag} className="px-4 py-1.5 bg-accent/5 border border-accent/20 rounded-full text-[10px] text-accent uppercase tracking-widest font-mono">
                            {tag}
                          </span>
                        ))}
                     </div>
                  </div>

                  <div className="prose prose-invert prose-slate max-w-none">
                     {selectedPost.content.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="text-slate-400 text-lg leading-relaxed mb-6 font-light">
                           {paragraph.trim().startsWith('**') ? (
                              <span className="text-white font-bold block mb-2">{paragraph.trim().replace(/\*\*/g, '')}</span>
                           ) : (
                              paragraph.trim()
                           )}
                        </p>
                     ))}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-8 border-t border-white/5 bg-white/[0.02] text-center">
                  <p className="font-mono text-[9px] text-slate-600 uppercase tracking-widest">
                    Post ID: 00{selectedPost.id} // Muhammad Sultan Technical Labs
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center"
        >
          <Link 
            to="/contact"
            className="inline-flex items-center gap-4 text-accent hover:text-white transition-colors font-mono text-[10px] uppercase tracking-[0.3em] font-bold"
          >
            Looking for a custom solution? Let's connect //
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

