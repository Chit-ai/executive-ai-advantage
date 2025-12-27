export interface Tool {
  id: string;
  name: string;
  category: string;
  description: string;
  usageSteps: string[];
  useCases: string[];
  limitations: string;
  pricing: string;
  link: string;
}

export const toolsData: Tool[] = [
  // GENERAL INTELLIGENCE
  {
    id: "chatgpt",
    name: "ChatGPT (OpenAI)",
    category: "General Intelligence",
    description: "Versatile AI for analysis, drafting, and ideation.",
    usageSteps: ["Create account", "Type prompt", "Refine output"],
    useCases: ["Drafting emails", "Summarizing documents", "Brainstorming"],
    limitations: "Knowledge cutoff, potential hallucinations",
    pricing: "Free / Plus $20/mo",
    link: "https://chat.openai.com"
  },
  {
    id: "gemini",
    name: "Google Gemini",
    category: "General Intelligence",
    description: "Google's AI for research, content analysis, and reasoning.",
    usageSteps: ["Login with Google", "Ask questions", "Export to Docs"],
    useCases: ["Market research", "Data analysis", "Creative writing"],
    limitations: "Can be confident but wrong",
    pricing: "Free / Advanced $20/mo",
    link: "https://gemini.google.com"
  },
  {
    id: "claude",
    name: "Claude (Anthropic)",
    category: "General Intelligence",
    description: "AI for complex analysis, coding, and structured output.",
    usageSteps: ["Upload text/PDF", "Ask for analysis", "Iterate"],
    useCases: ["Document summary", "Coding assistance", " nuanced writing"],
    limitations: "Usage limits on free tier",
    pricing: "Free / Pro $20/mo",
    link: "https://claude.ai"
  },

  // OPERATIONS & DATA
  {
    id: "sheets-ai",
    name: "Google Sheets + AI",
    category: "Operations & Data",
    description: "Data analysis, forecasting, and automation within spreadsheets.",
    usageSteps: ["Install extension", "Connect API", "Use formulas"],
    useCases: ["Sentiment analysis", "Data extraction", "Auto-categorization"],
    limitations: "Requires API key for some extensions",
    pricing: "Free (with API costs)",
    link: "https://sheets.google.com"
  },
  {
    id: "power-bi",
    name: "Power BI Desktop",
    category: "Operations & Data",
    description: "Executive dashboards and trend analysis.",
    usageSteps: ["Import data", "Build visuals", "Publish report"],
    useCases: ["KPI tracking", "Financial reporting", "Operations visibility"],
    limitations: "Steep learning curve",
    pricing: "Free (Desktop)",
    link: "https://powerbi.microsoft.com"
  },
  {
    id: "looker-studio",
    name: "Looker Studio",
    category: "Operations & Data",
    description: "KPI tracking and automated reports.",
    usageSteps: ["Connect data source", "Drag & drop charts", "Share report"],
    useCases: ["Marketing dashboards", "Sales tracking", "Web analytics"],
    limitations: "Can be slow with large data",
    pricing: "Free",
    link: "https://lookerstudio.google.com"
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    category: "Operations & Data",
    description: "Knowledge management and process documentation.",
    usageSteps: ["Type /ai", "Select command", "Edit result"],
    useCases: ["Summarizing notes", "Improving writing", "Brainstorming"],
    limitations: "Paid add-on",
    pricing: "$10/member/mo",
    link: "https://notion.so"
  },

  // PROJECT MANAGEMENT
  {
    id: "trello-ai",
    name: "Trello + AI",
    category: "Project Management",
    description: "Project tracking and workflow automation.",
    usageSteps: ["Enable power-up", "Configure rules", "Automate cards"],
    useCases: ["Task assignment", "Status updates", "Due date reminders"],
    limitations: "Limited automation runs on free tier",
    pricing: "Free",
    link: "https://trello.com"
  },
  {
    id: "clickup",
    name: "ClickUp",
    category: "Project Management",
    description: "Resource planning and status tracking.",
    usageSteps: ["Create workspace", "Add tasks", "Use AI features"],
    useCases: ["Sprint planning", "Time tracking", "Document collaboration"],
    limitations: "Complex interface",
    pricing: "Free / Paid plans",
    link: "https://clickup.com"
  },
  {
    id: "notion-pm",
    name: "Notion (PM)",
    category: "Project Management",
    description: "SOP documentation and project tracking.",
    usageSteps: ["Create database", "Add views", "Collaborate"],
    useCases: ["Project wiki", "Task list", "Roadmap"],
    limitations: "Setup time",
    pricing: "Free",
    link: "https://notion.so"
  },
  {
    id: "github-projects",
    name: "GitHub Projects",
    category: "Project Management",
    description: "Technical projects and CI/CD workflows.",
    usageSteps: ["Create project", "Link issues", "Automate workflow"],
    useCases: ["Software development", "Bug tracking", "Feature planning"],
    limitations: "Developer focused",
    pricing: "Free",
    link: "https://github.com"
  },

  // SALES & CUSTOMER
  {
    id: "hubspot",
    name: "HubSpot CRM",
    category: "Sales & Customer",
    description: "Lead tracking and pipeline management.",
    usageSteps: ["Import contacts", "Set up pipeline", "Track activity"],
    useCases: ["Contact management", "Deal tracking", "Email scheduling"],
    limitations: "Advanced features paid",
    pricing: "Free",
    link: "https://hubspot.com"
  },
  {
    id: "canva-ai",
    name: "Canva AI",
    category: "Sales & Customer",
    description: "Sales collateral and pitch presentations.",
    usageSteps: ["Choose template", "Use Magic Write/Design", "Export"],
    useCases: ["Social media posts", "Presentations", "Flyers"],
    limitations: "Some assets paid",
    pricing: "Free",
    link: "https://canva.com"
  },
  {
    id: "google-docs-ai",
    name: "Google Docs AI",
    category: "Sales & Customer",
    description: "Proposal drafting and content creation.",
    usageSteps: ["Open Doc", "Click 'Help me write'", "Refine"],
    useCases: ["Proposal writing", "Contract drafting", "Meeting notes"],
    limitations: "Workspace labs access needed",
    pricing: "Free (in beta)",
    link: "https://docs.google.com"
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    category: "Sales & Customer",
    description: "Customer communication and nurturing.",
    usageSteps: ["Create list", "Design email", "Send campaign"],
    useCases: ["Newsletters", "Welcome series", "Promotions"],
    limitations: "Contact limits on free tier",
    pricing: "Free",
    link: "https://mailchimp.com"
  },

  // AUTOMATION
  {
    id: "zapier",
    name: "Zapier",
    category: "Automation",
    description: "Cross-tool integrations and automation flows.",
    usageSteps: ["Select trigger app", "Select action app", "Test Zap"],
    useCases: ["Lead sync", "Social posting", "Notification routing"],
    limitations: "Task limits on free tier",
    pricing: "Free / Paid",
    link: "https://zapier.com"
  },
  {
    id: "make",
    name: "Make.com",
    category: "Automation",
    description: "Complex automations and data sync.",
    usageSteps: ["Create scenario", "Add modules", "Run once"],
    useCases: ["Multi-step workflows", "Data transformation", "API integration"],
    limitations: "Learning curve",
    pricing: "Free / Paid",
    link: "https://make.com"
  },
  {
    id: "apps-script",
    name: "Google Apps Script",
    category: "Automation",
    description: "Sheets/Docs customization.",
    usageSteps: ["Open Script Editor", "Write code", "Set triggers"],
    useCases: ["Custom functions", "Automated emails", "Menu items"],
    limitations: "Requires coding",
    pricing: "Free",
    link: "https://script.google.com"
  },
  {
    id: "ifttt",
    name: "IFTTT",
    category: "Automation",
    description: "Quick automations and simple workflows.",
    usageSteps: ["Choose service", "Set trigger", "Set action"],
    useCases: ["Smart home", "Social media", "Simple notifications"],
    limitations: "Simple logic only",
    pricing: "Free",
    link: "https://ifttt.com"
  },

  // ADVANCED
  {
    id: "chatgpt-api",
    name: "ChatGPT API",
    category: "Advanced",
    description: "Programmatic access to GPT.",
    usageSteps: ["Get API key", "Make requests", "Process response"],
    useCases: ["Custom apps", "Chatbots", "Bulk processing"],
    limitations: "Pay per token",
    pricing: "Pay as you go",
    link: "https://platform.openai.com"
  },
  {
    id: "hugging-face",
    name: "Hugging Face",
    category: "Advanced",
    description: "Open-source AI model hub.",
    usageSteps: ["Find model", "Test in browser", "Use in code"],
    useCases: ["Model discovery", "Testing SOTA", "Deployment"],
    limitations: "Technical knowledge required",
    pricing: "Free",
    link: "https://huggingface.co"
  },
  {
    id: "n8n",
    name: "N8N",
    category: "Advanced",
    description: "Open-source workflow automation.",
    usageSteps: ["Install/Cloud", "Build workflow", "Activate"],
    useCases: ["Self-hosted automation", "Complex flows", "Data piping"],
    limitations: "Self-hosting maintenance",
    pricing: "Free (Self-hosted)",
    link: "https://n8n.io"
  }
];
