import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full glass text-brand-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            Senior Software Engineer
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-display font-extrabold mb-6 leading-[1.1]"
          >
            Abdulrhman <br />
            <span className="text-gradient">AlShameri</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed"
          >
            Senior Software Engineer | Full-Stack Developer | ERP Specialist | UX/UI Designer. 
            Building scalable digital solutions with over 5 years of expertise.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects" 
              className="px-8 py-4 bg-brand-primary hover:bg-brand-secondary text-bg-dark font-bold rounded-xl transition-all flex items-center gap-2 group shadow-lg shadow-brand-primary/20"
            >
              Explore Portfolio
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 glass hover:bg-white/10 text-white font-bold rounded-xl transition-all flex items-center gap-2"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-6 mt-12"
          >
            <a href="https://github.com/abdulrhman7-star" target="_blank" className="text-slate-500 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/abdulrhman-abdullah-full-stack-developer" target="_blank" className="text-slate-500 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:eng_abdu9@outlook.sa" className="text-slate-500 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden border-2 border-white/10 glass p-4">
            <img 
              src="src/1.jpg" 
              alt="Abdulrhman AlShameri" 
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 glass rounded-2xl -z-10 rotate-12" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-primary/20 rounded-2xl -z-10 -rotate-12" />
          
          {/* Floating Stats */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -right-12 glass p-4 rounded-2xl shadow-xl"
          >
            <p className="text-2xl font-bold text-white">5+</p>
            <p className="text-[10px] uppercase tracking-wider text-slate-400">Years Experience</p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 -left-12 glass p-4 rounded-2xl shadow-xl"
          >
            <p className="text-2xl font-bold text-white">50+</p>
            <p className="text-[10px] uppercase tracking-wider text-slate-400">Projects Delivered</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
