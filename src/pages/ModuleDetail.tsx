import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, BookOpen, Award, CheckCircle2, Play, Brain, Factory, Truck, ClipboardList, TrendingUp } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const modulesData: Record<string, {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Brain;
  color: string;
  duration: string;
  lessons: number;
  overview: string;
  learningObjectives: string[];
  lessons_list: { title: string; duration: string; description: string }[];
  tools: { name: string; purpose: string }[];
  promptExample: { context: string; prompt: string };
}> = {
  foundations: {
    id: "foundations",
    title: "AI Foundations for Leaders",
    subtitle: "Level 1 • Essential",
    description: "Master the fundamentals of AI thinking for strategic decision-making.",
    icon: Brain,
    color: "from-violet-500 to-purple-600",
    duration: "3 hours",
    lessons: 8,
    overview: "This foundational module equips senior leaders with the essential understanding of AI capabilities, limitations, and strategic applications. You'll learn to think with AI, not just use it.",
    learningObjectives: [
      "Understand what AI can and cannot do in a business context",
      "Master the fundamentals of tokens, context, and AI reasoning",
      "Learn to identify and mitigate AI hallucinations",
      "Build a framework for AI as your executive co-pilot",
      "Understand AI governance, risk, and privacy considerations",
    ],
    lessons_list: [
      { title: "What AI Really Is (And Isn't)", duration: "20 min", description: "Demystifying AI for business leaders" },
      { title: "How AI Thinks: Tokens & Context", duration: "25 min", description: "Understanding the mechanics of AI reasoning" },
      { title: "The Hallucination Problem", duration: "20 min", description: "Identifying and managing AI errors" },
      { title: "Prompt Engineering Fundamentals", duration: "30 min", description: "The art of communicating with AI" },
      { title: "The Role-Context-Objective Framework", duration: "25 min", description: "Structured prompting for executives" },
      { title: "AI as Your Executive Co-Pilot", duration: "25 min", description: "Strategic integration patterns" },
      { title: "Risk, Privacy & Governance", duration: "20 min", description: "What every leader must know" },
      { title: "Hands-on: Your First AI Workflow", duration: "35 min", description: "Practical application exercise" },
    ],
    tools: [
      { name: "ChatGPT", purpose: "Primary AI assistant for strategy and analysis" },
      { name: "Google Gemini", purpose: "Alternative perspective and cross-validation" },
      { name: "Claude", purpose: "Long-form analysis and document processing" },
    ],
    promptExample: {
      context: "You want to understand how AI could help your department but aren't sure where to start.",
      prompt: `Act as an AI Strategy Consultant.
Context: I lead a [DEPARTMENT] team of [SIZE] people. Our key challenges are [LIST 2-3 CHALLENGES].
Objective: Identify the top 3 use cases where AI could provide immediate value with minimal risk.
Constraints: Must use free tools, no IT dependency, quick wins within 30 days.
Output: Prioritized list with effort/impact assessment and step-by-step implementation guide.`,
    },
  },
  operations: {
    id: "operations",
    title: "AI for Operations Excellence",
    subtitle: "Level 2 • Operations",
    description: "Identify bottlenecks, optimize SOPs, and detect cost leakages.",
    icon: Factory,
    color: "from-blue-500 to-cyan-600",
    duration: "4 hours",
    lessons: 10,
    overview: "Transform your operations with AI-powered analysis. Learn to extract insights from process data, identify inefficiencies, and create data-driven improvement roadmaps.",
    learningObjectives: [
      "Analyze process data to identify bottlenecks",
      "Use AI to optimize Standard Operating Procedures",
      "Detect and quantify cost leakages",
      "Create automated KPI dashboards",
      "Build improvement roadmaps with AI assistance",
    ],
    lessons_list: [
      { title: "Operations Data Analysis with AI", duration: "25 min", description: "Turning raw data into insights" },
      { title: "Bottleneck Identification", duration: "30 min", description: "Finding process constraints" },
      { title: "SOP Analysis & Optimization", duration: "25 min", description: "AI-powered procedure improvement" },
      { title: "Root Cause Analysis with AI", duration: "30 min", description: "Getting to the 'why' faster" },
      { title: "Cost Leakage Detection", duration: "25 min", description: "Finding hidden inefficiencies" },
      { title: "Building AI-Powered Dashboards", duration: "35 min", description: "Looker Studio + AI" },
      { title: "Process Improvement Roadmaps", duration: "25 min", description: "From insight to action" },
      { title: "Continuous Improvement Systems", duration: "20 min", description: "Sustainable AI integration" },
      { title: "Hands-on: Process Analysis Project", duration: "40 min", description: "Real-world application" },
      { title: "Capstone: Operations AI Strategy", duration: "25 min", description: "Building your plan" },
    ],
    tools: [
      { name: "ChatGPT", purpose: "Process analysis and insight generation" },
      { name: "Google Sheets", purpose: "Data processing and calculations" },
      { name: "Looker Studio", purpose: "Dashboard creation and visualization" },
    ],
    promptExample: {
      context: "You have 6 months of process data and need to identify improvement opportunities.",
      prompt: `You are an Operations Excellence Head.
Here is last 6 months process data: [PASTE DATA SUMMARY]
Identify:
1. Top 3 inefficiencies with quantified impact
2. Root causes for each inefficiency
3. Corrective actions ranked by ROI
4. Implementation timeline with milestones
5. Expected savings and KPIs to track
Output: Structured improvement roadmap ready for executive review.`,
    },
  },
  "supply-chain": {
    id: "supply-chain",
    title: "AI for Supply Chain Management",
    subtitle: "Level 2 • SCM",
    description: "Master demand forecasting, inventory optimization, and supplier risk.",
    icon: Truck,
    color: "from-emerald-500 to-teal-600",
    duration: "4 hours",
    lessons: 12,
    overview: "Apply AI to the most critical supply chain challenges. From demand planning to supplier risk assessment, learn to build resilient and efficient supply chains.",
    learningObjectives: [
      "Build AI-assisted demand forecasting models",
      "Optimize inventory levels and reorder points",
      "Assess and mitigate supplier risks",
      "Control logistics costs with data-driven decisions",
      "Create scenario simulations for planning",
    ],
    lessons_list: [
      { title: "Supply Chain Analytics Overview", duration: "20 min", description: "AI opportunities in SCM" },
      { title: "Demand Forecasting Fundamentals", duration: "30 min", description: "Prediction with AI" },
      { title: "Building Forecasting Models", duration: "35 min", description: "Hands-on with free tools" },
      { title: "Inventory Optimization", duration: "30 min", description: "Safety stock and reorder points" },
      { title: "Supplier Risk Assessment", duration: "25 min", description: "Identifying vulnerabilities" },
      { title: "Supplier Scorecards with AI", duration: "25 min", description: "Automated evaluation" },
      { title: "Logistics Cost Analysis", duration: "25 min", description: "Finding savings opportunities" },
      { title: "Route & Network Optimization", duration: "25 min", description: "AI-assisted planning" },
      { title: "Scenario Simulation", duration: "30 min", description: "Best/worst case planning" },
      { title: "Supply Chain Dashboards", duration: "25 min", description: "Real-time visibility" },
      { title: "Hands-on: SCM Analysis Project", duration: "40 min", description: "Applied learning" },
      { title: "Capstone: SCM AI Strategy", duration: "30 min", description: "Your implementation plan" },
    ],
    tools: [
      { name: "Google Gemini", purpose: "Analysis and forecasting insights" },
      { name: "Google Sheets", purpose: "Data modeling and calculations" },
      { name: "Power BI Desktop", purpose: "Supply chain visualization" },
    ],
    promptExample: {
      context: "You need to optimize inventory levels across multiple warehouses.",
      prompt: `Act as a Supply Chain Director.
Context: We have [X] SKUs across [Y] warehouses. Current inventory holding cost is $[Z]M annually.
Given the attached demand volatility data, suggest:
1. Optimal reorder policy for each product category
2. Safety stock calculations by SKU tier
3. Warehouse consolidation opportunities
4. Expected cost savings
5. Implementation risks and mitigations
Output: Decision-ready recommendation with financial impact.`,
    },
  },
  "project-management": {
    id: "project-management",
    title: "AI for Project Management",
    subtitle: "Level 2 • PMO",
    description: "Prevent slippage, manage resources, and automate reporting.",
    icon: ClipboardList,
    color: "from-orange-500 to-amber-600",
    duration: "3.5 hours",
    lessons: 9,
    overview: "Transform your PMO with AI-powered project intelligence. Learn to predict risks, optimize resources, and generate executive reports automatically.",
    learningObjectives: [
      "Identify project risks before they become issues",
      "Optimize resource allocation with AI assistance",
      "Automate RAID log updates and maintenance",
      "Generate executive status reports instantly",
      "Build early warning systems for project health",
    ],
    lessons_list: [
      { title: "AI in Project Management", duration: "20 min", description: "Opportunity overview" },
      { title: "Risk Identification with AI", duration: "30 min", description: "Predictive risk management" },
      { title: "Automated RAID Logs", duration: "25 min", description: "AI-powered documentation" },
      { title: "Resource Optimization", duration: "25 min", description: "Smarter allocation" },
      { title: "Timeline Analysis", duration: "25 min", description: "Predicting delays" },
      { title: "Executive Reporting Automation", duration: "30 min", description: "One-click status reports" },
      { title: "Stakeholder Communication", duration: "20 min", description: "AI-assisted messaging" },
      { title: "Hands-on: Project Analysis", duration: "35 min", description: "Real project application" },
      { title: "Capstone: PMO AI Toolkit", duration: "30 min", description: "Building your system" },
    ],
    tools: [
      { name: "Notion", purpose: "Project documentation and AI integration" },
      { name: "Trello", purpose: "Visual task management with automation" },
      { name: "GitHub Projects", purpose: "Technical project tracking" },
    ],
    promptExample: {
      context: "You need to convert a project plan into an executive risk assessment.",
      prompt: `You are a PMO Head.
Context: [PASTE PROJECT PLAN OR KEY MILESTONES]
Timeline: [START DATE] to [END DATE]
Budget: $[AMOUNT]

Convert this into a risk-aware execution strategy including:
1. Complete RAID log (Risks, Assumptions, Issues, Dependencies)
2. Risk probability and impact matrix (5x5)
3. Top 5 risks with detailed mitigation strategies
4. Early warning indicators for each major milestone
5. Escalation protocol and decision thresholds
Output: Executive-ready project risk brief.`,
    },
  },
  sales: {
    id: "sales",
    title: "AI for Sales & Revenue",
    subtitle: "Level 2 • Sales",
    description: "Qualify leads, forecast pipelines, and personalize at scale.",
    icon: TrendingUp,
    color: "from-rose-500 to-pink-600",
    duration: "4 hours",
    lessons: 11,
    overview: "Supercharge your sales organization with AI. From lead scoring to personalized outreach, learn to close more deals faster with data-driven intelligence.",
    learningObjectives: [
      "Build AI-powered lead qualification systems",
      "Create accurate pipeline forecasts",
      "Personalize pitches and proposals at scale",
      "Handle objections with AI-prepared responses",
      "Analyze win/loss patterns for improvement",
    ],
    lessons_list: [
      { title: "AI in Sales: The Opportunity", duration: "20 min", description: "Where AI drives revenue" },
      { title: "Lead Scoring with AI", duration: "30 min", description: "Prioritizing opportunities" },
      { title: "Pipeline Forecasting", duration: "30 min", description: "Accurate predictions" },
      { title: "Personalized Outreach at Scale", duration: "25 min", description: "AI-crafted messaging" },
      { title: "Pitch & Proposal Generation", duration: "30 min", description: "Tailored presentations" },
      { title: "Objection Handling Playbooks", duration: "25 min", description: "AI-prepared responses" },
      { title: "Win/Loss Analysis", duration: "25 min", description: "Learning from outcomes" },
      { title: "CRM Integration Strategies", duration: "20 min", description: "HubSpot + AI workflows" },
      { title: "Sales Content Creation", duration: "25 min", description: "Canva AI for sales" },
      { title: "Hands-on: Sales AI Project", duration: "40 min", description: "Applied techniques" },
      { title: "Capstone: Sales AI Playbook", duration: "30 min", description: "Your implementation plan" },
    ],
    tools: [
      { name: "HubSpot Free CRM", purpose: "Lead management and pipeline tracking" },
      { name: "Canva AI", purpose: "Sales collateral creation" },
      { name: "Google Docs", purpose: "Proposal and pitch development" },
    ],
    promptExample: {
      context: "You need to create a tailored pitch for a high-value prospect.",
      prompt: `Act as a Sales Director.
Prospect: [COMPANY NAME]
Industry: [INDUSTRY]
Size: [EMPLOYEE COUNT/REVENUE]
Known pain points: [LIST FROM RESEARCH]
Our solution: [YOUR PRODUCT/SERVICE]

Create a tailored pitch including:
1. Industry-specific hook (first 30 seconds)
2. 3 pain points mapped to our capabilities
3. Relevant case study/proof point
4. ROI projection framework
5. Potential objections and responses
6. Recommended next steps and timeline
Output: Ready-to-use pitch deck outline with talking points.`,
    },
  },
};

const ModuleDetail = () => {
  const { moduleId } = useParams();
  const module = moduleId ? modulesData[moduleId] : null;

  if (!module) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4 text-center py-20">
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Module Not Found</h1>
            <Button asChild>
              <Link to="/modules">
                <ArrowLeft className="w-4 h-4" />
                Back to Modules
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = module.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className={`py-16 bg-gradient-to-br ${module.color}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <Link to="/modules" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Modules
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-sm text-white/70">{module.subtitle}</span>
                  <h1 className="font-serif text-3xl md:text-4xl font-bold text-white">{module.title}</h1>
                </div>
              </div>
              <p className="text-xl text-white/80 mb-8">{module.overview}</p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-white">
                  <Clock className="w-5 h-5" />
                  <span>{module.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <BookOpen className="w-5 h-5" />
                  <span>{module.lessons} lessons</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Award className="w-5 h-5" />
                  <span>Certificate included</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Learning Objectives */}
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Learning Objectives</h2>
                  <ul className="space-y-3">
                    {module.learningObjectives.map((objective, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{objective}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Lessons */}
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Course Content</h2>
                  <div className="space-y-3">
                    {module.lessons_list.map((lesson, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="p-4 rounded-xl bg-card border border-border hover:border-gold/30 transition-colors group cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                              <Play className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors" />
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground">{lesson.title}</h4>
                              <p className="text-sm text-muted-foreground">{lesson.description}</p>
                            </div>
                          </div>
                          <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Sample Prompt */}
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Sample Prompt Framework</h2>
                  <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                    <p className="text-sm text-muted-foreground mb-4">{module.promptExample.context}</p>
                    <pre className="p-4 rounded-lg bg-card text-sm text-foreground font-mono whitespace-pre-wrap">
                      {module.promptExample.prompt}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Enroll Card */}
                <div className="p-6 rounded-2xl bg-card border border-border shadow-card sticky top-28">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Start This Module</h3>
                  <Button variant="hero" size="lg" className="w-full mb-4">
                    Begin Learning
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">Free • No credit card required</p>
                </div>

                {/* Tools */}
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Tools You'll Use</h3>
                  <div className="space-y-4">
                    {module.tools.map((tool) => (
                      <div key={tool.name} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-success" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{tool.name}</div>
                          <div className="text-sm text-muted-foreground">{tool.purpose}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ModuleDetail;
