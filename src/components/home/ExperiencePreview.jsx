const experiences = [
  {
    role: "Graduate Assistant",
    company: "SUNY Polytechnic Institute",
    period: "Sep 2024 – Present",
    logo: "/logos/experience/suny.png",
    points: [
      "Evaluated and graded academic coursework, ensuring consistency and accuracy across assessment workflows.",
      "Performed climate data analysis using Python by integrating datasets to generate actionable insights.",
      "Developed automated web scraping pipelines using BeautifulSoup to collect and structure large-scale research data.",
      "Managed and maintained research website (lhei.org), improving accessibility and organization of academic resources.",
    ],
  },
  {
    role: "Intern",
    company: "Code IT Consulting",
    period: "Aug 2025 – Oct 2025",
    logo: "/logos/experience/codeit.png",
    points: [
      "Developed a multi-tenant web platform using Next.js, Node.js, and MongoDB to support 60+ client websites from a unified codebase.",
      "Implemented subdomain routing and managed CI/CD workflows (GitHub Actions, PM2) to enable scalable zero-downtime deployments.",
      "Collaborated in Agile development cycles to improve release efficiency by ~20%.",
    ],
  },
  {
    role: "Intern",
    company: "Indian National Center for Ocean Information Services",
    period: "May 2023 – Jun 2023",
    logo: "/logos/experience/incois.png",
    points: [
      "Processed and analyzed oceanographic and geospatial data using Python and QGIS for marine and climate modeling.",
      "Applied statistical and machine learning techniques to optimize workflows, improving processing efficiency by ~20%.",
      "Extracted insights from remote sensing data and generated visualizations for research-driven decision-making.",
    ],
  },
];

export default function ExperiencePreview() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400/80">
        Experience
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Professional experience
      </h2>

      <div className="mt-10 space-y-6">
        {experiences.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-3xl border border-white/10 bg-zinc-900/80 p-6 transition hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/10"
          >
            {/* Indigo accent line */}
            <div className="absolute left-0 top-0 h-full w-1 rounded-l-3xl bg-indigo-400/80 opacity-0 transition group-hover:opacity-100" />

            <div className="flex items-start gap-5">
              {/* Logo */}
              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-white p-3 ring-1 ring-indigo-400/10 transition-all duration-300 group-hover:ring-indigo-400/40 group-hover:scale-105">
                <img
                  src={item.logo}
                  alt={item.company}
                  className="h-20 w-20 object-contain"
                />
              </div>

              <div className="flex-1">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm text-indigo-300">
                      {item.company}
                    </p>
                  </div>

                  <span className="inline-flex w-fit rounded-full border border-indigo-400/20 px-3 py-1 text-xs font-medium text-indigo-300">
                    {item.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-300">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400/70" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
