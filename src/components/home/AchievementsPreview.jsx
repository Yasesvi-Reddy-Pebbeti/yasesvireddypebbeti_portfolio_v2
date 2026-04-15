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
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400/80">
        Achievements
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Patents, publications, certifications, and endorsements
      </h2>

      {/* KEEP EVERYTHING ELSE SAME */}
      {/* No need to change internal UI — only scroll fix was needed */}
    </section>
  );
}
