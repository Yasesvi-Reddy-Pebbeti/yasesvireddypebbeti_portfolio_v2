"use client";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        {/* LEFT */}
        <div className="lg:col-span-7">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400/80">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Building software that is scalable, practical, and user-focused.
          </h2>

          <p className="mt-6 text-base leading-7 text-zinc-300">
            I am a Computer Science graduate student focused on software
            engineering, full-stack development, and AI/ML-driven systems.
          </p>

          <p className="mt-4 text-base leading-7 text-zinc-300">
            My work includes multi-tenant web platforms, machine learning
            projects, and parallel computing systems.
          </p>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
            <h3 className="text-lg font-semibold text-white">Quick Snapshot</h3>

            <div className="mt-5 space-y-4 text-sm text-zinc-300">
              <div>
                <p className="text-zinc-500">Focus Areas</p>
                <p className="mt-1">Software Engineering, Full-Stack, AI/ML</p>
              </div>

              <div>
                <p className="text-zinc-500">Core Stack</p>
                <p className="mt-1">
                  React, Next.js, Node.js, JavaScript, Python
                </p>
              </div>

              <div>
                <p className="text-zinc-500">Currently Interested In</p>
                <p className="mt-1">Frontend engineering, backend systems</p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold !text-black transition hover:bg-zinc-200"
              >
                Get in Touch
              </a>

              <a
                href="/YasesviReddyPebbeti_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-indigo-300/40 hover:bg-white/5"
              >
                View Resume
              </a>

              {/* ICON BUTTONS */}
              <div className="flex gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/Yasesvi-Reddy-Pebbeti"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/15 transition-all duration-300 hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/20"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-1">
                    <img
                      src="/icons/github.png"
                      alt="GitHub"
                      className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded-md border border-white/10 bg-zinc-800 px-2 py-1 text-xs text-zinc-200 opacity-0 shadow-lg transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100">
                    GitHub
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/yasesvireddypebbeti/"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/15 transition-all duration-300 hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/20"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-1">
                    <img
                      src="/icons/linkedin.png"
                      alt="LinkedIn"
                      className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded-md border border-white/10 bg-zinc-800 px-2 py-1 text-xs text-zinc-200 opacity-0 shadow-lg transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
