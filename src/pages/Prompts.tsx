import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Search, Filter, Sparkles, Target, Shield, DollarSign, AlertTriangle, FileText, Factory, Truck, ClipboardList, TrendingUp } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { promptsData } from "@/data/prompts";

// Map categories to icons
const categories = [
  { id: "all", label: "All Prompts", icon: Sparkles },
  { id: "General Strategy", label: "Strategy", icon: Target },
  { id: "Operations", label: "Operations", icon: Factory },
  { id: "Supply Chain", label: "Supply Chain", icon: Truck },
  { id: "Project Management", label: "Project Mgmt", icon: ClipboardList },
  { id: "Sales", label: "Sales & Rev", icon: TrendingUp },
];

const Prompts = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPrompts = promptsData.filter((prompt) => {
    const matchesCategory = selectedCategory === "all" || prompt.category === selectedCategory || (selectedCategory === "Sales" && prompt.category === "Sales");
    const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.context.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Exact category match for data
    if (selectedCategory !== "all") {
       return prompt.category.includes(selectedCategory) && matchesSearch;
    }
    return matchesCategory && matchesSearch;
  });

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
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
                Battle-tested prompts for strategic decision-making. {promptsData.length}+ frameworks ready to deploy.
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
                  className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                        <div className="text-xs font-medium text-gold mb-1 uppercase tracking-wider">{prompt.category}</div>
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                        {prompt.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {prompt.context}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard(prompt.prompt_text, prompt.id)}
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
                  <div className="relative mb-4 flex-grow">
                     <p className="text-xs text-muted-foreground mb-1">Prompt Pattern:</p>
                    <pre className="p-4 rounded-lg bg-secondary/50 text-sm text-foreground font-mono whitespace-pre-wrap overflow-hidden max-h-48 overflow-y-auto">
                      {prompt.prompt_text}
                    </pre>
                  </div>

                  {/* Tools & Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {prompt.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 text-xs font-medium rounded bg-gold/10 text-gold"
                      >
                        {tool}
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
