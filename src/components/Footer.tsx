import { motion } from "motion/react";
import { Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <a href="#" className="text-xl font-display font-bold text-white tracking-tighter">
            AlShameri<span className="text-brand-primary">.</span>
          </a>
          <p className="text-sm text-slate-500 mt-2">
            Senior Software Engineer | Full-Stack Developer | ERP Specialist.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <a href="#about" className="text-sm text-slate-400 hover:text-white transition-colors">About</a>
          <a href="#experience" className="text-sm text-slate-400 hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="text-sm text-slate-400 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex gap-4">
          <a href="https://linkedin.com/in/abdulrhman-abdullah-full-stack-developer" target="_blank" className="text-slate-500 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/abdulrhman7-star" target="_blank" className="text-slate-500 hover:text-white transition-colors">
            <Github size={20} />
          </a>
        </div>

        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} Abdulrhman AlShameri. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
