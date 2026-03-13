import { motion } from "motion/react";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

const certifications = [
  "The Complete SQL Bootcamp – Udemy | 2022",
  "AWS Cloud Practitioner (2025)",
  "Meta Backend Developer (Coursera 2023)",
  "Project Management Professional (PMP) | (PMI) | 2024",
  "ERPNext Developer (Frappe 2024)",
  "Scrum Master Certified (Scrum Alliance 2022)",
  "Google UX Design Certificate (2023)",
  "Odoo Functional & Technical (2023)",
];

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 glass rounded-lg flex items-center justify-center">
                <GraduationCap className="text-brand-primary" size={20} />
              </div>
              <h2 className="text-2xl font-display font-bold">Education</h2>
            </div>
            
            <div className="glass p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-brand-primary/10 transition-all" />
              <h3 className="text-xl font-bold mb-2">Bachelor of Science in Information Technology</h3>
              <p className="text-brand-primary font-medium mb-4">Al-Saeed University, Taiz, Yemen | 2021</p>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-bold rounded-full">
                  GPA: 92.58/100
                </span>
                <span className="text-slate-500 text-xs font-medium italic">
                  (Excellent with Honors)
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Focused on computer science fundamentals, network architecture, and software engineering principles. 
                Graduated at the top of the class with a strong emphasis on practical systems development.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 glass rounded-lg flex items-center justify-center">
                <Award className="text-brand-primary" size={20} />
              </div>
              <h2 className="text-2xl font-display font-bold">Certifications</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass p-4 rounded-xl flex gap-3 items-start hover:border-brand-primary/20 transition-colors"
                >
                  <CheckCircle2 className="text-brand-primary shrink-0 mt-0.5" size={16} />
                  <span className="text-xs font-medium text-slate-300 leading-tight">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
