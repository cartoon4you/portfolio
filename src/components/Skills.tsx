import { motion } from "motion/react";
import { Code2, Database, Layout, LineChart, Server, Smartphone } from "lucide-react";

const skills = [
  {
    category: "Backend & ERP",
    icon: <Server className="text-brand-primary" />,
    items: ["Laravel", "Django", "Odoo", "ERPNext", "C# .NET", "REST APIs", "GraphQL"],
  },
  {
    category: "Frontend & Mobile",
    icon: <Smartphone className="text-brand-primary" />,
    items: ["React", "Next.js", "Vue.js", "Flutter", "Tailwind CSS", "Bootstrap", "PWAs"],
  },
  {
    category: "Data & DevOps",
    icon: <Database className="text-brand-primary" />,
    items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Docker", "Git", "CI/CD"],
  },
  {
    category: "BI & Analysis",
    icon: <LineChart className="text-brand-primary" />,
    items: ["Power BI", "Tableau", "Advanced SQL", "Data Modeling", "Python (Pandas, NumPy)"],
  },
  {
    category: "AI & ML",
    icon: <Code2 className="text-brand-primary" />,
    items: ["LLMs", "Prompt Engineering", "NLP", "Workflow Automation", "Python"],
  },
  {
    category: "Design",
    icon: <Layout className="text-brand-primary" />,
    items: ["UX/UI Design", "Adobe XD", "Figma", "User-Centric Interfaces", "Prototyping"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            Technical <span className="text-brand-primary">Matrix</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical stack and core competencies developed over years of professional practice.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl hover:border-brand-primary/30 transition-all group"
            >
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span 
                    key={item}
                    className="px-3 py-1 bg-white/5 text-slate-400 text-xs font-medium rounded-full border border-white/5 group-hover:border-brand-primary/20 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
