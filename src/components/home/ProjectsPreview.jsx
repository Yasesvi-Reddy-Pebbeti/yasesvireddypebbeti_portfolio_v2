"use client";

import { useState } from "react";

const projects = [
  {
    title: "Multi-Tenant Conference Platform",
    description:
      "Built a scalable multi-tenant web platform with dynamic subdomain routing and tenant-specific content rendering using a unified codebase.",
    tags: ["Next.js", "Node.js", "MongoDB", "NGINX", "PM2"],
    github: "https://github.com/Yasesvi-Reddy-Pebbeti/multi-tenant-conf-app-js",
    demo: "https://multi-tenant-conf-app-js.vercel.app/ai-frontiers",
  },
  {
    title: "Parallel Sorting: Implementation, Profiling & Analysis",
    description:
      "Implemented parallel sorting with OpenMP, MPI, and Pthreads, reducing execution time by ~45% through profiling, thread optimization, and memory tuning.",
    tags: ["C++", "OpenMP", "MPI", "Pthreads", "gprof"],
    github:
      "https://github.com/Yasesvi-Reddy-Pebbeti/Parallel-Sorting-Performance",
    demo: "https://github.com/Yasesvi-Reddy-Pebbeti/Parallel-Sorting-Performance",
  },
  {
    title: "Brain Tumor Classification Using CNN & Grad-CAM",
    description:
      "Developed a CNN-based medical imaging model with VGG16 transfer learning, achieving ~96% test accuracy and improving interpretability with Grad-CAM visualizations.",
    tags: ["Python", "TensorFlow", "CNN", "VGG16", "Grad-CAM"],
    github:
      "https://github.com/Yasesvi-Reddy-Pebbeti/Brain-Tumor-Classification-Using-CNN-and-GradCAM",
    demo: "https://github.com/Yasesvi-Reddy-Pebbeti/Brain-Tumor-Classification-Using-CNN-and-GradCAM",
  },
  {
    title: "Multi-Model Molecular Property Prediction",
    description:
      "Built a Graph Neural Network pipeline to predict molecular properties from structured chemical data, improving robustness across molecular datasets.",
    tags: ["Python", "GNN", "PyTorch", "Graph ML"],
    github:
      "https://github.com/Yasesvi-Reddy-Pebbeti/Molecular_Property_Prediction_Using_GNN",
    demo: "https://github.com/Yasesvi-Reddy-Pebbeti/Molecular_Property_Prediction_Using_GNN",
  },
  {
    title: "Kernel Module for System Call Logging",
    description:
      "Developed a Linux kernel module in C to log system calls and monitor process activity in real time, improving system monitoring efficiency.",
    tags: ["C", "Linux", "Kernel", "nproc"],
    github:
      "https://github.com/Yasesvi-Reddy-Pebbeti/Kernel-Module-for-System-Call-Logging",
    demo: "https://github.com/Yasesvi-Reddy-Pebbeti/Kernel-Module-for-System-Call-Logging",
  },
  {
    title: "Blockchain-Based Product Authentication",
    description:
      "Built a blockchain-backed verification system for counterfeit detection using digital signatures and QR-based authentication, achieving ~98% detection accuracy.",
    tags: ["Python", "Blockchain", "Security", "ML"],
    github:
      "https://github.com/Yasesvi-Reddy-Pebbeti/Authentication-of-Product-Counterfeits-Elimination-Using-Blockchain",
    demo: "https://github.com/Yasesvi-Reddy-Pebbeti/Authentication-of-Product-Counterfeits-Elimination-Using-Blockchain",
  },
  {
    title: "Multi-Model Early Disease Detection & Risk Classification",
    description:
      "Developed a unified ML pipeline to predict risk across Heart Disease, Diabetes, and COVID-19 ICU admission using probability-based and interpretable outputs.",
    tags: ["Python", "Machine Learning", "Healthcare", "Data Science"],
    github:
      "https://github.com/Yasesvi-Reddy-Pebbeti/early_disease_detection_using_ml",
    demo: "https://github.com/Yasesvi-Reddy-Pebbeti/early_disease_detection_using_ml",
  },
  {
    title: "Rotation Equivariance in CNN Using the D4 Group",
    description:
      "Implemented a D4-equivariant CNN for satellite image classification, improving consistency across rotated inputs and outperforming a baseline CNN.",
    tags: ["Python", "Deep Learning", "e2cnn", "Computer Vision"],
    github:
      "https://github.com/Yasesvi-Reddy-Pebbeti/Rotation-Equivariance-in-CNN-Using-the-D4-Group",
    demo: "https://github.com/Yasesvi-Reddy-Pebbeti/Rotation-Equivariance-in-CNN-Using-the-D4-Group",
  },
  {
    title: "Software Defects Classification",
    description:
      "Built an ML-based defect classification system to improve software bug triaging, increasing classification accuracy by ~18% through feature engineering and model tuning.",
    tags: ["Python", "Machine Learning", "EDA"],
    github:
      "https://github.com/Yasesvi-Reddy-Pebbeti/Software-Defects-Classification",
    demo: "https://github.com/Yasesvi-Reddy-Pebbeti/Software-Defects-Classification",
  },
  {
    title: "Plant Disease Identification & Pesticide Recommendation",
    description:
      "Developed a CNN-based system for plant disease detection and pesticide recommendation, achieving ~92% classification accuracy in an agriculture-focused web workflow.",
    tags: ["Python", "CNN", "Agritech", "Web App"],
    github:
      "https://github.com/Yasesvi-Reddy-Pebbeti/Plant-Disease-Identification-and-Pestiside-Recmmendation-Using-CNN",
    demo: "https://github.com/Yasesvi-Reddy-Pebbeti/Plant-Disease-Identification-and-Pestiside-Recmmendation-Using-CNN",
  },
  {
    title: "Content-Based Movie Recommendation System",
    description:
      "Built a recommendation engine using content-based filtering on genre and metadata features, improving recommendation relevance by ~20%.",
    tags: ["Python", "Recommendation System", "Machine Learning"],
    github:
      "https://github.com/Yasesvi-Reddy-Pebbeti/Content-Based-Movie-Recomendation-System",
    demo: "https://github.com/Yasesvi-Reddy-Pebbeti/Content-Based-Movie-Recomendation-System",
  },
];

export default function ProjectsPreview() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400/80">
        Projects
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Featured work and technical projects
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((proj, i) => (
          <div
            key={i}
            className="group rounded-3xl border border-white/10 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <h3 className="text-lg font-semibold text-white">{proj.title}</h3>

            <p className="mt-3 text-sm leading-6 text-zinc-300">
              {proj.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {proj.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-indigo-400/15 bg-indigo-400/10 px-3 py-1 text-xs text-indigo-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4 text-sm">
              <a
                href={proj.github}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-400 transition hover:text-indigo-200 hover:underline"
              >
                GitHub
              </a>
              <a
                href={proj.demo}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-300 transition hover:text-white hover:underline"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>

      {projects.length > 6 && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-indigo-400/40 hover:bg-white/5"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
}
