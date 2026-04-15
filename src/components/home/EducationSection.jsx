const education = [
  {
    school: "SUNY Polytechnic Institute",
    degree: "Master of Science in Computer Science",
    duration: "2024 – 2026",
    logo: "/logos/education/suny.png",
    details: [
      "Relevant Coursework: AI, Distributed Systems, Parallel Computing",
    ],
  },
  {
    school: "Osmania University",
    degree: "Bachelor of Engineering in Information Technology",
    duration: "2020 – 2024",
    logo: "/logos/education/osmania.png",
    details: [
      "Coursework: Data Structures, Algorithms, Operating Systems, DBMS, Computer Networks",
      "Built multiple academic and team-based projects focused on software engineering and machine learning",
    ],
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Label */}
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400/80">
        Education
      </p>

      {/* Heading */}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Academic background
      </h2>

      {/* Cards */}
      <div className="mt-10 space-y-8">
        {education.map((edu, i) => (
          <div
            key={i}
            className="group relative rounded-3xl border border-white/10 bg-zinc-900 p-6 transition-all duration-300 hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/10"
          >
            {/* Indigo accent line */}
            <div className="absolute left-0 top-0 h-full w-1 rounded-l-3xl bg-indigo-400/80 opacity-0 transition group-hover:opacity-100" />

            <div className="flex items-start gap-6">
              {/* Logo */}
              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-white p-3 ring-1 ring-indigo-400/10 transition-all duration-300 group-hover:ring-indigo-400/40 group-hover:scale-105">
                <img
                  src={edu.logo}
                  alt={edu.school}
                  className="h-20 w-20 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  {/* Left */}
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {edu.school}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-indigo-300">
                      {edu.degree}
                    </p>
                  </div>

                  {/* Right (Date) */}
                  <span className="inline-flex w-fit rounded-full border border-indigo-400/20 px-3 py-1 text-xs font-medium text-indigo-300">
                    {edu.duration}
                  </span>
                </div>

                {/* Details */}
                <ul className="mt-4 space-y-2 text-xs text-zinc-400">
                  {edu.details.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400/70" />
                      <span>{item}</span>
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
