import { motion } from "framer-motion";
import { ArrowRight, Building2, Factory, ShoppingBag, Briefcase, Heart } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: 1,
    industry: "Manufacturing",
    icon: Factory,
    title: "18% Inventory Cost Reduction",
    company: "Global Auto Components Ltd",
    challenge: "High inventory holding costs across 6 warehouses with inconsistent demand forecasting accuracy.",
    solution: "Implemented AI-powered demand forecasting using Google Sheets + ChatGPT for scenario analysis. Created automated reorder point calculations.",
    tools: ["ChatGPT", "Google Sheets", "Looker Studio"],
    results: [
      { metric: "Inventory Costs", value: "-18%" },
      { metric: "Stockouts", value: "-45%" },
      { metric: "Forecast Accuracy", value: "+32%" },
    ],
    quote: "The AI-assisted approach gave us insights we couldn't get from our ERP alone.",
    author: "VP Supply Chain",
    timeframe: "4 months",
  },
  {
    id: 2,
    industry: "FMCG",
    icon: ShoppingBag,
    title: "Sales Pipeline Accuracy to 92%",
    company: "Consumer Brands Inc",
    challenge: "Inconsistent sales forecasting leading to production planning issues and missed revenue targets.",
    solution: "Deployed AI-powered lead scoring and pipeline analysis using HubSpot Free + Claude for win/loss pattern identification.",
    tools: ["HubSpot CRM", "Claude", "Google Docs"],
    results: [
      { metric: "Forecast Accuracy", value: "92%" },
      { metric: "Lead Conversion", value: "+28%" },
      { metric: "Sales Cycle", value: "-15 days" },
    ],
    quote: "Our sales team now focuses on the right opportunities at the right time.",
    author: "Head of Sales",
    timeframe: "3 months",
  },
  {
    id: 3,
    industry: "Professional Services",
    icon: Briefcase,
    title: "PMO Reporting Time Cut by 60%",
    company: "Global Consulting Firm",
    challenge: "Manual weekly status reporting consuming 8+ hours per project manager, with inconsistent quality.",
    solution: "Created automated status report generation using Notion + ChatGPT for RAID log updates and executive summaries.",
    tools: ["Notion", "ChatGPT", "Trello"],
    results: [
      { metric: "Reporting Time", value: "-60%" },
      { metric: "Report Quality", value: "+40%" },
      { metric: "Risk Visibility", value: "+75%" },
    ],
    quote: "PMs now spend time managing projects, not writing reports.",
    author: "Head of PMO",
    timeframe: "2 months",
  },
  {
    id: 4,
    industry: "Healthcare",
    icon: Heart,
    title: "Operational Efficiency +35%",
    company: "Regional Hospital Network",
    challenge: "Inconsistent patient flow management leading to long wait times and staff burnout.",
    solution: "Implemented AI-assisted scheduling optimization and process bottleneck identification using free analytics tools.",
    tools: ["Google Gemini", "Google Sheets", "Power BI"],
    results: [
      { metric: "Wait Times", value: "-40%" },
      { metric: "Staff Utilization", value: "+35%" },
      { metric: "Patient Satisfaction", value: "+22%" },
    ],
    quote: "AI helped us see patterns in our operations we had been missing for years.",
    author: "COO",
    timeframe: "6 months",
  },
  {
    id: 5,
    industry: "Real Estate",
    icon: Building2,
    title: "Due Diligence Time Halved",
    company: "Commercial Property Fund",
    challenge: "Lengthy due diligence process with manual document review taking 40+ hours per deal.",
    solution: "Deployed AI-powered document analysis for lease abstracts, financial summaries, and risk identification.",
    tools: ["ChatGPT", "Google Docs", "Notion"],
    results: [
      { metric: "DD Time", value: "-50%" },
      { metric: "Errors Caught", value: "+65%" },
      { metric: "Deals Processed", value: "+40%" },
    ],
    quote: "We can now evaluate twice as many opportunities without adding headcount.",
    author: "Director of Acquisitions",
    timeframe: "3 months",
  },
];

const Cases = () => {
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
                Executive Case Studies
              </h1>
              <p className="text-xl text-primary-foreground/70">
                Real-world examples of senior leaders using free AI tools to solve complex business 
                problems and drive measurable results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 md:p-10 rounded-2xl bg-card border border-border shadow-card"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column */}
                    <div className="lg:w-2/3">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                          <study.icon className="w-6 h-6 text-gold" />
                        </div>
                        <div>
                          <span className="text-xs font-medium text-gold uppercase tracking-wide">{study.industry}</span>
                          <h2 className="font-serif text-2xl font-semibold text-foreground">{study.title}</h2>
                        </div>
                      </div>

                      {/* Company */}
                      <p className="text-muted-foreground mb-6">{study.company}</p>

                      {/* Challenge & Solution */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">Challenge</h4>
                          <p className="text-muted-foreground">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">Solution</h4>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>
                      </div>

                      {/* Tools Used */}
                      <div className="mt-6">
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">Tools Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.tools.map((tool) => (
                            <span
                              key={tool}
                              className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Quote */}
                      <blockquote className="mt-8 pl-4 border-l-4 border-gold">
                        <p className="italic text-foreground">"{study.quote}"</p>
                        <cite className="text-sm text-muted-foreground mt-2 block">— {study.author}</cite>
                      </blockquote>
                    </div>

                    {/* Right Column - Results */}
                    <div className="lg:w-1/3">
                      <div className="p-6 rounded-xl bg-secondary/50 h-full">
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">Results</h4>
                        <div className="space-y-4">
                          {study.results.map((result) => (
                            <div key={result.metric} className="text-center p-4 rounded-lg bg-card">
                              <div className="text-3xl font-bold text-gold mb-1">{result.value}</div>
                              <div className="text-sm text-muted-foreground">{result.metric}</div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-border">
                          <div className="text-center">
                            <div className="text-sm text-muted-foreground">Timeframe</div>
                            <div className="text-lg font-semibold text-foreground">{study.timeframe}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="p-8 md:p-12 rounded-2xl bg-gradient-hero text-center">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Ready to Create Your Own Success Story?
              </h3>
              <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
                Start the AI for Leaders program and learn to apply these same techniques in your organization.
              </p>
              <Button variant="hero" size="lg">
                Start Learning Today
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

export default Cases;
