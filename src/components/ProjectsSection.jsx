import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Github, X } from "lucide-react";

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const projects = [
  {
    id: 1,
    title: "Make Your Trip",
    description:
      "A multi-agent AI travel planner that generates end-to-end itineraries using live hotel, weather, and flight tool integrations, then pauses for human review before finalizing the trip.",
    image: asset("projects/Proj1.png"),
    tags: ["Agentic AI", "Multi Agent", "LangGraph", "MCP", "Human in the Loop"],
    githubUrl: "https://github.com/RutikaKadam10/make_your_trip",
    overview:
      "Make Your Trip is a multi-agent AI travel planner built with FastAPI, LangGraph, MCP, Groq, and PostgreSQL. It helps users generate end-to-end travel plans using live hotel, weather, and flight-related tool integrations, then pauses for human review before producing the final itinerary.",
    details: [
      "Built a supervisor-driven multi-agent workflow in LangGraph where specialist agents handle flights, hotels, weather, budget analysis, itinerary drafting, human approval, and final trip generation.",
      "Integrated live hotel search through a local MCP server backed by Booking.com via RapidAPI, weather lookup through a custom MCP server, and flight and airport assistance through AviationStack MCP.",
      "Developed the application with FastAPI, Jinja2 templates, HTML, CSS, and JavaScript, and used Groq via langchain-groq for LLM-powered planning.",
      "Added a human-in-the-loop approval step before final itinerary generation so users can review or revise the draft plan before the final output is produced.",
      "Used PostgreSQL-backed LangGraph checkpointing to persist workflow state and support more reliable multi-step planning.",
      "Resolved a hotel integration bottleneck by truncating oversized hotel-agent output before storing it in shared state, reducing prompt size and lowering the risk of Groq token-per-minute and request-size failures.",
    ],
  },
  {
    id: 2,
    title: "Cardiovascular Diseases Prediction",
    description:
      "A dual-model deep learning application that predicts cardiovascular disease risk using both clinical data (ANN) and medical heart-scan images (CNN), integrated into an interactive Streamlit interface.",
    image: asset("projects/Proj2.webp"),
    tags: ["Deep Learning", "ANN", "CNN"],
    githubUrl: "https://github.com/RutikaKadam10/cardiovascular_diseases_prediction.git",
    overview:
      "A dual-model deep learning application that predicts cardiovascular disease risk using both clinical tabular data (ANN) and medical heart-scan images (CNN), integrated into an interactive Streamlit interface and deployed on Hugging Face Spaces.",
    details: [
      "Developed two complementary models: an Artificial Neural Network (ANN) for patient clinical data and a Convolutional Neural Network (CNN) for heart-scan image analysis.",
      "Engineered robust preprocessing pipelines for normalization, feature scaling, and model training, achieving 81% accuracy and an AUC of 0.87 with strong recall (0.94) for high-risk detection.",
      "Implemented an interactive Streamlit web interface allowing users to input patient details or upload medical images for real-time predictions with confidence visualization.",
      "Deployed the complete application on Hugging Face Spaces using a Docker environment for scalable, reproducible, and accessible deployment.",
      "Designed an intuitive, user-friendly interface featuring dynamic probability charts and integrated TensorFlow-based inference for both ANN and CNN models.",
    ],
  },
  {
    id: 3,
    title: "AskYourDocument",
    description:
      "A Retrieval-Augmented Generation (RAG) application that enables intelligent Q&A over documents and web content using FAISS, SBERT, and Google Generative AI.",
    image: asset("projects/Proj3.png"),
    tags: ["Generative AI", "RAG", "FAISS"],
    githubUrl: "https://github.com/RutikaKadam10/AskYourDoc",
    overview:
      "A Retrieval-Augmented Generation (RAG) application that enables intelligent Q&A over documents and web content using FAISS, SBERT, and Google Generative AI.",
    details: [
      "Developed an end-to-end Retrieval-Augmented Generation (RAG) application integrating FAISS-based semantic vector search with Sentence-BERT embeddings to deliver context-aware query responses from unstructured text sources.",
      "Built a FastAPI backend for document ingestion, text chunking, embedding generation, and retrieval; exposed REST APIs for seamless integration with downstream applications.",
      "Designed and implemented a Streamlit-based interactive frontend enabling users to upload documents (PDF, DOCX, TXT), perform semantic search, and receive LLM-powered contextual answers with improved retrieval accuracy.",
    ],
  },
  {
    id: 4,
    title: "Airbnb Price Prediction",
    description:
      "A machine learning project predicting Airbnb listing prices in Seattle through Exploratory Data Analysis, regression modeling, and sentiment analysis.",
    image: asset("projects/proj4.jpg"),
    tags: ["Machine Learning", "EDA", "Regression"],
    githubUrl: "https://github.com/RutikaKadam10/seattle_airbnb_insights-text-sentiment-and-price-prediction",
    overview:
      "A machine learning project predicting Airbnb listing prices in Seattle through Exploratory Data Analysis, regression modeling, and sentiment analysis.",
    details: [
      "Conducted comprehensive EDA and data preprocessing, including handling missing values, encoding categorical variables, outlier treatment, and feature scaling.",
      "Explored relationships between price, room type, location, and amenities, identifying strong correlations and influential features.",
      "Implemented multiple regression algorithms including Linear Regression, Ridge, Lasso, Random Forest, XGBoost, and CatBoost for price prediction.",
      "Achieved best performance with Random Forest Regression (R² ≈ 0.68, MSE ≈ 3597), validated through 10-fold cross-validation.",
      "Applied feature importance and TreeInterpreter for model explainability, revealing that entire homes, higher bedroom counts, and premium amenities significantly increase prices.",
      "Created insightful visualizations using Seaborn and Matplotlib to interpret distribution patterns, correlations, and prediction performance.",
    ],
  },
  {
    id: 5,
    title: "AirlineDB Insights",
    description:
      "Executed SQL-based analysis on airline data to derive KPIs like on-time rates and occupancy. Leveraged joins, window functions, and CASE logic for dynamic, 95%-accurate reporting.",
    image: asset("projects/proj5.jpg"),
    tags: ["SQL Analytics", "KPIs", "Reporting"],
    githubUrl: "https://github.com/RutikaKadam10/SQL-Proficiency/tree/main/AirlineDB",
    overview: "Advanced SQL query analysis on airline data.",
    details: [
      "Analyzed airline database to extract KPIs like on-time performance, revenue per flight, and occupancy rate.",
      "Wrote complex SQL queries using joins to integrate data from multiple tables for unified reporting.",
      "Used SQL window functions to calculate running totals and rank flight routes by demand and occupancy (95% accuracy).",
      "Applied CASE statements to enable dynamic flight categorization based on delay status, ticket class, and demographics.",
      "Built operational dashboards to visualize insights and support data-driven airline strategy.",
    ],
  },
  {
    id: 6,
    title: "ConversionFlow Analyzer",
    description:
      "An interactive Power BI dashboard for analyzing Swiggy's user conversion funnel and channel trends.",
    image: asset("projects/Proj6.png"),
    tags: ["Power BI", "Funnel Analysis", "DAX"],
    githubUrl: "https://github.com/RutikaKadam10/PowerBi-Tableau/tree/main/SWIGGY%20E-commerce%20Food%20Ordering%20Website-Funnel%20Analysis",
    overview: "Funnel analysis dashboard with Power BI.",
    details: [
      "Built an interactive Power BI dashboard to analyze Swiggy's e-commerce funnel performance.",
      "Cleaned and transformed raw data, handled missing values, and created calculated fields using DAX.",
      "Conducted funnel analysis focusing on traffic sources, session metrics, and conversion stages (L2M, M2C, C2P, P2O).",
      "Tracked order volume fluctuations and conversion rate trends compared to historical benchmarks.",
      "Designed dynamic dashboards with KPIs and filters to identify key performance shifts and data-driven insights.",
    ],
  },
];

export const ProjectsSection = () => {
  const sliderRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  const scrollProjects = (direction) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const scrollAmount = slider.clientWidth;

    slider.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="relative mb-10 flex items-center justify-center">
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <button
              type="button"
              onClick={() => scrollProjects("prev")}
              className="p-1 text-foreground/75 transition-colors duration-300 hover:text-primary"
              aria-label="Scroll projects left"
            >
              <ChevronLeft className="h-8 w-8 md:h-10 md:w-10" />
            </button>
          </div>

          <h2 className="section-title text-4xl md:text-6xl font-semibold text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <button
              type="button"
              onClick={() => scrollProjects("next")}
              className="p-1 text-foreground/75 transition-colors duration-300 hover:text-primary"
              aria-label="Scroll projects right"
            >
              <ChevronRight className="h-8 w-8 md:h-10 md:w-10" />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="group snap-start shrink-0 basis-full md:basis-[calc(50%-12px)] xl:basis-[calc(33.333%-16px)] bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium border rounded-sm bg-secondary/60 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-5">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 whitespace-nowrap pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 text-foreground/80 hover:text-primary transition-colors duration-300"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <Github size={20} />
                  </a>

                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="button-label shrink-0 rounded-sm border border-primary px-4 py-2 text-sm text-primary transition-colors duration-300 hover:bg-primary/10"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Close project details"
            onClick={() => setActiveProject(null)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <div className="relative z-10 w-full max-w-3xl rounded-md border border-border bg-card p-6 shadow-2xl md:p-8">
            <button
              type="button"
              onClick={() => setActiveProject(null)}
              className="absolute right-4 top-4 text-foreground/70 transition-colors duration-300 hover:text-primary"
              aria-label="Close project details panel"
            >
              <X className="h-7 w-7" />
            </button>

            <h3 className="pr-12 text-2xl md:text-3xl font-bold">
              {activeProject.title}
            </h3>

            <div className="mt-6 space-y-6 text-left">
              <div>
                <h4 className="text-lg font-semibold mb-2">Overview</h4>
                <p className="text-muted-foreground leading-7">
                  {activeProject.overview}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">Details</h4>
                <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
                  {activeProject.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
