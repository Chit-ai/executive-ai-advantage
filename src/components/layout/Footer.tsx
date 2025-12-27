import { Sparkles, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <span className="font-serif text-lg font-semibold">AI for Leaders</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Empowering senior executives to harness AI for strategic decision-making using free tools.
            </p>
          </div>

          {/* Learning */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Learning Paths</h4>
            <ul className="space-y-3">
              <li><Link to="/modules" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">AI Foundations</Link></li>
              <li><Link to="/modules" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">Operations</Link></li>
              <li><Link to="/modules" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">Supply Chain</Link></li>
              <li><Link to="/modules" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">Project Management</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/prompts" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">Prompt Library</Link></li>
              <li><Link to="/cases" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">Case Studies</Link></li>
              <li><Link to="/" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">Tool Directory</Link></li>
              <li><Link to="/" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">Certification</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              contact@aiforleaders.com
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2024 AI for Senior Leaders. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-primary-foreground/50 hover:text-gold text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/50 hover:text-gold text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
