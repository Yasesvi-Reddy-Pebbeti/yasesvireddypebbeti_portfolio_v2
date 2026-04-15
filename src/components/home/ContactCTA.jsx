export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8 sm:p-10">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Let’s connect
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-zinc-300">
          I’m actively building projects and exploring software engineering
          opportunities. Reach out for internships, full-time roles, or
          technical collaboration.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:yasesvireddypebbeti@gmail.com"
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold !text-black transition hover:bg-zinc-200"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/yasesvireddypebbeti/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-indigo-300/40 hover:bg-white/5"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
