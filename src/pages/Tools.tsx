import { motion } from "framer-motion";
import { Search, ExternalLink, Wrench, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toolsData } from "@/data/tools";
import { useState } from "react";

const Tools = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const categories = Array.from(new Set(toolsData.map(t => t.category)));
  
  const filteredTools = toolsData.filter(tool => 
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                AI Tools Directory
              </h1>
              <p className="text-xl text-primary-foreground/70 mb-8">
                Curated collection of 20+ free and essential AI tools for executives.
                Categorized by function and business impact.
              </p>
              
              <div className="relative max-w-xl">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Search tools, capabilities, or categories..." 
                  className="pl-10 h-12 bg-background/10 backdrop-blur border-white/20 text-white placeholder:text-white/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            {categories.map((category) => {
              const categoryTools = filteredTools.filter(t => t.category === category);
              
              if (categoryTools.length === 0) return null;
              
              return (
                <div key={category} className="mb-16">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-gold" />
                    {category}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryTools.map((tool) => (
                      <motion.div
                        key={tool.id}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all flex flex-col h-full"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="font-semibold text-lg text-foreground group-hover:text-gold transition-colors">{tool.name}</h3>
                          <Badge variant="outline" className="text-xs">{tool.pricing}</Badge>
                        </div>
                        
                        <p className="text-muted-foreground text-sm mb-6 flex-grow">{tool.description}</p>
                        
                        <div className="space-y-4 mb-6">
                           <div>
                             <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Best Uses</h4>
                             <div className="flex flex-wrap gap-2">
                               {tool.useCases.slice(0, 3).map((useCase, i) => (
                                 <span key={i} className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground">
                                   {useCase}
                                 </span>
                               ))}
                             </div>
                           </div>
                        </div>

                        <Button variant="outline" asChild className="w-full mt-auto group-hover:border-gold/50 group-hover:text-gold transition-colors">
                          <a href={tool.link} target="_blank" rel="noopener noreferrer">
                            Visit Tool <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
            
            {filteredTools.length === 0 && (
                <div className="text-center py-20 text-muted-foreground">
                    No tools found matching "{searchQuery}"
                </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tools;
