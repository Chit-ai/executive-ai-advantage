import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "This course transformed how I approach strategic decisions. The prompt frameworks alone have saved our team countless hours.",
    author: "Rajesh Kumar",
    role: "VP Operations",
    company: "Fortune 500 Manufacturing",
  },
  {
    quote: "Finally, an AI course that speaks the language of business leaders, not engineers. Practical, applicable, and immediately valuable.",
    author: "Priya Sharma",
    role: "COO",
    company: "FMCG Conglomerate",
  },
  {
    quote: "The supply chain module helped us reduce inventory costs by 18% using only free tools. Remarkable ROI on time invested.",
    author: "Michael Chen",
    role: "Head of Supply Chain",
    company: "Global Logistics",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Senior Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Executives from leading organizations have transformed their AI capabilities through this program.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-card border border-border"
            >
              <Quote className="w-10 h-10 text-gold/30 absolute top-6 right-6" />
              <p className="text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-primary font-serif font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-gold">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
