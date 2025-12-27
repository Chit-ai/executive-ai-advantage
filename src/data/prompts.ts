export interface Prompt {
  id: string;
  title: string;
  category: string;
  context: string;
  prompt_text: string;
  output_description: string;
  variations: string[];
  tools: string[];
}

export const promptsData: Prompt[] = [
  // --- GENERAL STRATEGY ---
  {
    id: "strat-1",
    title: "Analyze Competitive Landscape",
    category: "General Strategy",
    context: "Need a deep dive into competitors.",
    prompt_text: "Act as a Strategy Consultant. Analyze the competitive landscape for [COMPANY/INDUSTRY]. Identify top 3 competitors, their strengths/weaknesses, and 3 specific opportunities for us to differentiate. Use a table format.",
    output_description: "Table with competitors, SWOT, and clear differentiation opportunities.",
    variations: ["Focus on digital presence", "Focus on pricing models"],
    tools: ["ChatGPT", "Claude"]
  },
  {
    id: "strat-2",
    title: "Identify 5 Strategic Opportunities",
    category: "General Strategy",
    context: "Brainstorming growth paths.",
    prompt_text: "Based on current trends in [INDUSTRY], identify 5 strategic opportunities for a [COMPANY SIZE] company. Prioritize by potential ROI and ease of implementation.",
    output_description: "List of 5 opportunities with ROI/Effort justification.",
    variations: ["Focus on blue ocean strategies", "Focus on partnership opportunities"],
    tools: ["ChatGPT", "Gemini"]
  },
  // ... adding more to reach 50 is tedious in one tool call, I will add placeholders for the pattern and fill significant ones, 
  // but to meet the "50+" requirement I should generate them programmatically or be verbose. 
  // I will generate 10 representative ones per category to be "comprehensive" enough for this step, 
  // and the user can assume the pattern continues or I can add them all if space permits.
  // The user explicitly asked for "Target: 50+ prompts". I must deliver.
  
  // STRATEGY (Continued)
  {
    id: "strat-3",
    title: "Evaluate Go-to-Market Strategy",
    category: "General Strategy",
    context: "Launching a new product.",
    prompt_text: "Critique this GTM strategy: [PASTE STRATEGY]. Identify gaps in channel distribution, pricing, and messaging. Suggest 3 improvements.",
    output_description: "Critique and 3 actionable improvements.",
    variations: ["Focus on B2B alignment", "Focus on viral loops"],
    tools: ["Claude", "ChatGPT"]
  },
  {
    id: "strat-4",
    title: "Create SWOT Analysis",
    category: "General Strategy",
    context: "Strategic planning session.",
    prompt_text: "Create a detailed SWOT analysis for [COMPANY] given these market conditions: [CONDITIONS]. key factor: [FACTOR].",
    output_description: "4-quadrant SWOT with strategic implications.",
    variations: ["Focus on internal capabilities", "Focus on external threats"],
    tools: ["ChatGPT"]
  },
  {
    id: "strat-5",
    title: "Analyze Customer Feedback Themes",
    category: "General Strategy",
    context: "Reviewing support logs.",
    prompt_text: "Analyze these customer reviews: [PASTE REVIEWS]. Extract top 5 recurring pain points and 5 desired features. Sentiment analysis included.",
    output_description: "Thematic analysis with sentiment scores.",
    variations: ["Group by user persona", "Focus on feature requests"],
    tools: ["Claude", "Gemini"]
  },
  {
    id: "strat-6",
    title: "Develop Pricing Strategy",
    category: "General Strategy",
    context: "Setting price for new service.",
    prompt_text: "Propose a tiered pricing model for [PRODUCT] targeting [SEGMENT]. Include Free, Pro, and Enterprise tiers with feature differentiation.",
    output_description: "3-tier pricing table with feature breakdown.",
    variations: ["Freemium model focus", "Usage-based pricing"],
    tools: ["ChatGPT"]
  },
  {
    id: "strat-7",
    title: "Evaluate Market Expansion",
    category: "General Strategy",
    context: "Expanding to new region.",
    prompt_text: "Evaluate the feasibility of expanding [PRODUCT] into [REGION/MARKET]. Consider regulatory barriers, cultural fit, and local competition.",
    output_description: "Market entry feasibility report.",
    variations: ["Focus on APAC region", "Focus on key risks"],
    tools: ["Gemini"]
  },
  {
    id: "strat-8",
    title: "Assess Organizational Change Readiness",
    category: "General Strategy",
    context: "Implementing new ERP.",
    prompt_text: "Create a survey to assess employee readiness for [CHANGE INITIATIVE]. Include 10 questions covering skills, mindset, and resource availability.",
    output_description: "10-question survey + analysis framework.",
    variations: ["Focus on leadership alignment", "Focus on tech skills"],
    tools: ["ChatGPT"]
  },
  {
    id: "strat-9",
    title: "Create Digital Transformation Roadmap",
    category: "General Strategy",
    context: "Modernizing legacy tech.",
    prompt_text: "Outline a 3-phase digital transformation roadmap for a [INDUSTRY] company. Phase 1: Quick wins. Phase 2: Core systems. Phase 3: Innovation.",
    output_description: "Phased roadmap with milestones and KPIs.",
    variations: ["Focus on cloud migration", "Focus on AI adoption"],
    tools: ["Claude"]
  },
  {
    id: "strat-10",
    title: "Analyze Industry Disruption Risks",
    category: "General Strategy",
    context: "Long-term planning.",
    prompt_text: "Identify top 5 technologies disrupting the [INDUSTRY] in the next 3-5 years. Rate impact (High/Med/Low) and likelihood.",
    output_description: "Disruption risk matrix.",
    variations: ["Focus on AI agents", "Focus on regulatory changes"],
    tools: ["Gemini"]
  },

  // --- OPERATIONS ---
  {
    id: "ops-1",
    title: "Analyze SOP for Bottlenecks",
    category: "Operations",
    context: "Process improvement.",
    prompt_text: "Review this SOP: [PASTE SOP]. Identify steps that add no value, create delays, or are prone to error. Suggest leaner alternatives.",
    output_description: "Red-lined SOP with efficiency notes.",
    variations: ["Focus on handoffs", "Focus on approval layers"],
    tools: ["Claude", "ChatGPT"]
  },
  {
    id: "ops-2",
    title: "Create Process Optimization Recommendations",
    category: "Operations",
    context: "Streamlining workflow.",
    prompt_text: "Given this process flow: [DESCRIBE FLOW]. Recommend 3 ways to reduce cycle time by 20% using automation or parallel processing.",
    output_description: "3 specific optimization strategies.",
    variations: ["Focus on automation tools", "Focus on eliminating waste"],
    tools: ["ChatGPT"]
  },
  {
    id: "ops-3",
    title: "Identify Cost Reduction Opportunities",
    category: "Operations",
    context: "Budget cuts.",
    prompt_text: "Analyze these expense categories: [PASTE EXPENSES]. Suggest 5 areas for cost reduction without impacting quality. Benchmark against industry standards.",
    output_description: "Cost saving opportunities list.",
    variations: ["Focus on vendor negotiation", "Focus on software consolidation"],
    tools: ["ChatGPT"]
  },
  {
    id: "ops-4",
    title: "Analyze Operational Metrics/KPIs",
    category: "Operations",
    context: "Monthly review.",
    prompt_text: "Review these operational KPIs: [PASTE METRICS]. Identify trends, anomalies, and areas requiring immediate attention.",
    output_description: "KPI analysis summary.",
    variations: ["Focus on productivity", "Focus on quality metrics"],
    tools: ["Excel AI", "ChatGPT"]
  },
  {
    id: "ops-5",
    title: "Create Quality Improvement Plan",
    category: "Operations",
    context: "Defect reduction.",
    prompt_text: "Develop a Quality Improvement Plan for [PROCESS]. Include root cause analysis method, corrective actions, and monitoring metrics.",
    output_description: "Structured quality plan.",
    variations: ["Use Six Sigma framework", "Use PDCA cycle"],
    tools: ["ChatGPT"]
  },
  {
    id: "ops-6",
    title: "Evaluate Vendor Performance",
    category: "Operations",
    context: "Contract renewal.",
    prompt_text: "Create a vendor scorecard to evaluate [VENDOR TYPE]. Criteria: Quality, Timeliness, Cost, Communication, Innovation.",
    output_description: "Weighted vendor scorecard template.",
    variations: ["Focus on IT vendors", "Focus on logistics providers"],
    tools: ["ChatGPT"]
  },
  {
    id: "ops-7",
    title: "Identify Automation Opportunities",
    category: "Operations",
    context: "Digital efficiency.",
    prompt_text: "List 10 routine tasks in [DEPARTMENT] that can be automated using Zapier or AI. Estimate hours saved per week.",
    output_description: "List of automation candidates with ROI.",
    variations: ["Focus on HR tasks", "Focus on Finance tasks"],
    tools: ["ChatGPT"]
  },
  {
    id: "ops-8",
    title: "Analyze Operational Risks",
    category: "Operations",
    context: "Risk assessment.",
    prompt_text: "Conduct an operational risk assessment for [PROCESS]. Identify Failure Modes (FMEA), severity, and detection controls.",
    output_description: "FMEA table.",
    variations: ["Focus on safety risks", "Focus on cyber risks"],
    tools: ["ChatGPT"]
  },
  {
    id: "ops-9",
    title: "Create Continuous Improvement Roadmap",
    category: "Operations",
    context: "Kaizen culture.",
    prompt_text: "Design a 12-month Continuous Improvement roadmap. Include quarterly themes, training, and reward systems for employee ideas.",
    output_description: "Annual roadmap visual description.",
    variations: ["Focus on Kaizen events", "Focus on Lean training"],
    tools: ["ChatGPT"]
  },
  {
    id: "ops-10",
    title: "Benchmark Against Best Practices",
    category: "Operations",
    context: "Performance gap.",
    prompt_text: "Compare our current process [DESCRIBE] against industry best practices for [INDUSTRY]. Highlight gaps and 'gold standard' examples.",
    output_description: "Benchmarking report.",
    variations: ["Focus on speed", "Focus on customer experience"],
    tools: ["Gemini", "Perplexity"]
  },

  // --- SUPPLY CHAIN ---
  {
    id: "scm-1",
    title: "Forecast Demand Based on Data",
    category: "Supply Chain",
    context: "Planning inventory.",
    prompt_text: "Act as a Demand Planner. Analyze this historical sales data: [PASTE DATA]. Predict demand for next Q accounting for seasonality and [TREND].",
    output_description: "Forecast table with confidence intervals.",
    variations: ["Include holiday impact", "Include marketing promo impact"],
    tools: ["ChatGPT (Code Interpreter)", "Excel"]
  },
  {
    id: "scm-2",
    title: "Optimize Inventory Levels",
    category: "Supply Chain",
    context: "Reducing holding costs.",
    prompt_text: "Calculate optimal inventory levels for SKU [X] given: Daily usage [Y], Lead time [Z], variability [V]. Use Reorder Point formula.",
    output_description: "Review of Safety Stock and ROP.",
    variations: ["Focus on fast movers", "Focus on erratic demand"],
    tools: ["ChatGPT"]
  },
  {
    id: "scm-3",
    title: "Evaluate Logistics Risks",
    category: "Supply Chain",
    context: "Global shipping.",
    prompt_text: "Identify top logistics risks for shipping from [ORIGIN] to [DESTINATION]. Consider geopolitical, weather, and port congestion factors.",
    output_description: "Risk assessment.",
    variations: ["Focus on air freight", "Focus on last mile"],
    tools: ["Gemini"]
  },
  {
    id: "scm-4",
    title: "Create Supplier Scorecard",
    category: "Supply Chain",
    context: "Vendor management.",
    prompt_text: "Design a Supplier Scorecard with weighted metrics for: On-time delivery (30%), Quality (30%), Cost (20%), Responsiveness (20%).",
    output_description: "Scorecard template.",
    variations: ["Add sustainability metric", "Add dominance check"],
    tools: ["ChatGPT", "Notion"]
  },
  {
    id: "scm-5",
    title: "Analyze Supply Chain Resilience",
    category: "Supply Chain",
    context: "Disruption planning.",
    prompt_text: "Stress-test our supply chain: What happens if [MAJOR SUPPLIER] goes offline for 30 days? Provide mitigation plan.",
    output_description: "Scenario analysis and continuity plan.",
    variations: ["Focus on single-source risks", "Focus on transport strikes"],
    tools: ["Claude"]
  },
  {
    id: "scm-6",
    title: "Recommend Supply Chain Consolidation",
    category: "Supply Chain",
    context: "Network optimization.",
    prompt_text: "Analyze benefits of consolidating [NUMBER] warehouses into one central hub in [LOCATION]. Consider transport costs vs inventory savings.",
    output_description: "Cost-benefit analysis.",
    variations: ["Focus on cross-docking", "Focus on regional hubs"],
    tools: ["ChatGPT"]
  },
  {
    id: "scm-7",
    title: "Evaluate Nearshoring Opportunities",
    category: "Supply Chain",
    context: "Sourcing strategy.",
    prompt_text: "Evaluate the pros/cons of moving manufacturing from [COUNTRY A] to [COUNTRY B]. Consider labor, tariff, and speed to market.",
    output_description: "Comparative study.",
    variations: ["Focus on Mexico vs China", "Focus on Eastern Europe"],
    tools: ["Gemini"]
  },
  {
    id: "scm-8",
    title: "Create Sustainability Plan",
    category: "Supply Chain",
    context: "Green logistics.",
    prompt_text: "Draft a plan to reduce supply chain carbon footprint by 20%. Focus on transport modes and packaging.",
    output_description: "Sustainability roadmap.",
    variations: ["Focus on EVs", "Focus on recyclable packaging"],
    tools: ["ChatGPT"]
  },
  {
    id: "scm-9",
    title: "Product Sourcing Optimization",
    category: "Supply Chain",
    context: "Finding new materials.",
    prompt_text: "Research alternative operational sources for [MATERIAL/COMPONENT]. Prioritize reliability and cost.",
    output_description: "List of potential suppliers.",
    variations: ["Focus on local sourcing", "Focus on diversifying origin"],
    tools: ["Gemini", "Perplexity"]
  },
  {
    id: "scm-10",
    title: "Contingency Supply Plans",
    category: "Supply Chain",
    context: "Emergency prep.",
    prompt_text: "Create a contingency plan for raw material shortage of [ITEM]. Identify substitute materials and alternative spot market sources.",
    output_description: "Contingency playbook.",
    variations: ["Focus on rationing logic", "Focus on price hedging"],
    tools: ["ChatGPT"]
  },

  // --- PROJECT MANAGEMENT ---
  {
    id: "pm-1",
    title: "Identify Project Scope Risks",
    category: "Project Management",
    context: "Project initiation.",
    prompt_text: "Review this project scope statement: [PASTE SCOPE]. Identify vague areas that could lead to scope creep. Suggest tighter definitions.",
    output_description: "Scope risk analysis.",
    variations: ["Focus on technical debt", "Focus on stakeholder misalignment"],
    tools: ["ChatGPT"]
  },
  {
    id: "pm-2",
    title: "Create RACI Matrix",
    category: "Project Management",
    context: "Role clarity.",
    prompt_text: "Create a RACI matrix for a [PROJECT TYPE] project. Roles: PM, Dev, Design, QA, Stakeholder. Phases: Planning, Execution, Launch.",
    output_description: "RACI table.",
    variations: ["Include Legal/Compliance", "Include Marketing"],
    tools: ["ChatGPT", "Notion"]
  },
  {
    id: "pm-3",
    title: "Develop Communication Plan",
    category: "Project Management",
    context: "Stakeholder updates.",
    prompt_text: " Draft a communication plan for [PROJECT]. Define audience, frequency, channel, and key messages for each stakeholder group.",
    output_description: "Comms matrix.",
    variations: ["Focus on crisis comms", "Focus on weekly status"],
    tools: ["ChatGPT"]
  },
  {
    id: "pm-4",
    title: "Create Resource Allocation Plan",
    category: "Project Management",
    context: "Team scheduling.",
    prompt_text: "Given 5 developers and a 3-month timeline for [PROJECT], propose a high-level resource allocation schedule avoiding burnout.",
    output_description: "Weekly resource heatmap.",
    variations: ["Focus on critical path", "Focus on skill gaps"],
    tools: ["ChatGPT"]
  },
  {
    id: "pm-5",
    title: "Analyze Dependencies",
    category: "Project Management",
    context: "Scheduling.",
    prompt_text: "Review this task list: [PASTE TASKS]. Identify dependencies and highlight the Critical Path.",
    output_description: "Dependency map / Critical Path.",
    variations: ["Focus on external dependencies", "Focus on resource constraints"],
    tools: ["ChatGPT"]
  },
  {
    id: "pm-6",
    title: "Stakeholder Engagement Plan",
    category: "Project Management",
    context: "Managing expectations.",
    prompt_text: "Create a strategy to engage a 'Resistant' stakeholder for [PROJECT]. mapping out their concerns and our responses.",
    output_description: "Engagement script.",
    variations: ["Focus on executive sponsors", "Focus on end users"],
    tools: ["ChatGPT"]
  },
  {
    id: "pm-7",
    title: "Evaluate Project Health",
    category: "Project Management",
    context: "Mid-project review.",
    prompt_text: "Assess project health based on: Schedule Variance [SPI], Cost Variance [CPI], and Open Risks [COUNT]. Provide status (R/A/G) and recommendation.",
    output_description: "Project health checks sheet.",
    variations: ["Focus on team morale", "Focus on quality metrics"],
    tools: ["ChatGPT"]
  },
  {
    id: "pm-8",
    title: "Project Closure Checklist",
    category: "Project Management",
    context: "Closing phase.",
    prompt_text: "Generate a comprehensive project closure checklist. Include technical handover, documentation, final billing, and team celebration.",
    output_description: "Closure checklist.",
    variations: ["Focus on lessons learned", "Focus on asset archiving"],
    tools: ["ChatGPT"]
  },
  {
    id: "pm-9",
    title: "Analyze Lessons Learned",
    category: "Project Management",
    context: "Retrospective.",
    prompt_text: "Conduct a blameless retrospective analysis for [ISSUE]. Use the 'Start, Stop, Continue' framework.",
    output_description: "Retrospective summary.",
    variations: ["Focus on process failure", "Focus on communication breakdown"],
    tools: ["ChatGPT"]
  },
  {
    id: "pm-10",
    title: "Capacity Planning",
    category: "Project Management",
    context: "Future workload.",
    prompt_text: "Forecast capacity needs for next quarter given [PROJECT PIPELINE]. Assume [X]% utilization rate.",
    output_description: "Capacity planning model.",
    variations: ["Focus on hiring needs", "Focus on outsourcing"],
    tools: ["ChatGPT", "Excel"]
  },

  // --- SALES & REVENUE ---
  {
    id: "sales-1",
    title: "Score Leads (ICP)",
    category: "Sales",
    context: "Lead qualification.",
    prompt_text: "Analyze this lead: [LEAD DATA]. Score from 0-100 against our Ideal Customer Profile (ICP): [ICP CRITERIA]. Explain the score.",
    output_description: "Lead score + rationale.",
    variations: ["Focus on tech stack fit", "Focus on budget intent"],
    tools: ["ChatGPT", "HubSpot"]
  },
  {
    id: "sales-2",
    title: "Create Ideal Customer Profile",
    category: "Sales",
    context: "Strategy definition.",
    prompt_text: "Define an Ideal Customer Profile for [PRODUCT]. detailed demographics, firmographics, psychographics, and pain points.",
    output_description: "Detailed ICP persona.",
    variations: ["Focus on enterprise buyer", "Focus on SMB owner"],
    tools: ["ChatGPT"]
  },
  {
    id: "sales-3",
    title: "Forecast Revenue Scenarios",
    category: "Sales",
    context: "Financial planning.",
    prompt_text: "Create 3 revenue forecast scenarios (Conservative, Realistic, Aggressive) for Q4 based on [PIPELINE DATA].",
    output_description: "Scenario table.",
    variations: ["Focus on deal slippage", "Focus on upselling"],
    tools: ["ChatGPT", "Excel"]
  },
  {
    id: "sales-4",
    title: "Analyze Win-Loss Reasons",
    category: "Sales",
    context: "Performance improvement.",
    prompt_text: "Analyze these CRM notes from lost deals: [PASTE NOTES]. Group reasons into buckets (Price, Feature, Competitor). Recommend fixes.",
    output_description: "Win/Loss analysis report.",
    variations: ["Focus on competitor X", "Focus on pricing objection"],
    tools: ["ChatGPT", "Claude"]
  },
  {
    id: "sales-5",
    title: "Create Personalized Pitch",
    category: "Sales",
    context: "Outreach.",
    prompt_text: "Write a cold email to [NAME], CEO of [COMPANY]. Mention their recent news [NEWS] and link it to our value prop [VALUE]. Keep it under 150 words.",
    output_description: "Personalized email draft.",
    variations: ["Focus on recent funding", "Focus on hiring surge"],
    tools: ["ChatGPT", "LinkedIn"]
  },
  {
    id: "sales-6",
    title: "Competitive Response Strategy",
    category: "Sales",
    context: "Prospect objection.",
    prompt_text: "Prospect says: 'Competitor X is cheaper.' Script a response that acknowledges price but pivots to our superior Total Cost of Ownership (TCO).",
    output_description: "Objection handling script.",
    variations: ["Focus on feature gaps", "Focus on support quality"],
    tools: ["ChatGPT"]
  },
  {
    id: "sales-7",
    title: "Customer Success Playbook",
    category: "Sales",
    context: "Onboarding.",
    prompt_text: "Create an onboarding playbook for new clients. Day 1, Week 1, Month 1 milestones to ensure activation.",
    output_description: "Onboarding checklist.",
    variations: ["Focus on QBRs", "Focus on training"],
    tools: ["ChatGPT"]
  },
  {
    id: "sales-8",
    title: "Retention Opportunities",
    category: "Sales",
    context: "Churn prevention.",
    prompt_text: "Analyze usage signals: [USAGE DATA]. Identify customers at risk of churn and suggest re-engagement offers.",
    output_description: "At-risk list and offers.",
    variations: ["Focus on declining login", "Focus on support ticket spikes"],
    tools: ["ChatGPT"]
  },
  {
    id: "sales-9",
    title: "Sales Compensation Plan",
    category: "Sales",
    context: "Incentives.",
    prompt_text: "Design a commission structure for SDRs. Base salary + variable on [METRICS]. incentivize long-term contracts.",
    output_description: "Compensation model.",
    variations: ["Focus on accelerators", "Focus on team goals"],
    tools: ["ChatGPT"]
  },
  {
    id: "sales-10",
    title: "Upsell/Cross-sell Strategy",
    category: "Sales",
    context: "Account expansion.",
    prompt_text: "For customer segment [X], identify the most logical upsell path from Product A. Draft the pitch script.",
    output_description: "Upsell pathway and script.",
    variations: ["Focus on bundled services", "Focus on new features"],
    tools: ["ChatGPT"]
  },
];
