import { motion } from "motion/react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          href="#"
          className="text-xl font-display font-bold text-white tracking-tighter"
        >
          AlShameri<span className="text-brand-primary">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-brand-primary transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            href="#contact"
            className="px-5 py-2 bg-brand-primary hover:bg-brand-secondary text-bg-dark font-bold text-sm rounded-full transition-all hover:scale-105"
          >
            About me
          </motion.a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full glass md:hidden py-6 px-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-200 hover:text-brand-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-6 mt-4 pt-4 border-t border-white/10">
            <a href="https://github.com/abdulrhman7-star" target="_blank" className="text-slate-400 hover:text-white">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/abdulrhman-abdullah-full-stack-developer" target="_blank" className="text-slate-400 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="mailto:eng_abdu9@outlook.sa" className="text-slate-400 hover:text-white">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
