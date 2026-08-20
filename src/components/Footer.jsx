import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8">
      <div className="container relative flex items-center justify-center">
        <p className="text-center text-xs text-muted-foreground">
          Thank you for visiting digital me! Let&apos;s connect - I&apos;d love
          to hear from you!
        </p>

        <a
          href="#hero"
          className="absolute right-0 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors shrink-0"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
