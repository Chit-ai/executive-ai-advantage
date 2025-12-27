import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, BookOpen, Award, CheckCircle2, Play, Brain, Factory, Truck, ClipboardList, TrendingUp } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { modulesData } from "@/data/modules";

const ModuleDetail = () => {
  const { moduleId } = useParams();
  const module = moduleId ? modulesData[moduleId] : null;

  if (!module) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4 text-center py-20">
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Module Not Found</h1>
            <Button asChild>
              <Link to="/modules">
                <ArrowLeft className="w-4 h-4" />
                Back to Modules
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = module.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className={`py-16 bg-gradient-to-br ${module.color}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <Link to="/modules" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Modules
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-sm text-white/70">{module.subtitle}</span>
                  <h1 className="font-serif text-3xl md:text-4xl font-bold text-white">{module.title}</h1>
                </div>
              </div>
              <p className="text-xl text-white/80 mb-8">{module.overview}</p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-white">
                  <Clock className="w-5 h-5" />
                  <span>{module.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <BookOpen className="w-5 h-5" />
                  <span>{module.lessonsCount} lessons</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Award className="w-5 h-5" />
                  <span>Certificate included</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Learning Objectives */}
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Learning Objectives</h2>
                  <ul className="space-y-3">
                    {module.learningObjectives.map((objective, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{objective}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Lessons */}
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Course Content</h2>
                  <div className="space-y-3">
                    {module.lessons_list.map((lesson, index) => (
                      <Link to={`/modules/${module.id}/lesson/${lesson.id}`} key={index}>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="p-4 rounded-xl bg-card border border-border hover:border-gold/30 transition-colors group cursor-pointer mb-3"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                                <Play className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors" />
                              </div>
                              <div>
                                <h4 className="font-medium text-foreground group-hover:text-gold transition-colors">{lesson.title}</h4>
                                <p className="text-sm text-muted-foreground">{lesson.description}</p>
                              </div>
                            </div>
                            <span className="text-sm text-muted-foreground flex items-center gap-2">
                              {lesson.duration}
                              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                            </span>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Sample Prompt */}
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Sample Prompt Framework</h2>
                  <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                    <p className="text-sm text-muted-foreground mb-4">{module.promptExample.context}</p>
                    <pre className="p-4 rounded-lg bg-card text-sm text-foreground font-mono whitespace-pre-wrap">
                      {module.promptExample.prompt}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Enroll Card */}
                <div className="p-6 rounded-2xl bg-card border border-border shadow-card sticky top-28">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Start This Module</h3>
                  <Button variant="hero" size="lg" className="w-full mb-4" asChild>
                    <Link to={`/modules/${module.id}/lesson/${module.lessons_list[0].id}`}>
                      Begin Learning
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">Free • No credit card required</p>
                </div>

                {/* Tools */}
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Tools You'll Use</h3>
                  <div className="space-y-4">
                    {module.tools.map((tool) => (
                      <div key={tool.name} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-success" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{tool.name}</div>
                          <div className="text-sm text-muted-foreground">{tool.purpose}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ModuleDetail;
