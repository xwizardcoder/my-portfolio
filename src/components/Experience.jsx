import React from 'react'

const Experience = () => {
  const technologies = [
    'React.js',
    'Redux',
    'JavaScript',
    'Tailwind CSS',
    'Next.js',
    'Zustand',
    'Firebase',
    'Chart.js'
  ]

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050807] px-5 py-24 text-white sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-green-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="mb-4 font-mono text-sm tracking-[4px] text-green-400">
            &lt; EXPERIENCE /&gt;
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Professional <span className="text-green-400">Experience</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            My professional journey as a frontend developer, building
            responsive interfaces and working with modern web technologies.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 font-mono text-xs text-green-500/70">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            root@saurabh:~$ cat experience.log
          </div>
        </div>

        <article className="group relative overflow-hidden rounded-2xl border border-green-500/20 bg-[#090e0b] p-6 transition-all duration-300 hover:border-green-400/50 hover:shadow-[0_15px_50px_rgba(34,197,94,0.08)] sm:p-9 md:p-10">
          <div className="absolute left-0 top-0 h-px w-0 bg-green-400 transition-all duration-500 group-hover:w-full" />

          <div className="flex flex-col gap-8 md:flex-row md:items-start">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-green-500/30 bg-green-500/5 font-mono text-2xl font-bold text-green-400 transition-colors group-hover:bg-green-500/10">
              P
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="mb-2 font-mono text-xs tracking-widest text-green-400">
                    FRONTEND DEVELOPMENT
                  </p>

                  <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-green-400 sm:text-3xl">
                    Frontend Developer Intern
                  </h3>

                  <p className="mt-2 font-mono text-sm text-gray-300">
                    Prodesk IT
                  </p>
                </div>

                <span className="w-fit rounded-full border border-green-500/25 bg-green-500/5 px-4 py-2 font-mono text-xs text-green-400">
                  6 Months
                </span>
              </div>

              <div className="my-6 h-px bg-green-500/10" />

              <p className="text-sm leading-7 text-gray-400 sm:text-base">
                Completed a six-month internship focused on frontend
                development, working with React.js and modern web technologies
                to build responsive user interfaces, reusable components,
                and interactive web applications.
              </p>

              <div className="mt-7">
                <p className="mb-4 font-mono text-xs tracking-wider text-gray-500">
                  // TECHNOLOGIES_WORKED_WITH
                </p>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-green-500/15 bg-green-500/[0.04] px-3 py-2 font-mono text-xs text-gray-300 transition-colors hover:border-green-400/50 hover:text-green-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 border-t border-green-500/10 pt-6">
                <a
                  href="https://github.com/xwizardcoder"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-green-500/30 px-5 py-3 font-mono text-xs text-green-400 transition-all hover:bg-green-500/10"
                >
                  <span className="font-bold">GH</span>
                  GitHub Profile
                  <span>↗</span>
                </a>

                <a
                  href="https://linkedin.com/in/saurabh-vishwakarma-227581226/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-green-400 px-5 py-3 font-mono text-xs font-semibold text-black transition-all hover:bg-green-300"
                >
                  LinkedIn Profile
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </article>

      
      </div>
    </section>
  )
}

export default Experience