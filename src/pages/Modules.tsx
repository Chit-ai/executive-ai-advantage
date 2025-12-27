import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Factory, Truck, ClipboardList, TrendingUp, Clock, BookOpen, Award } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const modules = [
  {
    id: "foundations",
    title: "AI Foundations for Leaders",
    subtitle: "Level 1 • Essential",
    description: "Understand what AI can and cannot do. Learn the fundamentals of AI thinking, tokens, context windows, and hallucination management. Build a strategic framework for AI as your executive co-pilot.",
    icon: Brain,
    color: "from-violet-500 to-purple-600",
    duration: "3 hours",
    lessons: 8,
    topics: ["AI Literacy", "How AI Thinks", "Prompt Engineering Basics", "Risk & Governance", "Executive Co-Pilot Framework"],
    tools: ["ChatGPT", "Google Gemini", "Claude"],
  },
  {
    id: "operations",
    title: "AI for Operations Excellence",
    subtitle: "Level 2 • Operations",
    description: "Identify bottlenecks, optimize SOPs, and detect cost leakages using AI-powered analysis. Learn to transform raw process data into actionable improvement roadmaps.",
    icon: Factory,
    color: "from-blue-500 to-cyan-600",
    duration: "4 hours",
    lessons: 10,
    topics: ["Bottleneck Identification", "SOP Optimization", "Root Cause Analysis", "Cost Leakage Detection", "KPI Dashboard Creation"],
    tools: ["ChatGPT", "Google Sheets", "Looker Studio"],
  },
  {
    id: "supply-chain",
    title: "AI for Supply Chain Management",
    subtitle: "Level 2 • SCM",
    description: "Master demand forecasting, inventory optimization, and supplier risk analysis. Build scenario simulations for best and worst case planning using only free tools.",
    icon: Truck,
    color: "from-emerald-500 to-teal-600",
    duration: "4 hours",
    lessons: 12,
    topics: ["Demand Forecasting", "Inventory Optimization", "Supplier Risk Analysis", "Logistics Cost Control", "Scenario Simulation"],
    tools: ["Gemini", "Google Sheets", "Power BI Desktop"],
  },
  {
    id: "project-management",
    title: "AI for Project Management",
    subtitle: "Level 2 • PMO",
    description: "Prevent timeline slippage, manage resource allocation, and automate risk identification. Generate AI-powered RAID logs and executive status reports automatically.",
    icon: ClipboardList,
    color: "from-orange-500 to-amber-600",
    duration: "3.5 hours",
    lessons: 9,
    topics: ["Timeline Risk Detection", "Resource Optimization", "RAID Log Automation", "Executive Reporting", "Milestone Tracking"],
    tools: ["Notion", "Trello", "GitHub Projects"],
  },
  {
    id: "sales",
    title: "AI for Sales & Revenue",
    subtitle: "Level 2 • Sales",
    description: "Qualify leads faster, forecast pipelines accurately, and personalize pitches with AI assistance. Create automated email sequences and win-loss analysis reports.",
    icon: TrendingUp,
    color: "from-rose-500 to-pink-600",
    duration: "4 hours",
    lessons: 11,
    topics: ["Lead Qualification", "Pipeline Forecasting", "Pitch Personalization", "Objection Handling", "Win-Loss Analysis"],
    tools: ["HubSpot Free", "Canva AI", "Google Docs"],
  },
];

const Modules = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Learning Modules
              </h1>
              <p className="text-xl text-primary-foreground/70">
                Five domain-specific tracks designed for senior leaders. Each module includes real business 
                problems, free tool recommendations, prompt frameworks, and hands-on exercises.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Modules List */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-8">
              {modules.map((module, index) => (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/modules/${module.id}`}
                    className="block p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 group"
                  >
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Icon & Meta */}
                      <div className="flex-shrink-0">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <module.icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{module.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <BookOpen className="w-4 h-4" />
                            <span>{module.lessons} lessons</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="mb-2">
                          <span className="text-xs font-medium text-gold uppercase tracking-wide">{module.subtitle}</span>
                        </div>
                        <h2 className="font-serif text-2xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
                          {module.title}
                        </h2>
                        <p className="text-muted-foreground mb-6 max-w-2xl">
                          {module.description}
                        </p>

                        {/* Topics */}
                        <div className="mb-6">
                          <h4 className="text-sm font-medium text-foreground mb-2">Key Topics</h4>
                          <div className="flex flex-wrap gap-2">
                            {module.topics.map((topic) => (
                              <span
                                key={topic}
                                className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Tools */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Tools:</span>
                            <div className="flex gap-2">
                              {module.tools.map((tool) => (
                                <span
                                  key={tool}
                                  className="px-2 py-1 text-xs font-medium rounded bg-primary/10 text-primary"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center text-sm font-medium text-gold group-hover:gap-3 gap-2 transition-all">
                            Start Module
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certification CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="p-8 md:p-12 rounded-2xl bg-secondary/50 border border-border text-center">
              <Award className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                Earn Your Executive AI Certification
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                Complete all modules and the capstone project to receive your AI-Driven Executive certification.
              </p>
              <Button variant="executive" size="lg">
                View Certification Path
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Modules;
