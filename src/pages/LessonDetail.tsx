import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Video, CheckCircle2, FileText, Wrench, FileCode, PlayCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { modulesData } from "@/data/modules";
import ReactMarkdown from "react-markdown";

const LessonDetail = () => {
  const { moduleId, lessonId } = useParams();
  const navigate = useNavigate();
  
  const module = moduleId ? modulesData[moduleId] : null;
  const lesson = module?.lessons_list.find(l => l.id === lessonId);

  if (!module || !lesson) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4 text-center py-20">
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Lesson Not Found</h1>
            <Button asChild>
              <Link to={`/modules/${moduleId || ""}`}>
                <ArrowLeft className="w-4 h-4" />
                Back to Module
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Find next and previous lessons
  const currentIndex = module.lessons_list.findIndex(l => l.id === lessonId);
  const prevLesson = currentIndex > 0 ? module.lessons_list[currentIndex - 1] : null;
  const nextLesson = currentIndex < module.lessons_list.length - 1 ? module.lessons_list[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Breadcrumb / Back Navigation */}
          <div className="mb-8">
            <Link to={`/modules/${moduleId}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to {module.title}
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-3 text-sm font-medium text-gold mb-4">
                  <span className="bg-gold/10 px-3 py-1 rounded-full">{module.subtitle}</span>
                  <span>Lesson {lesson.id}</span>
                </div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {lesson.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {lesson.description}
                </p>
                
                {/* Content Tabs */}
                <Tabs defaultValue="video" className="w-full">
                   <TabsList className="grid w-full grid-cols-2 mb-8">
                      <TabsTrigger value="video" className="flex items-center gap-2">
                        <PlayCircle className="w-4 h-4" />
                        Video Lesson
                      </TabsTrigger>
                      <TabsTrigger value="script" className="flex items-center gap-2">
                        <FileCode className="w-4 h-4" />
                        Executive Summary & Script
                      </TabsTrigger>
                   </TabsList>
                   
                   <TabsContent value="video" className="mt-0">
                      {/* Video Placeholder */}
                      <div className="aspect-video bg-black/5 rounded-2xl flex items-center justify-center border border-border mb-8 relative group overflow-hidden">
                        {lesson.videoUrl && !lesson.videoUrl.includes("placeholder") ? (
                          <iframe 
                            src={lesson.videoUrl} 
                            className="w-full h-full" 
                            title={lesson.title}
                            allowFullScreen
                          />
                        ) : (
                          <div className="text-center group-hover:scale-105 transition-transform duration-300 p-8">
                            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                              <Video className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Video Production in Progress</h3>
                            <p className="text-muted-foreground font-medium max-w-sm mx-auto">
                              The high-definition video lesson for this module is currently in post-production. 
                              <br/><br/>
                              <span className="text-gold">Tip: Switch to the "Executive Summary & Script" tab to read the full lesson content immediately.</span>
                            </p>
                          </div>
                        )}
                      </div>
                   </TabsContent>
                   
                   <TabsContent value="script" className="mt-0">
                      <div className="bg-card border border-border rounded-2xl p-8 mb-8 prose prose-slate max-w-none dark:prose-invert">
                         {lesson.videoScript ? (
                            <div className="whitespace-pre-wrap font-sans text-base leading-relaxed">
                               <ReactMarkdown>{lesson.videoScript}</ReactMarkdown>
                            </div>
                         ) : (
                            <div className="text-center py-12 text-muted-foreground">
                               No script available for this lesson.
                            </div>
                         )}
                      </div>
                   </TabsContent>
                </Tabs>

                {/* Content Sections */}
                <div className="space-y-8">
                  {lesson.objectives && (
                    <div className="bg-card border border-border rounded-xl p-6">
                      <h3 className="font-serif text-xl font-bold mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-gold" />
                        Learning Objectives
                      </h3>
                      <ul className="space-y-2">
                        {lesson.objectives.map((obj, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {obj}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {lesson.topics && (
                    <div className="bg-card border border-border rounded-xl p-6">
                      <h3 className="font-serif text-xl font-bold mb-4">Key Topics</h3>
                      <div className="flex flex-wrap gap-2">
                        {lesson.topics.map((topic, i) => (
                          <span key={i} className="px-3 py-1 bg-secondary rounded-full text-sm font-medium text-muted-foreground">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Navigation Card */}
              <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
                <h3 className="font-serif text-lg font-semibold mb-4">Lesson Progress</h3>
                <div className="flex flex-col gap-3">
                   <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>{currentIndex + 1} of {module.lessons_list.length}</span>
                      <span>{Math.round(((currentIndex + 1) / module.lessons_list.length) * 100)}%</span>
                   </div>
                   <div className="h-2 bg-secondary rounded-full w-full overflow-hidden">
                      <div 
                        className="h-full bg-gold transition-all duration-500" 
                        style={{ width: `${((currentIndex + 1) / module.lessons_list.length) * 100}%` }}
                      />
                   </div>
                </div>
                
                <div className="mt-8 space-y-3">
                  {nextLesson ? (
                     <Button className="w-full justify-between" onClick={() => navigate(`/modules/${moduleId}/lesson/${nextLesson.id}`)}>
                       Next Lesson
                       <ArrowRight className="w-4 h-4" />
                     </Button>
                  ) : (
                    <Button className="w-full justify-between" variant="outline" onClick={() => navigate(`/modules/${moduleId}`)}>
                      Complete Module
                      <CheckCircle2 className="w-4 h-4" />
                    </Button>
                  )}
                  
                  {prevLesson && (
                    <Button variant="ghost" className="w-full justify-between text-muted-foreground" onClick={() => navigate(`/modules/${moduleId}/lesson/${prevLesson.id}`)}>
                      <ArrowLeft className="w-4 h-4" />
                      Previous
                    </Button>
                  )}
                </div>
              </div>

              {/* Tools & Resources */}
              {(lesson.freeTools || lesson.deliverables) && (
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="font-serif text-lg font-semibold mb-6">Resources</h3>
                  
                  {lesson.freeTools && lesson.freeTools.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">Tools</h4>
                      <ul className="space-y-3">
                        {lesson.freeTools.map((tool, i) => (
                          <li key={i} className="flex items-center gap-3 text-foreground">
                            <Wrench className="w-4 h-4 text-primary" />
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {lesson.deliverables && lesson.deliverables.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">Downloads</h4>
                      <ul className="space-y-3">
                        {lesson.deliverables.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-foreground hover:text-gold cursor-pointer transition-colors">
                            <FileText className="w-4 h-4 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LessonDetail;
