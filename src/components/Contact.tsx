import { motion } from "motion/react";
import { Mail, MapPin, Send, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold mb-6"
            >
              Let's <span className="text-brand-primary">Connect</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 mb-12 max-w-md"
            >
              Ready to build or scale your next system? I'm available for strategic consulting, 
              freelance development, or full-time opportunities.
            </motion.p>

            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="text-brand-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white mb-1">Email Me</p>
                  <a href="mailto:eng_abdu9@outlook.sa" className="text-slate-400 hover:text-brand-primary transition-colors">
                    eng_abdu9@outlook.sa
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white mb-1">Location</p>
                  <p className="text-slate-400">Available Worldwide  </p>
                </div>
              </motion.div>

              <div className="flex gap-4 pt-4">
                <a href="https://linkedin.com/in/abdulrhman-abdullah-full-stack-developer" target="_blank" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-brand-primary hover:text-bg-dark transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="https://github.com/abdulrhman7-star" target="_blank" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-brand-primary hover:text-bg-dark transition-all">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</label>
                  <input 
                    type="text" 
                    placeholder=" "
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-primary outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-primary outline-none transition-all resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-brand-primary hover:bg-brand-secondary text-bg-dark font-bold rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-brand-primary/20"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
