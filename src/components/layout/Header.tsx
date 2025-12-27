import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Modules", href: "/modules" },
  { name: "Prompt Library", href: "/prompts" },
  { name: "Case Studies", href: "/cases" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-semibold text-foreground">AI for Leaders</span>
            <span className="text-xs text-muted-foreground -mt-0.5">Executive Training</span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === item.href
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button variant="hero" size="sm">
            Start Learning
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-background border-b border-border"
        >
          <div className="container mx-auto py-4 px-4 flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex gap-2 mt-4">
              <Button variant="ghost" size="sm" className="flex-1">
                Sign In
              </Button>
              <Button variant="hero" size="sm" className="flex-1">
                Start Learning
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
