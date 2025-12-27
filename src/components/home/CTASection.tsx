import { motion } from "framer-motion";
import { ArrowRight, Award, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const benefits = [
  { icon: Award, text: "Executive Certification" },
  { icon: Clock, text: "Self-Paced Learning" },
  { icon: Shield, text: "No IT Dependency" },
];

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Lead with AI?
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-8">
            Join thousands of senior executives who have transformed their decision-making 
            capabilities with our practical AI training program.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {benefits.map((benefit) => (
              <div key={benefit.text} className="flex items-center gap-2 text-primary-foreground/80">
                <benefit.icon className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/modules">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button 
              variant="premium" 
              size="xl" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to="/prompts">
                Explore Prompt Library
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
