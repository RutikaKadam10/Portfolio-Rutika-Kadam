let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

/*menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});*/


const slider = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

// Create pagination dots
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    currentIndex = i;
    updateSlider();
  });
  dotsContainer.appendChild(dot);
});

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  document.querySelectorAll('.dots span').forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex);
  });
}

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
};

nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
};

updateSlider();

// ===== MODAL Logic =====
const modal = document.getElementById('project-modal');
const modalInfo = document.getElementById('modal-info');
const closeModal = document.querySelector('.close-modal');
const modalPrev = document.querySelector('.modal-prev');
const modalNext = document.querySelector('.modal-next');

const projectsData = [
  {
  title: "Cardiovascular Disease Prediction",
  overview: "A dual-model deep learning application that predicts cardiovascular disease risk using both clinical tabular data (ANN) and medical heart-scan images (CNN), integrated into an interactive Streamlit interface and deployed on Hugging Face Spaces.",
  details: `
    <ul>
      <li>Developed two complementary models — an Artificial Neural Network (ANN) for patient clinical data and a Convolutional Neural Network (CNN) for heart-scan image analysis.</li>
      <li>Engineered robust preprocessing pipelines for normalization, feature scaling, and model training, achieving 81% accuracy and an AUC of 0.87 with strong recall (0.94) for high-risk detection.</li>
      <li>Implemented an interactive Streamlit web interface allowing users to input patient details or upload medical images for real-time predictions with confidence visualization.</li>
      <li>Deployed the complete application on Hugging Face Spaces using a Docker environment for scalable, reproducible, and accessible deployment.</li>
      <li>Designed an intuitive, user-friendly interface featuring dynamic probability charts and integrated TensorFlow-based inference for both ANN and CNN models.</li>
    </ul>
  `
  },
  {
    title: "AskYourDocument",
    overview: "A Retrieval-Augmented Generation (RAG) application that enables intelligent Q&A over documents and web content using FAISS, SBERT, and Google Generative AI.",
    details: `
      <ul>
        <li>Developed an end-to-end Retrieval-Augmented Generation (RAG) application integrating FAISS-based semantic vector search with Sentence-BERT embeddings to deliver context-aware query responses from unstructured text sources.</li>  
        <li>Built a FastAPI backend for document ingestion, text chunking, embedding generation, and retrieval; exposed REST APIs for seamless integration with downstream applications.</li>  
        <li>Designed and implemented a Streamlit-based interactive frontend enabling users to upload documents (PDF/DOCX/TXT), perform semantic search, and receive LLM-powered contextual answers with improved retrieval accuracy.</li>  

      </ul>
    `
  },
  {
  title: "Airbnb Price Prediction",
  overview: "A machine learning project predicting Airbnb listing prices in Seattle through Exploratory Data Analysis, regression modeling, and sentiment analysis.",
  details: `<ul>
    <li>Conducted comprehensive EDA and data preprocessing, including handling missing values, encoding categorical variables, outlier treatment, and feature scaling.</li>
    <li>Explored relationships between price, room type, location, and amenities, identifying strong correlations and influential features.</li>
    <li>Implemented multiple regression algorithms — Linear Regression, Ridge, Lasso, Random Forest, XGBoost, and CatBoost — for price prediction.</li>
    <li>Achieved best performance with <b>Random Forest Regression (R² ≈ 0.68, MSE ≈ 3597)</b>, validated through 10-fold cross-validation.</li>
    <li>Applied feature importance and TreeInterpreter for model explainability, revealing that entire homes, higher bedroom counts, and premium amenities (gym, pool, elevator) significantly increase prices.</li>
    <li>Created insightful visualizations using Seaborn and Matplotlib to interpret distribution patterns, correlations, and prediction performance.</li>
  </ul>`
  }
  /*{
    title: "CensusIncome-Classifier",
    overview: "Income classification using AIC and ensemble models.",
    details: `<ul>
  <li>Developed a supervised ML pipeline to classify income levels using the UCI Adult Census dataset.</li>
  <li>Implemented AIC-based forward feature selection to identify optimal minimal feature set.</li>
  <li>Trained and compared multiple classifiers: Logistic Regression, KNN, Decision Tree, Random Forest, XGBoost, AdaBoost, and Gradient Boosting.</li>
  <li>Evaluated models using cross-validation, confusion matrix, sensitivity/specificity, AUC-ROC curves, and accuracy score.</li>
  <li>Concluded Random Forest as the best-performing model with 92.75% test accuracy and highest AUC score.</li>
</ul>`
  }*/,
  {
    title: "AirlineDB Insights",
    overview: "Advanced SQL query analysis on airline data.",
    details: `<ul>
  <li>Analyzed airline database to extract KPIs like on-time performance, revenue per flight, and occupancy rate.</li>
  <li>Wrote complex SQL queries using joins to integrate data from multiple tables for unified reporting.</li>
  <li>Used SQL window functions to calculate running totals and rank flight routes by demand and occupancy (95% accuracy).</li>
  <li>Applied CASE statements to enable dynamic flight categorization based on delay status, ticket class, and demographics.</li>
  <li>Built operational dashboards to visualize insights and support data-driven airline strategy.</li>
</ul>`
  },
  {
    title: "ConversionFlow Analyzer",
    overview: "Funnel analysis dashboard with Power BI.",
    details: `<ul>
  <li>Built an interactive Power BI dashboard to analyze Swiggy’s e-commerce funnel performance.</li>
  <li>Cleaned and transformed raw data, handled missing values, and created calculated fields using DAX.</li>
  <li>Conducted funnel analysis focusing on traffic sources, session metrics, and conversion stages (L2M, M2C, C2P, P2O).</li>
  <li>Tracked order volume fluctuations and conversion rate trends compared to historical benchmarks.</li>
  <li>Designed dynamic dashboards with KPIs and filters to identify key performance shifts and data-driven insights.</li>
</ul>`
  },
  {
    title: "SmartApply",
    overview: "A Gradio-based resume analysis app leveraging Google Gemini API to generate ATS match %, summaries, and skill insights.",
    details: `
      <ul>
        <li>Developed an AI-powered ATS (Applicant Tracking System) Resume Analyzer leveraging Google’s Gemini-1.5-Flash model to evaluate resumes against job descriptions.</li>
        <li>Integrated the Google Generative AI API through secure environment variables (.env) for content generation, analysis, and structured JSON outputs.</li>
        <li>Implemented resume text extraction using PyPDF2, dynamic prompt engineering, and an interactive Gradio UI to deliver real-time insights including: Job Description Match Percentage, Missing Keywords, Technical & Soft Skill Improvement Suggestions, Resume Summary.</li>
        <li>Built modular backend functions (<code>get_gemini_response</code>, <code>extract_pdf_text</code>, <code>generate_prompt</code>) to streamline model interaction and enhance scalability.</li>
        <li>Deployed the application on Hugging Face Spaces for public accessibility, enabling real-time, interactive resume–job description analysis.</li>
        <li>Implemented robust error handling covering API key validation, file parsing, and invalid user inputs to ensure reliability and a seamless user experience.</li>
    </ul>`
  }/*,
  {
    title: "ScoreCast - Academic Score Forecasting",
    overview: "ML framework to forecast math scores.",
    details: `
      <ul>
        <li>Developed a web app with Flask, HTML & CSS to forecast math scores from user input.</li>
        <li>Optimized data loading, preprocessing & transformation pipelines, incorporating one-hot encoding for categorical features.</li>
        <li>Trained models: Random Forest, XGBoost, CatBoost, Gradient Boosting, AdaBoost, Decision Tree & Linear Regression.</li>
        <li>Selected best model using R² score and GridSearchCV (R² = 0.868).</li>
        <li>Improved accuracy and generalization through hyperparameter tuning.</li>
      </ul>
    `
  }*/
];

document.querySelectorAll('.project-card').forEach(card => {
  card.querySelector('.read-more-btn').addEventListener('click', () => {
    const index = parseInt(card.dataset.index);
    showModal(index);
  });
});

function showModal(index) {
  const project = projectsData[index];
  modalInfo.innerHTML = `
    <h2>${project.title}</h2>
    <h3>Overview</h3>
    <p>${project.overview}</p>
    <h3>Details</h3>
    <p>${project.details}</p>
  `;
  modal.style.display = 'flex';
  modal.dataset.current = index;
}

closeModal.onclick = () => {
  modal.style.display = 'none';
};

modalPrev.onclick = () => {
  let idx = parseInt(modal.dataset.current);
  idx = (idx - 1 + projectsData.length) % projectsData.length;
  showModal(idx);
};

modalNext.onclick = () => {
  let idx = parseInt(modal.dataset.current);
  idx = (idx + 1) % projectsData.length;
  showModal(idx);
};





VANTA.NET({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 300.00,
  minWidth: 300.00,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x2f5c6c,       // dark teal
  backgroundColor: 0xa6c8d6, // light teal
  points: 8.0,
  maxDistance: 25.0,
  spacing: 25.0
})



document.addEventListener('DOMContentLoaded', function(){
  const triggers = Array.from(document.querySelectorAll('.experience .xp-trigger'));
  const panel = document.getElementById('xp-active-panel');
  if (!triggers.length || !panel) return;

  function render(btn, shouldScroll = false){
  triggers.forEach(b => b.setAttribute('aria-expanded', 'false'));
  btn.setAttribute('aria-expanded', 'true');

  const date = btn.querySelector('.xp-date')?.textContent?.trim() || '';
  const role = btn.querySelector('.xp-role')?.textContent?.trim() || '';
  const comp = btn.querySelector('.xp-company')?.textContent?.trim() || '';

  const src = btn.parentElement.querySelector('.description');

  const heading = [role, comp ? `@ ${comp}` : ''].filter(Boolean).join(' ');
  panel.innerHTML = `
    <h3>${heading}</h3>
    <div class="xp-sub">${date}</div>
    ${src ? src.innerHTML : ''}
  `;

  if (shouldScroll) {
    const top = panel.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

triggers.forEach(btn => btn.addEventListener('click', () => render(btn, true)));
render(triggers[0], false); // initial: no scroll

  triggers.forEach(btn => btn.addEventListener('click', () => render(btn)));
  render(triggers[0]); // initial
});




