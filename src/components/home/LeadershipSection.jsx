const leadership = [
  {
    role: "President",
    organization: "SUNY Badminton Club",
    period: "Jan 2025 – Mar 2026",
    points: [
      "Led club operations, organizing weekly practice sessions, tournaments, and member engagement activities.",
      "Coordinated with university administration to strengthen club structure and expand student participation.",
    ],
  },
  {
    role: "IT Support & Crew Instructor",
    organization: "NYBPC 2026",
    period: "Apr 2026",
    points: [
      "Provided technical support and operational assistance to ensure smooth execution of event activities.",
    ],
  },
  {
    role: "IT Support & Crew Instructor",
    organization: "NYBPC 2025",
    period: "Apr 2025",
    points: [
      "Supported technical logistics and coordinated with teams to manage event workflows efficiently.",
    ],
  },
  {
    role: "President",
    organization: "Matrusri Orators Club",
    period: "Nov 2020 – Jul 2024",
    points: [
      "Led public speaking initiatives and organized events to strengthen communication and leadership skills among members.",
    ],
  },
  {
    role: "Head Student Coordinator",
    organization: "Institution of Engineering India, Department of IT",
    period: "Nov 2020 – Jul 2024",
    points: [
      "Managed student coordination and led teams in organizing technical and academic events.",
    ],
  },
  {
    role: "Cadet",
    organization: "National Cadet Corps (NCC)",
    period: "Jun 2018 – Mar 2020",
    points: [
      "Completed structured training focused on discipline, teamwork, and leadership development.",
    ],
  },
];

export default function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="scroll-mt-28 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400/80">
        Leadership & Activities
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Leadership and extracurricular involvement
      </h2>

      <div className="mt-10 space-y-6">
        {leadership.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-3xl border border-white/10 bg-zinc-900/80 p-6 transition hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/10"
          >
            {/* Indigo accent line */}
            <div className="absolute left-0 top-0 h-full w-1 rounded-l-3xl bg-indigo-400/80 opacity-0 transition group-hover:opacity-100" />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-indigo-300">
                  {item.organization}
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
        ))}
      </div>
    </section>
  );
}
