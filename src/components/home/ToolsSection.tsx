import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const toolCategories = [
  {
    category: "General Intelligence",
    tools: ["ChatGPT", "Google Gemini", "Claude"],
    description: "Core AI assistants for strategic thinking and analysis",
  },
  {
    category: "Operations & Data",
    tools: ["Google Sheets + AI", "Power BI Desktop", "Looker Studio", "Notion AI"],
    description: "Data analysis and visualization platforms",
  },
  {
    category: "Project Management",
    tools: ["Trello + AI", "ClickUp", "Notion", "GitHub Projects"],
    description: "Task tracking and team coordination",
  },
  {
    category: "Sales & Growth",
    tools: ["HubSpot CRM", "Canva AI", "Google Docs AI", "Mailchimp"],
    description: "Customer management and marketing automation",
  },
  {
    category: "Automation",
    tools: ["Zapier", "Make.com", "Google Apps Script", "IFTTT"],
    description: "No-code workflow automation",
  },
];

export function ToolsSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Curated Free AI Tools
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No paid subscriptions required. Learn to leverage the best free AI tools 
            available to solve real business problems.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {category.category}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {category.description}
              </p>
              <ul className="space-y-2">
                {category.tools.map((tool) => (
                  <li key={tool} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    <span className="text-foreground">{tool}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
