const achievements = {
  patents: [
    {
      title:
        "Portable Solar-Powered Autonomous Soil Moisture Detection and Alert System",
      authors: "Yasesvi Reddy Pebbeti, et al.",
      source: "India Patent (Published)",
      date: "2026",
      applicationNo: "202641023372",
      type: "Published Patent",
    },
  ],
  publications: [
    {
      title:
        "Plant Disease Identification and Pesticide Recommendation Using CNN",
      authors: "Yasesvi Reddy Pebbeti, et al.",
      source: "IJIRCCE",
      date: "Jun 2024",
      link: "https://ijircce.com/admin/main/storage/app/pdf/fGL5m6R2DNR1KNtQXtOMoDHYgRVmmjgHQXTa2g1p.pdf",
      type: "Journal Publication",
    },
  ],
  certifications: [
    {
      title: "Cryptography I",
      issuer: "Stanford University",
      date: "Sep 2025",
      credentialId: "1VOJAP8U5D1J",
    },
    {
      title: "ARM Cortex-M3 Application",
      issuer: "Matrusri Engineering College",
      date: "Aug 2023",
      credentialId: "",
    },
    {
      title: "Android Application Development",
      issuer: "Matrusri Engineering College",
      date: "Nov 2022",
      credentialId: "",
    },
    {
      title: "Electronics & Robotics",
      issuer: "B M Birla Science Centre",
      date: "May 2016",
      credentialId: "",
    },
  ],
};

const recommendations = [
  {
    name: "Dr. B. Chandana",
    role: "Assistant Professor, Matrusri Engineering College",
    quote:
      "Yasesvi demonstrated strong leadership as President of the Orator’s Club, successfully planning and executing multiple large-scale events each year. His ability to coordinate teams, drive execution, and maintain high standards consistently stood out.",
    verified: true,
    pdf: "/recommendations/MOC.pdf",
    linkedin: "",
  },
  {
    name: "Dr. Gunda Shyama Chandra Prasad",
    role: "Head of Department (IT), Matrusri Engineering College",
    quote:
      "Yasesvi served as Head Student Coordinator for IEI, leading technical events, workshops, and seminars with full ownership. He consistently showed discipline, responsibility, and the ability to execute complex initiatives effectively.",
    verified: true,
    pdf: "/recommendations/I.E.I.pdf",
    linkedin:
      "https://www.linkedin.com/in/dr-gunda-shyama-chandra-prasad-55ba44101/",
  },
];

export default function AchievementsPreview() {
  return (
    <section
      id="achievements"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400/80">
        Achievements
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Patents, publications, certifications, and endorsements
      </h2>

      <div className="mt-10 space-y-6">
        {/* Patents */}
        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6 transition-all duration-300 hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/10">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
            <span className="h-2 w-2 rounded-full bg-indigo-400" />
            Patents
          </h3>

          <div className="mt-5 space-y-5">
            {achievements.patents.map((item, i) => (
              <div key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400/70" />
                <div>
                  <span className="inline-flex items-center rounded-md border border-indigo-400/20 bg-indigo-400/10 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-indigo-300">
                    {item.type}
                  </span>

                  <p className="mt-3 text-sm font-medium text-white">
                    {item.title}
                  </p>

                  <p className="mt-1 text-sm text-zinc-300">
                    {item.authors}.{" "}
                    <span className="text-indigo-300">{item.source}</span>,{" "}
                    {item.date}.
                  </p>

                  <p className="mt-2 inline-flex items-center rounded-md border border-indigo-400/20 bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-300">
                    Application No: {item.applicationNo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6 transition-all duration-300 hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/10">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
            <span className="h-2 w-2 rounded-full bg-indigo-400" />
            Publications
          </h3>

          <div className="mt-5 space-y-5">
            {achievements.publications.map((item, i) => (
              <div key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400/70" />
                <div>
                  <span className="inline-flex items-center rounded-md border border-indigo-400/20 bg-indigo-400/10 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-indigo-300">
                    {item.type}
                  </span>

                  <p className="mt-3 text-sm font-medium text-white">
                    {item.title}
                  </p>

                  <p className="mt-1 text-sm text-zinc-300">
                    {item.authors}.{" "}
                    <span className="text-indigo-300">{item.source}</span>,{" "}
                    {item.date}.
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-lg border border-indigo-400/30 bg-indigo-400/10 px-3 py-1.5 text-xs font-medium text-indigo-300 transition hover:bg-indigo-400/20 hover:text-indigo-200"
                  >
                    View Paper
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6 transition-all duration-300 hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/10">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
            <span className="h-2 w-2 rounded-full bg-indigo-400" />
            Certifications
          </h3>

          <div className="mt-5 space-y-5">
            {achievements.certifications.map((item, i) => (
              <div key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400/70" />
                <div>
                  <p className="text-sm font-medium text-white">{item.title}</p>

                  <p className="mt-1 text-sm text-zinc-300">
                    <span className="text-indigo-300">{item.issuer}</span> ·{" "}
                    {item.date}
                  </p>

                  {item.credentialId && (
                    <p className="mt-2 inline-flex items-center rounded-md border border-indigo-400/20 bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-300">
                      Credential ID: {item.credentialId}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommendations & Endorsements */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-white">
          Recommendations & Endorsements
        </h3>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {recommendations.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-zinc-900 p-6 transition-all duration-300 hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              {item.verified && (
                <span className="inline-flex items-center rounded-md border border-indigo-400/20 bg-indigo-400/10 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-indigo-300">
                  Verified by Institution
                </span>
              )}

              <p className="mt-4 text-sm leading-7 text-zinc-300">
                “{item.quote}”
              </p>

              <div className="mt-5">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-zinc-400">{item.role}</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-indigo-400/30 bg-indigo-400/10 px-3 py-1.5 text-xs font-medium text-indigo-300 transition hover:bg-indigo-400/20 hover:text-indigo-200"
                >
                  View Letter
                </a>

                {item.linkedin && (
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-1.5 text-xs font-medium text-white transition hover:border-indigo-400/40 hover:bg-white/5"
                  >
                    LinkedIn Profile
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
