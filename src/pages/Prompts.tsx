import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Search, Filter, Sparkles, Target, Shield, DollarSign, AlertTriangle, FileText } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const categories = [
  { id: "all", label: "All Prompts", icon: Sparkles },
  { id: "strategy", label: "Strategy", icon: Target },
  { id: "risk", label: "Risk", icon: Shield },
  { id: "cost", label: "Cost Optimization", icon: DollarSign },
  { id: "crisis", label: "Crisis Response", icon: AlertTriangle },
  { id: "board", label: "Board Summaries", icon: FileText },
];

const prompts = [
  {
    id: 1,
    category: "strategy",
    title: "Strategic Initiative Analysis",
    description: "Analyze a strategic initiative and identify key success factors.",
    prompt: `Act as a Chief Strategy Officer.
Context: I'm evaluating a strategic initiative for [DESCRIBE INITIATIVE].
Objective: Analyze this initiative and provide:
1. Key success factors
2. Potential roadblocks
3. Resource requirements
4. Timeline milestones
5. Risk mitigation strategies
Constraints: [ADD BUDGET/TIME/RESOURCE CONSTRAINTS]
Output: Structured analysis with actionable recommendations.`,
    tags: ["Strategy", "Analysis", "Planning"],
  },
  {
    id: 2,
    category: "cost",
    title: "Cost Reduction Roadmap",
    description: "Generate a structured cost reduction plan for any department.",
    prompt: `Act as a COO.
Context: FMCG company with 4 warehouses facing cost pressure.
Objective: Reduce inventory holding cost by 15%.
Constraints: No new capex, 6 months timeline.
Output: Provide:
1. 5-step action plan with owners
2. Quick wins (30 days)
3. Medium-term initiatives (90 days)
4. Long-term structural changes (180 days)
5. Key risks and mitigations`,
    tags: ["Cost", "Operations", "Action Plan"],
  },
  {
    id: 3,
    category: "board",
    title: "Board Summary Generator",
    description: "Transform lengthy reports into executive board summaries.",
    prompt: `Act as an Executive Assistant to the CEO.
Context: [PASTE OR DESCRIBE THE FULL REPORT]
Objective: Summarize this into a 1-page board note.
Output Format:
- Executive Summary (3 lines)
- Key Findings (bullet points)
- Critical Risks (with RAG status)
- Decisions Required
- Recommended Actions
Constraints: Maximum 500 words, focus on strategic implications.`,
    tags: ["Board", "Summary", "Reporting"],
  },
  {
    id: 4,
    category: "risk",
    title: "Supplier Risk Assessment",
    description: "Evaluate and mitigate supplier concentration risks.",
    prompt: `Act as a Chief Procurement Officer.
Context: We have a supplier portfolio with [X] critical suppliers.
Objective: Assess concentration risk and develop mitigation strategies.
Provide:
1. Risk scoring framework
2. Top 5 high-risk supplier profiles
3. Alternative supplier identification criteria
4. 90-day risk mitigation action plan
5. Monitoring KPIs and triggers
Output: Risk matrix with actionable recommendations.`,
    tags: ["Risk", "Supply Chain", "Procurement"],
  },
  {
    id: 5,
    category: "crisis",
    title: "Crisis Response Framework",
    description: "Rapid response plan for operational disruptions.",
    prompt: `Act as a Crisis Management Lead.
Context: [DESCRIBE THE CRISIS SITUATION]
Objective: Develop an immediate response plan.
Provide:
1. First 4 hours: Immediate actions
2. 24-48 hours: Stabilization measures
3. Week 1: Recovery initiatives
4. Stakeholder communication plan
5. Post-crisis learning agenda
Constraints: Minimal disruption to core operations, protect reputation.`,
    tags: ["Crisis", "Response", "Leadership"],
  },
  {
    id: 6,
    category: "strategy",
    title: "Competitive Intelligence Brief",
    description: "Analyze competitor moves and strategic implications.",
    prompt: `Act as a Head of Strategy.
Context: Our competitor [COMPANY] has just [DESCRIBE ACTION].
Objective: Analyze implications and recommend response.
Provide:
1. Competitive impact assessment
2. Market share implications
3. Customer perception analysis
4. Response options (do nothing, match, differentiate)
5. Recommended strategy with rationale
Output: Executive brief with scenario analysis.`,
    tags: ["Strategy", "Competitive", "Market"],
  },
  {
    id: 7,
    category: "cost",
    title: "Process Efficiency Analysis",
    description: "Identify inefficiencies and optimization opportunities.",
    prompt: `You are an Operations Excellence Head.
Here is last 6 months process data: [PASTE DATA OR DESCRIBE]
Identify:
1. Top 3 inefficiencies with quantified impact
2. Root causes for each
3. Corrective actions ranked by ROI
4. Implementation timeline
5. Expected savings
Output: Improvement roadmap with KPIs.`,
    tags: ["Operations", "Efficiency", "Process"],
  },
  {
    id: 8,
    category: "risk",
    title: "Project Risk Assessment",
    description: "Comprehensive risk identification for major projects.",
    prompt: `You are a PMO Head.
Context: [DESCRIBE PROJECT SCOPE AND TIMELINE]
Objective: Convert this project plan into a risk-aware execution strategy.
Provide:
1. RAID log (Risks, Assumptions, Issues, Dependencies)
2. Risk probability and impact matrix
3. Mitigation strategies for top 5 risks
4. Early warning indicators
5. Escalation protocol
Output: Risk-adjusted project brief.`,
    tags: ["Project", "Risk", "PMO"],
  },
  {
    id: 9,
    category: "board",
    title: "Quarterly Business Review",
    description: "Structure a QBR presentation with key insights.",
    prompt: `Act as a VP of Strategy.
Context: Q[X] performance data: [PASTE KEY METRICS]
Objective: Create a QBR executive summary.
Include:
1. Performance vs targets (with RAG status)
2. Key achievements and wins
3. Challenges and root causes
4. Strategic priorities for next quarter
5. Resource/support needs
6. Key decisions for leadership
Output: 10-slide presentation outline.`,
    tags: ["Board", "Review", "Quarterly"],
  },
  {
    id: 10,
    category: "strategy",
    title: "Digital Transformation Roadmap",
    description: "Plan and prioritize digital initiatives.",
    prompt: `Act as a Chief Digital Officer.
Context: [DESCRIBE CURRENT STATE AND PAIN POINTS]
Objective: Develop a 12-month digital transformation roadmap.
Provide:
1. Current state assessment
2. Priority initiatives (quick wins vs strategic)
3. Technology stack recommendations (free/low-cost)
4. Change management considerations
5. Success metrics and milestones
6. Resource and skill requirements
Constraints: [BUDGET/TIMELINE CONSTRAINTS]`,
    tags: ["Digital", "Transformation", "Technology"],
  },
];

const Prompts = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredPrompts = prompts.filter((prompt) => {
    const matchesCategory = selectedCategory === "all" || prompt.category === selectedCategory;
    const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const copyToClipboard = async (prompt: string, id: number) => {
    await navigator.clipboard.writeText(prompt);
    setCopiedId(id);
    toast({
      title: "Prompt copied!",
      description: "The prompt has been copied to your clipboard.",
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

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
                Executive Prompt Library
              </h1>
              <p className="text-xl text-primary-foreground/70">
                Battle-tested prompts for strategic decision-making. Copy, customize, and deploy 
                these frameworks with any AI tool.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border bg-card sticky top-[72px] z-40">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search prompts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Prompts Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredPrompts.map((prompt, index) => (
                <motion.div
                  key={prompt.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                        {prompt.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {prompt.description}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                      className="flex-shrink-0"
                    >
                      {copiedId === prompt.id ? (
                        <Check className="w-5 h-5 text-success" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </Button>
                  </div>

                  {/* Prompt Preview */}
                  <div className="relative">
                    <pre className="p-4 rounded-lg bg-secondary/50 text-sm text-foreground font-mono whitespace-pre-wrap overflow-hidden max-h-48">
                      {prompt.prompt}
                    </pre>
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-secondary/50 to-transparent pointer-events-none" />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {prompt.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium rounded bg-gold/10 text-gold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredPrompts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No prompts found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Prompts;
