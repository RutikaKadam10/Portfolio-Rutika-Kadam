import { useState } from "react";
import { Briefcase, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    company: "Stony Brook Medicine",
    location: "Stony Brook, USA",
    role: "Data Scientist (Graduate Researcher)",
    duration: "July 2025 - Present",
    points: [
      "Built an end-to-end Multi-Modal RAG pipeline over 6k+ pages of medical documents for Department of Public Health, Stony Brook Medicine, using Azure Document Intelligence for layout-aware extraction & GPT-4o for figure captioning.",
      "Implemented custom semantic chunking using embedding-based sentence similarity & adaptive breakpoint detection.",
      "Designed & benchmarked FLAT, HNSW, & IVF_FLAT indexes in Milvus across 27k+ multi-modal chunks, comparing p50/p95 latency & Recall@5; achieved comparable accuracy with approximate indexes at ∼2.5× lower latency than FLAT.",
      "Evaluated vector search, MMR reranking, & hybrid Vector+BM25 retrieval with RRF on a synthetic ground-truth dataset spanning text, tables, & images; achieved 0.90 Recall@5 with hybrid retrieval.",
      "Built a grounded RAG generation pipeline with structured JSON outputs & source citations, achieving RAGAS scores of 0.82 faithfulness, 0.82 answer relevancy, 0.93 context precision, & 0.74 context recall.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    location: "Pune, India",
    role: "System Analyst",
    duration: "August 2020 - April 2024",
    points: [
      "Collaborating with the Vulnerability Management team, performed exploratory data analysis on 1M+ system vulnerability records reporting from Qualys VMDR using Python-pandas, uncovering trends, anomalies, and threat vectors, that informed remediation prioritization.",
      "Built linear and logistic regression models (scikit-learn) predicting CVSS severity and exploit availability on 150K findings, achieving 0.74 ROC-AUC and a 22% risk-exposure reduction via backtest vs. FIFO prioritization.",
      "Discovered recurring remediation patterns across 150K+ detection records by applying semantic clustering using E5 embeddings with HDBSCAN on remediation text data.",
      "Fine-tuned a DistilBERT classifier on cluster-derived labels to predict remediation categories, achieving 100% held-out accuracy, laying the groundwork for automated ticket routing.",
      "Achieved 99% patch compliance across enterprise systems by deploying automated remediation workflows through Microsoft Endpoint Configuration Manager and automated tasks using PowerShell, boosting productivity by 25%.",
    ],
  },
  {
    company: "Zensar Technologies",
    location: "Pune, India",
    role: "Data Intern",
    duration: "May 2019 - July 2019",
    points: [
      "Implemented ETL pipelines in Azure Data Factory with incremental batch loading to ingest multi-channel website traffic and operational data into Azure Data Lake Gen2 for scalable data integration for Swiggy India.",
      "Developed Power BI dashboards to visualize conversion funnel metrics and marketing channel attribution, identifying drivers of traffic variability and campaign performance, increasing high-intent traffic by 15%.",
    ],
  },
];

export const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeExperience = experiences[activeIndex];

  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title text-4xl md:text-6xl font-semibold mb-10 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {experiences.map((experience, index) => (
            <button
              key={experience.company}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "button-label rounded-sm border px-5 py-2.5 text-sm transition-all duration-300",
                activeIndex === index
                  ? "border-primary bg-primary text-primary-foreground shadow-[0_0_20px_rgba(139,92,246,0.25)]"
                  : "border-border bg-card/60 text-foreground/80 hover:border-primary hover:text-primary"
              )}
            >
              {experience.company}
            </button>
          ))}
        </div>

        <div className="gradient-border bg-card p-6 md:p-8">
          <div
            key={`${activeExperience.company}-${activeExperience.role}`}
            className="animate-fade-in"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="text-left space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-full bg-primary/10 shrink-0">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">
                      {activeExperience.company}
                    </h3>
                    <p className="text-primary font-medium">
                      {activeExperience.role}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    {activeExperience.location}
                  </span>
                  <span>{activeExperience.duration}</span>
                </div>
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-left text-muted-foreground list-disc pl-5">
              {activeExperience.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
