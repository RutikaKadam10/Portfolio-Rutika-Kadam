import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="heading-display text-5xl md:text-7xl font-semibold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              <em> Rutika</em>
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              <em> Kadam</em>
            </span>
          </h1>

          <p className="-mt-2 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            <span className="label-mono text-sm md:text-base text-gradient">
              Data Science | Machine Learning | Artificial Intelligence | Software Engineering
            </span>
            <span className="block mt-6">
              I see data not as numbers, but as yesterday&apos;s experience
              waiting to shape a smarter tomorrow - and I&apos;m passionate
              about building the scalable AI and machine learning systems that
              make that transformation possible.
            </span>
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="/Rutika_Kadam_ResumeDS.pdf"
              target="_blank"
              rel="noreferrer"
              className="button-label inline-block w-full sm:w-auto px-6 py-2 rounded-sm border border-primary text-primary text-center hover:bg-primary/10 transition-colors duration-300"
            >
              Download CV
            </a>

            <div className="mt-7 flex items-center justify-center gap-5">
              <a
                href="https://www.linkedin.com/in/rutika-avinash/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="text-foreground/75 transition-colors duration-300 hover:text-primary"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/RutikaKadam10"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="text-foreground/75 transition-colors duration-300 hover:text-primary"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:rutikakadam2727@gmail.com"
                aria-label="Send email"
                className="text-foreground/75 transition-colors duration-300 hover:text-primary"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="label-mono text-[11px] text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
