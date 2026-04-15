export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl items-center px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400/80">
          Software Engineer • Full-Stack Developer • AI/ML Enthusiast
        </p>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Building <span className="text-indigo-400/80">scalable software</span>{" "}
          and practical AI-driven solutions.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
          I’m Yasesvi Reddy Pebbeti, a Computer Science graduate student focused
          on software engineering, full-stack development, and machine learning.
          I build clean, user-centered, and production-oriented digital
          experiences.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold !text-black transition hover:bg-zinc-200"
          >
            View Projects
          </a>

          <a
            href="/YasesviReddyPebbeti_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-indigo-300/40 hover:bg-white/5"
          >
            View Resume
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-indigo-300/40 hover:bg-white/5"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
