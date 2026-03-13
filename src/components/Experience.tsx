import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Remote",
    period: "09/2021 – Present",
    description: [
      "Delivered custom software solutions for clients, optimizing project timelines and exceeding expectations.",
      "Designed and developed scalable ERP, CRM, and POS systems for multiple clients.",
      "Built modern full-stack applications using Next.js and Node.js.",
      "Integrated AI-powered modules to automate workflows and support predictive sales forecasting.",
      "Optimized PostgreSQL queries and database architecture, improving system performance by 30%.",
    ],
  },
  {
    role: "Full Stack Web Developer",
    company: "Freelance",
    period: "11/2021 – Present",
    description: [
      "Developed responsive web applications using JavaScript, Node.js, and modern frontend frameworks.",
      "Developed RESTful APIs and integrated backend services with frontend applications.",
      "Implemented performance optimization techniques to improve application speed and reliability.",
      "Built a full-stack e-commerce platform using Next.js, Node.js, and PostgreSQL.",
    ],
  },
  {
    role: "Applications Programmer & System Analyst",
    company: "Mizaya Import and Export Company",
    location: "Djibouti",
    period: "03/2021 – 11/2021",
    description: [
      "Collaborated with cross-functional teams to design user-friendly interfaces and optimized website performance.",
      "Conducted extensive quality assurance testing to ensure bug-free, responsive, and user-friendly websites.",
      "Improved Odoo ERP system performance through data analysis and database optimization.",
      "Successfully optimized CRM systems to enhance customer interaction, increasing client satisfaction by 70%.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold mb-6 sticky top-24"
            >
              Professional <br />
              <span className="text-brand-primary">Journey</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 mb-8 sticky top-44"
            >
              Over 5 years of experience in building robust software systems and leading technical initiatives.
            </motion.p>
          </div>

          <div className="md:w-2/3 space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 border-l border-slate-800"
              >
                {/* Timeline Dot */}
                <div className="absolute top-0 -left-1.5 w-3 h-3 rounded-full bg-brand-primary shadow-[0_0_10px_rgba(46,204,113,0.5)]" />
                
                <div className="mb-2 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="px-3 py-1 glass rounded-full text-brand-primary text-[10px] font-bold uppercase tracking-wider">
                    {exp.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-6">
                  <div className="flex items-center gap-1">
                    <Briefcase size={14} className="text-brand-primary" />
                    {exp.company}
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-1">
                      <MapPin size={14} className="text-brand-primary" />
                      {exp.location}
                    </div>
                  )}
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, j) => (
                    <li key={j} className="text-slate-400 text-sm leading-relaxed flex gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
