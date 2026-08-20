import { CircleDot, GraduationCap } from "lucide-react";

export const AboutSection = () => {
  const profileImageUrl = `${import.meta.env.BASE_URL}projects/profile.jpeg`;

  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title text-4xl md:text-6xl font-semibold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Machine Learning & AI, Software Engineering
            </h3>

            <ul className="space-y-4 text-left text-muted-foreground list-disc pl-5">
        
              <li>
                4 years of professional experience transforming complex data
                challenges into actionable insights.
              </li>
              <li>
                Specialized in end-to-end ML pipelines, from data processing
                and model development to production deployment.
              </li>
              <li>
                Hands-on experience building Generative AI and Agentic AI
                systems, including RAG pipelines, LLM-powered applications, and
                autonomous agent workflows using LangChain, LangGraph, and
                other cutting-edge frameworks.
              </li>
              <li>
                Actively seeking full-time roles such as Data Scientist, Machine Learning Engineer, AI/ML
                Engineer, Generative AI Engineer, Agentic AI, Data Analyst, Business
                Analyst, and Data Engineer.
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-start">
              <a
                href="#contact"
                className="cosmic-button w-full sm:w-44 text-center"
              >
                Get In Touch
              </a>

              <a
                href="#projects"
                className="button-label w-full sm:w-44 px-6 py-2 rounded-sm border border-primary text-primary text-center hover:bg-primary/10 transition-colors duration-300"
              >
                View My Work
              </a>
            </div>
          </div>

          <div className="md:max-w-sm md:ml-auto">
            <div className="gradient-border p-4">
              <div className="space-y-4">
                <div className="w-full px-1">
                  <img
                    src={profileImageUrl}
                    alt="Rutika Kadam"
                    className="h-[275px] w-full object-cover rounded-sm"
                  />
                </div>

                <div className="border-t border-border/70 pt-4 space-y-4">
                  <div className="flex items-start gap-3 text-left">
                    <div className="p-2 rounded-full bg-primary/10 shrink-0">
                      <GraduationCap className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">
                        MS Data Science
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        SUNY Stony Brook
                      </p>
                      <p className="text-xs text-muted-foreground">May 2026</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-left border-t border-border/70 pt-4">
                    <div className="p-2 rounded-full bg-primary/10 shrink-0">
                      <GraduationCap className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">
                        BE Information Technology
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Savitribai Phule Pune University
                      </p>
                      <p className="text-xs text-muted-foreground">May 2020</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-left border-t border-border/70 pt-4">
                    <div className="p-2 rounded-full bg-primary/10 shrink-0">
                      <CircleDot className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Open to Roles</h4>
                      <p className="text-xs text-muted-foreground">
                        Full-time Data Science, AI/ML, AI Software
                        Engineering, and Analytics roles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
