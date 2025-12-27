import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Factory, Truck, ClipboardList, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const modules = [
  {
    id: "foundations",
    title: "AI Foundations",
    subtitle: "Level 1",
    description: "Understand what AI can and cannot do. Learn to think strategically with AI as your co-pilot.",
    icon: Brain,
    color: "from-violet-500 to-purple-600",
    topics: ["AI Literacy", "Prompt Engineering", "Risk & Governance"],
  },
  {
    id: "operations",
    title: "Operations",
    subtitle: "Level 2",
    description: "Identify bottlenecks, optimize SOPs, and detect cost leakages using AI-powered analysis.",
    icon: Factory,
    color: "from-blue-500 to-cyan-600",
    topics: ["Process Analysis", "SOP Optimization", "Root Cause Analysis"],
  },
  {
    id: "supply-chain",
    title: "Supply Chain",
    subtitle: "Level 2",
    description: "Master demand forecasting, inventory optimization, and supplier risk management.",
    icon: Truck,
    color: "from-emerald-500 to-teal-600",
    topics: ["Demand Planning", "Inventory Control", "Logistics Optimization"],
  },
  {
    id: "project-management",
    title: "Project Management",
    subtitle: "Level 2",
    description: "Prevent timeline slippage, manage resources, and automate executive reporting.",
    icon: ClipboardList,
    color: "from-orange-500 to-amber-600",
    topics: ["Risk Identification", "Resource Planning", "Status Automation"],
  },
  {
    id: "sales",
    title: "Sales & Revenue",
    subtitle: "Level 2",
    description: "Qualify leads faster, forecast pipelines, and personalize pitches with AI assistance.",
    icon: TrendingUp,
    color: "from-rose-500 to-pink-600",
    topics: ["Lead Scoring", "Pipeline Forecasting", "Pitch Personalization"],
  },
];

export function ModulesOverview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-muted-foreground mb-4">
            <Zap className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium">Practical Learning Paths</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Domain-Specific AI Mastery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Five focused tracks designed for senior leaders. Each module includes real business problems, 
            free tool recommendations, and hands-on exercises.
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link
                to={`/modules/${module.id}`}
                className="block h-full p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <module.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="mb-4">
                  <span className="text-xs font-medium text-gold uppercase tracking-wide">{module.subtitle}</span>
                  <h3 className="font-serif text-xl font-semibold text-foreground mt-1">{module.title}</h3>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {module.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {module.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center text-sm font-medium text-gold group-hover:gap-3 gap-2 transition-all">
                  Explore Module
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="executive" size="lg" asChild>
            <Link to="/modules">
              View All Modules
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
