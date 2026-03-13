import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Header />
      
      <main>
        <Hero />
        
        <section id="about" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden glass p-3">
                  <img 
                    src="src/11.png" 
                    alt="Abdulrhman AlShameri" 
                    className="w-full h-full object-cover rounded-2xl grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-2xl max-w-[200px]">
                  <p className="text-brand-primary font-bold text-lg mb-1">Strategic</p>
                  <p className="text-xs text-slate-400 leading-relaxed">Technical leadership and mentorship mindset.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Strategic Technical <span className="text-brand-primary">Leadership</span>
                </h2>
                <div className="space-y-6 text-slate-400 leading-relaxed">
                  <p>
                    Motivated and detail-oriented Senior Software Engineer with over 5 years of experience in full-stack development, 
                    supported by a solid educational background in Computer Science and Technology.
                  </p>
                  <p>
                    Proven track record in managing and delivering complex web applications, optimizing ERP and CRM systems, 
                    and building scalable, user-centric software solutions. Proficient in network architecture, 
                    modern development frameworks, and back-end integration.
                  </p>
                  <p>
                    Adept at collaborating with cross-functional teams to enhance product performance and drive business growth. 
                    Eager to contribute technical expertise and creative problem-solving to innovative, forward-thinking projects.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mt-10">
                  <div>
                    <p className="text-white font-bold text-xl">50+</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Projects Completed</p>
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl">10+</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Certifications</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
