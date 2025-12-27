import { Brain, Factory, Truck, ClipboardList, TrendingUp } from "lucide-react";

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  description: string;
  videoUrl?: string;
  videoScript?: string;
  objectives?: string[];
  topics?: string[];
  freeTools?: string[];
  deliverables?: string[];
  exercises?: string[];
}

export interface Module {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  color: string;
  duration: string;
  lessonsCount: number;
  overview: string;
  learningObjectives: string[];
  lessons_list: Lesson[];
  tools: { name: string; purpose: string }[];
  promptExample: { context: string; prompt: string };
}

export const modulesData: Record<string, Module> = {
  foundations: {
    id: "foundations",
    title: "AI Foundations for Leaders",
    subtitle: "Level 1 • Essential",
    description: "Master the fundamentals of AI thinking for strategic decision-making.",
    icon: Brain,
    color: "from-violet-500 to-purple-600",
    duration: "3 hours",
    lessonsCount: 3,
    overview: "This foundational module equips senior leaders with the essential understanding of AI capabilities, limitations, and strategic applications. You'll learn to think with AI, not just use it.",
    learningObjectives: [
      "Define AI and debunk common myths",
      "Master prompt structures and chain-of-thought reasoning",
      "Understand data privacy, bias mitigation, and ethical AI implementation"
    ],
    lessons_list: [
      { 
        id: "1.1", 
        title: "1.1: What AI Can/Cannot Do", 
        duration: "15 min", 
        description: "Define AI, debunk myths, explain LLM architecture.",
        videoUrl: "https://www.youtube.com/embed/5p248yoa3oE", 
        videoScript: `
## Lesson 1.1: Executive Briefing - The Reality of AI

**0:00 - Introduction**
"Welcome. You've heard the hype, now let's talk business reality. AI is not magic; it's a prediction engine. In this session, we'll demystify the Large Language Model (LLM) architecture and separate what it can physically do from what marketing claims it can do."

**2:30 - How LLMs Think (and Don't)**
- **Concept**: LLMs are "next-token predictors". They don't "know" facts; they predict the most likely next word based on patterns.
- **Key Insight**: This is why they hallucinate. If the most statistically probable word is factually wrong, the AI will still say it with confidence.
- **Executive Takeaway**: Never trust AI as a source of truth for unchecked facts. Use it for reasoning, drafting, and synthesis.

**7:15 - The 3 Capabilities Framework**
1. **Generation**: Creating text, code, or images from scratch.
2. **Extraction**: Pulling structured data from messy documents.
3. **Reasoning**: Analyzing complex situations (if you guide it).

**12:00 - Debunking Common Myths**
- Myth: "AI learns from my data automatically." (Reality: Only if you train it; mostly it's static).
- Myth: "AI will replace managers." (Reality: Managers using AI will replace those who don't).

**14:30 - Conclusion**
"Your assignment: Identify one process in your daily workflow that requires 'generation' or 'summarization'. That's your first target."
        `,
        objectives: ["Define AI", "Debunk myths", "Explain LLM architecture"],
        topics: ["What is LLM", "AI business capabilities", "misconceptions"],
        freeTools: ["ChatGPT", "Claude", "Google Gemini"],
        deliverables: ["Video", "2-page AI Basics Guide"]
      },
      { 
        id: "1.2", 
        title: "1.2: Prompt Engineering Mastery", 
        duration: "20 min", 
        description: "Master prompt structures, chain-of-thought, few-shot learning.",
        videoUrl: "https://www.youtube.com/embed/T9A7eT5vYQ0",
        videoScript: `
## Lesson 1.2: The Art of Executive Prompting

**0:00 - The Interface Problem**
"Most executives fail at AI because they talk to it like a Google search. 'Write a report on sales' gets you generic garbage. Today, we master the 'Context-Action-Constraint' framework."

**3:15 - The Golden Prompt Structure**
- **Role**: "Act as a Senior Strategy Consultant..."
- **Context**: "I am the CEO of a mid-sized retail firm..."
- **Task**: "Draft a 3-point memo..."
- **Constraint**: "Be concise, no jargon, max 500 words."

**8:45 - Advanced Technique: Few-Shot Learning**
"Don't just tell; show. If you want the AI to write like you, paste 3 examples of your previous emails. This is called 'Few-Shot Learning' and it's the 80/20 of valid output."

**14:00 - Advanced Technique: Chain of Thought**
"For complex math or logic, tell the AI: 'Think step-by-step'. This forces the model to show its work, reducing errors by up to 40%."

**18:30 - Demo & Exercise**
"We will now take a standard SOP document and use the 'Refiner Prompt' to clean it up. Pause the video and open ChatGPT."
        `,
        objectives: ["Master prompt structures", "chain-of-thought", "few-shot learning"],
        freeTools: ["OpenAI Playground", "Claude Console", "ChatGPT"],
        deliverables: ["15 prompt templates", "exercises"],
        exercises: ["Upload SOP", "AI analyzes", "Refine prompt", "Better output"]
      },
      { 
        id: "1.3", 
        title: "1.3: Risk & Governance", 
        duration: "15 min", 
        description: "Data privacy, bias mitigation, ethical AI implementation.",
        videoUrl: "https://www.youtube.com/embed/Mp2y3FV4lO0",
        videoScript: `
## Lesson 1.3: Protecting the Organization

**0:00 - The New Risk Frontier**
"AI introduces new attack vectors: Data leakage,IP theft, and automated bias. As leaders, governance is your primary responsibility before deployment."

**4:00 - Data Privacy: The Red Lines**
- Rule #1: Never put PII (Personally Identifiable Information) or trade secrets into a public model like free ChatGPT.
- Rule #2: Use 'Enterprise' versions or strictly anonymized data.

**8:30 - The Hallucination Risk**
"A lawyer recently used ChatGPT to cite cases. It invented them. He was sanctioned. We'll discuss how to keep a 'Human in the Loop' (HITL) for all high-stakes outputs."

**12:00 - Bias in Decision Making**
"AI models are trained on the internet. They contain biases. We'll review the 'Bias Check' prompt you should run on any HR or hiring output."

**14:00 - Policy Template Walkthrough**
"Download the 'Company AI Policy' template below. We'll customize it for your organization right now."
        `,
        objectives: ["Data privacy", "bias mitigation", "ethical AI implementation"],
        topics: ["Data privacy", "AI bias", "regulatory compliance", "responsible AI"],
        deliverables: ["Company AI Policy Template", "Risk Assessment Tool"]
      },
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
    lessonsCount: 3,
    overview: "Transform your operations with AI-powered analysis. Learn to extract insights from process data, identify inefficiencies, and create data-driven improvement roadmaps.",
    learningObjectives: [
      "Use AI to identify bottlenecks and inefficiencies",
      "Optimize Standard Operating Procedures (SOPs) using AI",
      "Perform Root Cause Analysis using 5 Whys and Fishbone diagrams"
    ],
    lessons_list: [
      { 
        id: "2.1", 
        title: "2.1: Process Analysis with AI", 
        duration: "20 min", 
        description: "Upload SOP -> AI identifies bottlenecks and inefficiencies.",
        videoUrl: "https://www.youtube.com/embed/7xG4-hO2n3E",
        videoScript: `
## Lesson 2.1: Intelligent Process Mining

**0:00 - The Visibility Gap**
"Most operations fail not because of effort, but because of invisible friction. Today, we use AI to find the bottlenecks hiding in your process docs."

**5:00 - The 'Bottleneck Detector' Workflow**
1. Export your process logs or description to PDF.
2. Upload to Claude or ChatGPT Plus.
3. Run the 'Bottleneck Detector' prompt (see library).

**10:30 - Case Study: Logistics Firm**
"See how a mid-sized logistics firm reduced dwell time by 18% just by having AI analyze their hand-off timestamps. It found a pattern human analysts missed."

**15:00 - Live Exercise**
"Upload your own 'Order to Cash' or similar process document. Let's see what the AI finds."
        `,
        freeTools: ["Google Sheets AI", "Notion AI", "ChatGPT"],
        deliverables: ["Process mapping tool", "SOP Analysis Checklist"]
      },
      { 
        id: "2.2", 
        title: "2.2: SOP Optimization", 
        duration: "20 min", 
        description: "Optimized SOP Generator.",
        videoUrl: "https://www.youtube.com/embed/qFpI8U03jYg",
        videoScript: `
## Lesson 2.2: The Self-Writing SOP

**0:00 - Why SOPs Die**
"SOPs are usually tedious, outdated, and ignored. We're going to fix that. We'll turn a dense 20-page manual into a 1-page visual checklist."

**6:00 - The Transformation Prompt**
"We'll use a specific prompt chain:
1. Summarize the goal.
2. Extract the 'Critical Path' steps.
3. Identify safety warnings.
4. Reformat as a simplified checklist."

**12:00 - Tone & Accessibility**
"AI can rewrite technical jargon into 8th-grade reading level, ensuring your frontline staff actually understands the safety protocol."

**16:00 - Automated Updates**
"I'll show you how to quickly update these SOPs when a process changes, just by describing the change to the AI."
        `,
        freeTools: ["Google Docs AI", "Claude", "ChatGPT"],
        deliverables: ["Optimized SOP Generator"]
      },
      { 
        id: "2.3", 
        title: "2.3: Root Cause Analysis", 
        duration: "20 min", 
        description: "5 Whys -> Fishbone Diagram -> AI analysis.",
        videoUrl: "https://www.youtube.com/embed/JlT640gN3X0",
        videoScript: `
## Lesson 2.3: AI-Enhanced Root Cause Analysis

**0:00 - Beyond Surface Problems**
"When quality dips, we usually fix the symptom. Today, we use AI to run a rigorous '5 Whys' analysis instantly."

**5:00 - The Virtual Consultant**
"We will roleplay. You tell the AI the problem ('Defect rate up 2%'). The AI will ask you 'Why?' five times, drilling down with logic better than most consultants."

**10:00 - Generating the Fishbone**
"We'll take that dialogue and ask the AI to generate a text-based Fishbone (Ishikawa) diagram: Man, Machine, Material, Method."

**15:00 - Validation**
"Always verify. AI creates the hypothesis; you go to the Gemba (shop floor) to verify the data."
        `,
        freeTools: [],
        deliverables: ["AI Fishbone Diagram Generator"]
      },
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
    lessonsCount: 3,
    overview: "Apply AI to the most critical supply chain challenges. From demand planning to supplier risk assessment, learn to build resilient and efficient supply chains.",
    learningObjectives: [
      "Upload sales data to forecast demand",
      "Optimize inventory levels using EOQ and safety stock calculators",
      "Develop supplier scorecards and risk matrices"
    ],
    lessons_list: [
      { 
        id: "3.1", 
        title: "3.1: Demand Planning", 
        duration: "20 min", 
        description: "Upload sales data -> AI forecasts demand.",
        videoUrl: "https://www.youtube.com/embed/4dFjK8vF8n0",
        videoScript: `
## Lesson 3.1: AI-Driven Forecasting

**0:00 - The Bullwhip Effect**
"Small errors in forecasting create massive waste upstream. Traditional Excel models are rigid. AI models can ingest news, weather, and trends."

**6:00 - Using Code Interpreter for Trends**
"We'll upload a CSV of last year's sales to ChatGPT (Data Analyst mode). We'll ask it to identify seasonality and anomalies typically invisible to the naked eye."

**12:00 - Scenario Planning**
"We will ask the AI: 'If raw material costs rise 10%, how does that impact our margins locally?' Creating 'What-If' scenarios in seconds."

**17:00 - Tool Demo**
"Walkthrough of the Google Sheets AI extension for basic linear regression forecasting."
        `,
        freeTools: ["Google Sheets AI", "ChatGPT", "Looker Studio"],
        deliverables: []
      },
      { 
        id: "3.2", 
        title: "3.2: Inventory Optimization", 
        duration: "20 min", 
        description: "Detailed calculations for EOQ, safety stock, reorder point.",
        videoUrl: "https://www.youtube.com/embed/rP3iM7qTZgQ",
        videoScript: `
## Lesson 3.2: Optimizing the Stockpile

**0:00 - Balancing Cash vs. Service**
"Inventory is cash sitting on a shelf. We need the perfect balance. We'll use AI to recalculate EOQ (Economic Order Quantity) dynamically."

**5:00 - Calculating Safety Stock**
"Most safety stock formulas are static. We'll feed lead time variability data into the AI to suggest dynamic safety stock levels for your 'A' class items."

**11:00 - The 'Dead Stock' Hunter**
"Using AI to analyze inventory aging reports and suggest discount strategies or kitting opportunities to move slow-moving goods."

**16:00 - Exercise**
"Download the 'Inventory Optimizer' prompt and run it against your Top 10 SKUs."
        `,
        freeTools: ["Google Sheets AI", "Notion AI", "ChatGPT"],
        deliverables: []
      },
      { 
        id: "3.3", 
        title: "3.3: Logistics & Supplier Risk", 
        duration: "20 min", 
        description: "Supplier Scorecard, Risk Matrix.",
        videoUrl: "https://www.youtube.com/embed/F63rZ3k86Z4",
        videoScript: `
## Lesson 3.3: Resilience & Risk

**0:00 - The Fragility of Just-In-Time**
"Efficiency is great until a canal gets blocked. We need resilience. We'll build an automated Supplier Risk Scorecard."

**6:00 - AI News Monitoring**
"How to use Google Gemini to scan news for your suppliers' names, detecting strikes, lawsuits, or financial trouble *before* they miss a shipment."

**12:00 - Automated Scorecards**
"Generating a weighted scorecard (Quality, Cost, Delivery) and having AI draft the quarterly review email for underperformers."

**18:00 - Wrap up**
"Your supply chain is now data-driven, not just relationship-driven."
        `,
        freeTools: ["HubSpot", "Notion", "ChatGPT", "Google Sheets"],
        deliverables: ["Supplier Scorecard", "Risk Matrix"]
      },
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
    lessonsCount: 3,
    overview: "Transform your PMO with AI-powered project intelligence. Learn to predict risks, optimize resources, and generate executive reports automatically.",
    learningObjectives: [
      "Identify project risks using Risk Register Templates and RACI matrices",
      "Plan resources effectively with Resource Allocation Optimizers",
      "Automate status reports and executive dashboards"
    ],
    lessons_list: [
      { 
        id: "4.1", 
        title: "4.1: Risk Identification", 
        duration: "15 min", 
        description: "Risk Register Template, RACI Matrix Generator.",
        videoUrl: "https://www.youtube.com/embed/Y3J6XfP4J5M",
        videoScript: `
## Lesson 4.1: Predictive Risk Management

**0:00 - From Reactive to Proactive**
"Projects don't fail at the end; they fail at the start. We'll use AI to stress-test your project charter before a single line of code is written."

**5:00 - The 'Pre-Mortem' Prompt**
"We will ask the AI: 'Assume it's 6 months from now and this project failed disastrously. Tell me a story of why.' This uncovers hidden risks."

**10:00 - RAID Log Automation**
"Generating a comprehensive RAID log (Risks, Assumptions, Issues, Dependencies) simply by pasting your project emails or notes."

**13:00 - The RACI Generator**
"Reviewing the 'Role-Responsibility' map. AI checks for gaps: 'Who is accountable for X? You have no one assigned.'"
        `,
        freeTools: ["Notion", "ClickUp", "ChatGPT", "Google Sheets"],
        deliverables: ["Risk Register Template", "RACI Matrix Generator"]
      },
      { 
        id: "4.2", 
        title: "4.2: Resource Planning", 
        duration: "20 min", 
        description: "Resource Allocation Optimizer, Capacity Spreadsheet.",
        videoUrl: "https://www.youtube.com/embed/L1c8i5R3Z_A",
        videoScript: `
## Lesson 4.2: Optimization Resource Allocation

**0:00 - The Capacity Crunch**
"Overloading your best people is the fastest way to delay a project. We'll use AI to visualize capacity."

**6:00 - Parsing Schedules**
"Paste anonymized team calendars or task lists. Ask AI: 'Who is over 100% capacity next week?' Identifying bottlenecks early."

**12:00 - Skill-Task Matching**
"Matching tasks to skills. 'I have a React task. Based on these bios, who is the best fit?'"

**16:00 - Budget Burn Rate**
"Drafting a quick 'Burn Rate' forecast. 'If we continue at this pace, when do we run out of hours?'"
        `,
        freeTools: ["GitHub Projects", "ClickUp", "Google Sheets", "Notion"],
        deliverables: ["Resource Allocation Optimizer", "Capacity Spreadsheet"]
      },
      { 
        id: "4.3", 
        title: "4.3: Status Automation", 
        duration: "15 min", 
        description: "Automated Status Report Generator + Executive Dashboard.",
        videoUrl: "https://www.youtube.com/embed/c1f4T7f_l1c",
        videoScript: `
## Lesson 4.3: The End of Status Meetings

**0:00 - The Status Report Trap**
"You spend 4 hours a week writing reports nobody reads. Let's automate it to 5 minutes."

**5:00 - The Aggregator Workflow**
"Copy updates from Slack, Jira, or email. Paste into AI. Run the 'Executive Summary' prompt."

**10:00 - Formatting for Impact**
"Teaching the AI to format: 'Red/Amber/Green status first. Then blockers. Then wins.' Concise, bulleted, action-oriented."

**13:00 - Zapier Integration**
"A sneak peek at how to fully automate this: Developer closes ticket -> Zapier -> AI Summary -> Slack Channel."
        `,
        deliverables: ["Automated Status Report Generator", "Executive Dashboard"]
      },
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
    lessonsCount: 3,
    overview: "Supercharge your sales organization with AI. From lead scoring to personalized outreach, learn to close more deals faster with data-driven intelligence.",
    learningObjectives: [
      "Score leads based on ICP using AI models",
      "Forecast revenue with calculator and scenario planning",
      "Personalize pitches using Buyer Research Automation"
    ],
    lessons_list: [
      { 
        id: "5.1", 
        title: "5.1: Lead Scoring", 
        duration: "15 min", 
        description: "Lead Scoring Model, ICP Builder.",
        videoUrl: "https://www.youtube.com/embed/8y4fJ5e6g_I",
        videoScript: `
## Lesson 5.1: AI-Powered Lead Qualification

**0:00 - Stop Chasing Bad Leads**
"Sales teams waste 50% of time on leads that will never buy. We'll use AI to build a rigorous Ideal Customer Profile (ICP) scorer."

**5:00 - Building the ICP**
"Feeding your top 10 best customers into AI. Asking it: 'What do these companies have in common?' (Industry, size, tech stack)."

**10:00 - The Scoring Prompt**
"Paste a new lead's LinkedIn profile or 'About Us' page. Ask AI: 'Score this lead 0-100 against my ICP. Explain why.'"

**14:00 - Automation**
"Reviewing how to integrate this into HubSpot so it happens automatically."
        `,
        freeTools: ["HubSpot", "ChatGPT", "Google Sheets"],
        deliverables: ["Lead Scoring Model", "ICP Builder"]
      },
      { 
        id: "5.2", 
        title: "5.2: Pipeline Forecasting", 
        duration: "20 min", 
        description: "Revenue Forecast Calculator, Scenario Planning.",
        videoUrl: "https://www.youtube.com/embed/H5f_e6e_e6e",
        videoScript: `
## Lesson 5.2: Precision Forecasting

**0:00 - The Art & Science of the Forecast**
"Forecasting is usually 'gut feel'. We'll add science. We'll analyze deal velocity and win rates."

**6:00 - Deal Diagnosis**
"Analyzing a specific stalled deal. 'Here are the last 5 emails. Why is the prospect ghosting us? Suggest a re-engagement email.'"

**12:00 - Pipeline Health Check**
"Uploading the pipeline summary. 'We have $2M in stage 3. Historical conversion is 20%. Predict Q4 revenue.'"

**17:00 - Simulation**
"Running the 'Best Case / Worst Case' scenario generator for the board meeting."
        `,
        freeTools: ["HubSpot", "Google Sheets", "Looker Studio", "ChatGPT"],
        deliverables: ["Revenue Forecast Calculator", "Scenario Planning"]
      },
      { 
        id: "5.3", 
        title: "5.3: Pitch Personalization", 
        duration: "15 min", 
        description: "Buyer Research Automation -> Pitch Generator.",
        videoUrl: "https://www.youtube.com/embed/u6XAPnuFjJc",
        videoScript: `
## Lesson 5.3: Hyper-Personalization at Scale

**0:00 - The Generic Pitch is Dead**
"Nobody reads generic emails. But writing 50 custom emails takes all day. AI solves this constraint."

**4:00 - The Research Agent**
"Using Perplexity or Gemini to research a prospect's recent news, quarterly report, and CEO interviews in seconds."

**8:00 - The Bridge**
"Prompting the AI: 'Connect [THEIR RECENT NEWS] to [OUR VALUE PROP] in a 3-sentence hook.' This is the 'Bridge'."

**12:00 - Collateral Generation**
"Using Canva AI or Gamma to generate a custom slide deck for that specific client in under 5 minutes."

**14:00 - Closing**
"You now have a full sales engine: Qualified, Forecasted, and Personalized."
        `,
        freeTools: ["HubSpot", "ChatGPT", "Canva AI", "LinkedIn Navigator"],
        deliverables: ["Pitch Generator"]
      },
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
