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
      "Yasesvi demonstrated strong leadership as President of the Orator’s Club, successfully planning and executing multiple large-scale events each year.",
    verified: true,
    pdf: "/recommendations/MOC.pdf",
    linkedin: "",
  },
  {
    name: "Dr. Gunda Shyama Chandra Prasad",
    role: "Head of Department (IT), Matrusri Engineering College",
    quote:
      "Yasesvi served as Head Student Coordinator for IEI, leading technical events, workshops, and seminars with full ownership.",
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
      className="scroll-mt-28 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400/80">
        Achievements
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Patents, publications, certifications, and endorsements
      </h2>

      <div className="mt-10 space-y-6">
        {/* PATENTS */}
        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
          <h3 className="text-lg font-semibold text-white">Patents</h3>

          {achievements.patents.map((item, i) => (
            <div key={i} className="mt-4 text-sm text-zinc-300 space-y-1">
              <p className="font-medium text-white">{item.title}</p>
              <p>{item.authors}</p>
              <p className="text-indigo-300">
                {item.source} • {item.date}
              </p>

              <p className="text-xs text-zinc-400">
                Application No:{" "}
                <span className="text-indigo-300 font-medium">
                  {item.applicationNo}
                </span>
              </p>
            </div>
          ))}
        </div>

        {/* PUBLICATIONS */}
        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
          <h3 className="text-lg font-semibold text-white">Publications</h3>

          {achievements.publications.map((item, i) => (
            <div key={i} className="mt-4 text-sm text-zinc-300 space-y-1">
              <p className="font-medium text-white">{item.title}</p>
              <p>{item.authors}</p>
              <p className="text-indigo-300">
                {item.source} • {item.date}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-400 text-xs hover:underline"
              >
                View Paper
              </a>
            </div>
          ))}
        </div>

        {/* CERTIFICATIONS */}
        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
          <h3 className="text-lg font-semibold text-white">Certifications</h3>

          <div className="mt-4 space-y-3 text-sm text-zinc-300">
            {achievements.certifications.map((item, i) => (
              <div key={i}>
                <p className="font-medium text-white">{item.title}</p>
                <p className="text-indigo-300">{item.issuer}</p>

                <p className="text-xs text-zinc-400">
                  {item.date}
                  {item.credentialId && (
                    <>
                      {" • ID: "}
                      <span className="text-indigo-300 font-medium">
                        {item.credentialId}
                      </span>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RECOMMENDATIONS */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-white">
          Recommendations & Endorsements
        </h3>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {recommendations.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-zinc-900 p-6"
            >
              <p className="text-sm leading-7 text-zinc-300">“{item.quote}”</p>

              <div className="mt-5">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-zinc-400">{item.role}</p>

                <div className="mt-3 flex gap-4 text-xs">
                  {item.pdf && (
                    <a
                      href={item.pdf}
                      target="_blank"
                      className="text-indigo-400 hover:underline"
                    >
                      View Letter
                    </a>
                  )}

                  {item.linkedin && (
                    <a
                      href={item.linkedin}
                      target="_blank"
                      className="text-indigo-400 hover:underline"
                    >
                      LinkedIn
                    </a>
                  )}

                  {item.verified && (
                    <span className="text-indigo-300">Verified</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
