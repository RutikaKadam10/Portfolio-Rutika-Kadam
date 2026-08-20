const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      "Python",
      "R",
      "SAS",
      "SQL",
      "MySQL",
      "PostgreSQL",
      "PL/SQL",
      "C++",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Data Science & AI Libraries",
    skills: [
      "NumPy",
      "Pandas",
      "Seaborn",
      "scikit-learn",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Hugging Face",
      "LangChain",
      "LangGraph",
    ],
  },
  {
    title: "Data Engineering & Big Data",
    skills: [
      "Azure Data Factory",
      "Data Lake",
      "Databricks",
      "Microsoft Fabric",
      "SSMS",
      "SSIS",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Azure",
      "AWS",
      "FastAPI",
      "REST APIs",
      "Docker",
      "Kubernetes",
      "MLflow",
      "Git",
      "GitHub",
      "Postman",
    ],
  },
  {
    title: "Visualization & Analytics",
    skills: ["Power BI", "Tableau", "Microsoft Excel"],
  },
  {
    title: "Security & IT Operations",
    skills: [
      "Qualys VMDR",
      "Microsoft Endpoint Configuration Manager",
      "ServiceNow",
      "Jira",
      "Aternity",
      "Vulnerability Management",
      "Patch Management",
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title text-4xl md:text-6xl font-semibold mb-10 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {skillGroups.map((group) => (
            <div key={group.title} className="text-left">
              <h3 className="label-mono text-[11px] md:text-xs text-muted-foreground mb-3 border-b border-border pb-3">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 border border-border bg-card/60 text-foreground rounded-sm text-xs md:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
