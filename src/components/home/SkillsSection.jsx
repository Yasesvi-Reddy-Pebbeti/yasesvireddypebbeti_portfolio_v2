const skills = [
  {
    category: "Languages",
    icon: "/logos/categories/languages.svg",
    items: ["Python", "JavaScript", "C++"],
  },
  {
    category: "Frameworks",
    icon: "/logos/categories/frameworks.svg",
    items: ["React", "Next.js", "Node.js", "Express.js", "Tailwind"],
  },
  {
    category: "Databases",
    icon: "/logos/categories/databases.svg",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools",
    icon: "/logos/categories/tools.svg",
    items: ["Git", "GitHub", "Docker", "Postman"],
  },
  {
    category: "Data / ML",
    icon: "/logos/categories/ml.svg",
    items: ["TensorFlow", "NumPy", "Pandas", "CNN", "Grad-CAM"],
  },
  {
    category: "Concepts",
    icon: "/logos/categories/concepts.svg",
    items: ["DSA", "REST APIs", "OOP", "Parallel Computing"],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-28 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Section Label */}
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400/80">
        Skills
      </p>

      {/* Heading */}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Technical skills and core strengths
      </h2>

      {/* Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.category}
            className="group rounded-3xl border border-white/10 bg-zinc-900 p-6 transition-all duration-300 hover:border-indigo-400/30 hover:shadow-lg hover:shadow-indigo-500/10"
          >
            {/* Header */}
            <div className="flex items-center gap-4">
              <img
                src={group.icon}
                alt={group.category}
                className="h-12 w-12 shrink-0 transition-transform duration-300 group-hover:scale-105"
              />

              <h3 className="text-lg font-semibold text-white">
                {group.category}
              </h3>
            </div>

            {/* Pills */}
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((skill, i) => (
                <span
                  key={i}
                  className="rounded-full border border-white/10 bg-zinc-800 px-3 py-1 text-xs text-zinc-300 transition-all duration-200 hover:border-indigo-400/40 hover:text-white hover:bg-zinc-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
