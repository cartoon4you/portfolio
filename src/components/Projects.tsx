import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    title: "CRM system optimization",
    category: "ERP/CRM",
    description: "Odoo enhancements: automated sales pipelines, support ticketing. Boosted client satisfaction by 70%.",
    longDescription: "This project involved a deep dive into Odoo's architecture to build custom modules that streamlined the entire sales lifecycle. We implemented automated lead scoring, automated follow-ups, and an integrated support ticketing system that reduced response times by 50%. The result was a significant increase in client retention and a 70% boost in overall satisfaction scores.",
    features: ["Automated Sales Pipelines", "Support Ticketing System", "Lead Scoring Engine", "Integrated CRM Analytics"],
    image: "/src/project1.jpg",
    tags: ["PHP", "MySQL", "Odoo", "JS"],
    demoUrl: "#",
    repoUrl: "https://github.com/abdulrhman7-star",
  },
  {
    title: "Cloud‑sync POS – Mizaya",
    category: "Retail Tech",
    description: "Multi‑branch, offline‑first POS with real‑time inventory and multi‑currency.",
    longDescription: "Mizaya is a robust Point of Sale system designed for high-traffic retail environments. It features a sophisticated offline-first architecture using local storage and background synchronization, ensuring business continuity even during internet outages. The system supports real-time inventory tracking across multiple branches and handles complex multi-currency transactions seamlessly.",
    features: ["Offline-First Architecture", "Real-Time Inventory Sync", "Multi-Currency Support", "Multi-Branch Management"],
    image: "/src/project2.jpg",
    tags: ["C# .NET", "SQL Server", "SignalR"],
    demoUrl: "#",
    repoUrl: "https://github.com/abdulrhman7-star",
  },
  {
    title: "Full‑cycle ERP",
    category: "Enterprise",
    description: "Accounting, HR, inventory, purchasing – multi‑tenant architecture.",
    longDescription: "A comprehensive enterprise resource planning solution built from the ground up. This multi-tenant platform provides modules for financial accounting, human resources management, inventory control, and strategic purchasing. It leverages a modern tech stack to ensure scalability and high performance for large-scale organizations.",
    features: ["Multi-Tenant Architecture", "Financial Accounting Module", "HR & Payroll Integration", "Strategic Purchasing System"],
    image: "/src/project2_1.jpg",
    tags: ["Laravel", "Vue.js", "MySQL", "Redis"],
    demoUrl: "#",
    repoUrl: "https://github.com/abdulrhman7-star",
  },
  {
    title: "Headless e‑commerce",
    category: "E-Commerce",
    description: "Secure Stripe/PayPal, product dashboard, real‑time order tracking.",
    longDescription: "This headless commerce solution separates the frontend experience from the backend logic, allowing for maximum flexibility and performance. It features a custom-built product management dashboard, secure integration with Stripe and PayPal, and a real-time order tracking system that provides customers with up-to-the-minute updates on their purchases.",
    features: ["Headless Architecture", "Stripe & PayPal Integration", "Real-Time Order Tracking", "Custom Admin Dashboard"],
    image: "/src/project1_2.jpg",
    tags: ["Node.js", "React", "MongoDB"],
    demoUrl: "#",
    repoUrl: "https://github.com/abdulrhman7-star",
  },
  {
    title: "Sales territory manager",
    category: "Business Intelligence",
    description: "Automated tracking, territory mapping, 35% forecast accuracy increase.",
    longDescription: "A sophisticated BI tool designed for sales leadership. It provides interactive maps for territory management, automated performance tracking, and predictive analytics that helped the client increase their sales forecast accuracy by 35%. The system integrates with existing CRM data to provide a holistic view of the sales landscape.",
    features: ["Interactive Territory Mapping", "Predictive Sales Analytics", "CRM Data Integration", "Automated Performance Tracking"],
    image: "/src/sales.jpg",
    tags: ["Django", "PostgreSQL", "Chart.js"],
    demoUrl: "#",
    repoUrl: "https://github.com/abdulrhman7-star",
  },
  {
    title: "Odoo HR & accounting",
    category: "ERP/CRM",
    description: "Custom modules for recruitment, leaves, localized financial reports.",
    longDescription: "Tailored Odoo implementation focusing on human capital and financial precision. We developed custom modules for end-to-end recruitment, automated leave management, and localized financial reporting that complies with regional accounting standards. This project significantly reduced administrative overhead for the HR department.",
    features: ["End-to-End Recruitment Module", "Automated Leave Management", "Localized Financial Reporting", "HR Workflow Automation"],
    image: "/src/odoo.jpg",
    tags: ["Python", "Odoo", "XML", "PostgreSQL"],
    demoUrl: "#",
    repoUrl: "https://github.com/abdulrhman7-star",
  },
  {
    title: "ERPNext manufacturing",
    category: "Manufacturing",
    description: "Work orders, BOM, quality control for a production plant.",
    longDescription: "A specialized ERPNext implementation for a large-scale manufacturing facility. The solution includes advanced Bill of Materials (BOM) management, automated work order generation, and a rigorous quality control module that tracks defects and ensures production standards are met at every stage.",
    features: ["Advanced BOM Management", "Automated Work Orders", "Quality Control Tracking", "Production Plant Optimization"],
    image: "/src/erpnext.jpg",
    tags: ["Python", "Frappe", "MariaDB"],
    demoUrl: "#",
    repoUrl: "https://github.com/abdulrhman7-star",
  },
  {
    title: "Executive BI suite",
    category: "Business Intelligence",
    description: "Integrated 5+ data sources, interactive KPIs with Power BI.",
    longDescription: "A high-level business intelligence suite that aggregates data from over five disparate sources, including ERP, CRM, and external market data. Using Power BI, we created interactive dashboards that allow executives to drill down into KPIs and make data-driven decisions in real-time.",
    features: ["Multi-Source Data Integration", "Interactive KPI Dashboards", "Real-Time Executive Insights", "Power BI Visualization"],
    image: "/src/dashboard.jpg",
    tags: ["Power BI", "SQL", "DAX"],
    demoUrl: "#",
    repoUrl: "https://github.com/abdulrhman7-star",
  },
  {
    title: "Real‑time delivery app",
    category: "Logistics",
    description: "Live tracking, push notifications, in‑app chat (geofenced).",
    longDescription: "A high-performance mobile application for on-demand delivery services. It features real-time GPS tracking for both customers and drivers, automated push notifications for order status updates, and a geofenced in-app chat system that facilitates communication between all parties involved in the delivery process.",
    features: ["Real-Time GPS Tracking", "Push Notification System", "Geofenced In-App Chat", "Live Order Status Updates"],
    image: "src/a.jpg",
    tags: ["Flutter", "Firebase", "Maps API"],
    demoUrl: "#",
    repoUrl: "https://github.com/abdulrhman7-star",
  },
  {
    title: "Smart inventory",
    category: "Supply Chain",
    description: "Barcode scanning, auto‑reorder, low‑stock alerts.",
    longDescription: "An intelligent inventory management system designed to eliminate stockouts and overstocking. It features integrated barcode scanning for rapid stock counts, automated reorder points based on historical demand, and real-time low-stock alerts that notify procurement teams immediately.",
    features: ["Integrated Barcode Scanning", "Automated Reorder Logic", "Real-Time Low-Stock Alerts", "Demand-Based Forecasting"],
    image: "/src/inventory.jpg",
    tags: ["PHP", "Bootstrap", "Ajax"],
    demoUrl: "#",
    repoUrl: "https://github.com/abdulrhman7-star",
  },
  {
    title: "Support ticket system",
    category: "Customer Support",
    description: "SLA tracking, automated responses, agent collaboration.",
    longDescription: "A robust customer support platform designed for high-volume environments. It features sophisticated SLA tracking, automated response templates for common queries, and a collaborative workspace for support agents to share internal notes and resolve complex issues efficiently.",
    features: ["SLA Tracking & Management", "Automated Response Templates", "Agent Collaboration Tools", "High-Volume Ticket Handling"],
    image: "/src/support.jpg",
    tags: ["Laravel", "Livewire", "Tailwind"],
    demoUrl: "#",
    repoUrl: "https://github.com/abdulrhman7-star",
  },
  {
    title: "HR portal (200+ staff)",
    category: "HR Tech",
    description: "Leave, payroll integration, performance reviews.",
    longDescription: "A centralized HR portal serving over 200 employees. The system integrates leave management with payroll processing, provides a platform for annual performance reviews, and offers a self-service dashboard for employees to manage their personal information and benefits.",
    features: ["Payroll System Integration", "Performance Review Platform", "Employee Self-Service Portal", "Leave Management System"],
    image: "/src/project1.jpg",
    tags: ["C# .NET Core", "React", "SQL Server"],
    demoUrl: "#",
    repoUrl: "https://github.com/abdulrhman7-star",
  },
  {
    title: "Fleet tracking system",
    category: "Logistics",
    description: "Real‑time GPS, maintenance scheduling, fuel analytics.",
    longDescription: "A comprehensive fleet management solution that provides real-time GPS tracking for all vehicles. It includes an automated maintenance scheduling module based on mileage and engine hours, as well as advanced fuel analytics to help optimize routes and reduce fuel consumption across the fleet.",
    features: ["Real-Time GPS Fleet Tracking", "Automated Maintenance Scheduling", "Advanced Fuel Analytics", "Route Optimization Engine"],
    image: "/src/project2.jpg",
    tags: ["Node.js", "MongoDB", "WebSockets"],
    demoUrl: "#",
    repoUrl: "https://github.com/abdulrhman7-star",
  },
  {
    title: "School management ERP",
    category: "EdTech",
    description: "Student records, fee mgmt, parent portal (K‑12).",
    longDescription: "A full-featured ERP system designed specifically for K-12 educational institutions. It manages student academic records, automates fee collection and invoicing, and provides a secure parent portal for tracking student progress, attendance, and school announcements.",
    features: ["Student Academic Records", "Automated Fee Collection", "Secure Parent Portal", "Attendance Tracking System"],
    image: "/src/erpnext.jpg",
    tags: ["Django", "PostgreSQL", "Bootstrap"],
    demoUrl: "#",
    repoUrl: "https://github.com/abdulrhman7-star",
  },
  {
    title: "Telemedicine platform",
    category: "Healthcare",
    description: "Video consultations, e‑prescriptions, insurance integration.",
    longDescription: "A secure and compliant telemedicine platform that facilitates remote healthcare delivery. It features high-quality video consultations using WebRTC, an integrated e-prescription system, and seamless insurance verification and billing modules to streamline the patient experience.",
    features: ["WebRTC Video Consultations", "E-Prescription System", "Insurance Verification Module", "HIPAA-Compliant Architecture"],
    image: "/src/mobile.png",
    tags: ["Flutter", "WebRTC", "Firebase"],
    demoUrl: "#",
    repoUrl: "https://github.com/abdulrhman7-star",
  },
  {
    title: "Warehouse WMS",
    category: "Supply Chain",
    description: "Bin tracking, picking optimization, ERP integration.",
    longDescription: "A specialized Warehouse Management System (WMS) designed to optimize fulfillment operations. It features precise bin tracking, automated picking route optimization to reduce travel time, and deep integration with existing ERP systems for real-time inventory and order synchronization.",
    features: ["Precise Bin Tracking", "Picking Route Optimization", "ERP System Integration", "Real-Time Order Sync"],
    image: "/src/inventory.jpg",
    tags: ["Laravel", "Vue", "MySQL"],
    demoUrl: "#",
    repoUrl: "https://github.com/abdulrhman7-star",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold mb-4"
            >
              Expert portfolio — <span className="text-brand-primary">case studies</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 max-w-xl"
            >
              A selection of my recent work across various industries, from enterprise ERPs to consumer mobile apps.
            </motion.p>
          </div>
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="https://github.com/abdulrhman7-star" 
            target="_blank"
            className="hidden md:flex items-center gap-2 text-brand-primary font-bold hover:underline"
          >
            View GitHub <Github size={18} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group glass rounded-2xl overflow-hidden hover:border-brand-primary/30 transition-all cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-bg-dark transition-all">
                    <ExternalLink size={18} />
                  </button>
                  <button className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-bg-dark transition-all">
                    <Github size={18} />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 flex items-center justify-center gap-2">
            <span className="text-emerald-500">★</span> 
            Every project delivered with end‑to‑end ownership: concept, architecture, deployment, and client training.
          </p>
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-6 py-12 bg-bg-dark/90 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="glass w-full max-w-4xl max-h-full overflow-y-auto rounded-3xl p-6 md:p-10 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-bg-dark transition-all z-10"
                >
                  <X size={20} />
                </button>

                <div className="grid lg:grid-cols-2 gap-10">
                  <div className="rounded-2xl overflow-hidden h-64 lg:h-full">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4 block">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-3xl font-bold mb-6 text-white">
                      {selectedProject.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed mb-8">
                      {selectedProject.longDescription}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Key Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {selectedProject.features.map(feature => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map(tag => (
                          <span key={tag} className="text-xs font-mono text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <a 
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 bg-brand-primary hover:bg-brand-secondary text-bg-dark font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                      <a 
                        href={selectedProject.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 glass hover:bg-white/10 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                      >
                        <Github size={18} /> Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
