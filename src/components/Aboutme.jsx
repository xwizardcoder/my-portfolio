
import React from 'react'

const Aboutme = () => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Next.js',
    'Redux',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'REST APIs',
    'Axios',
    'Firebase',
    'Socket.IO',
    'Git',
    'GitHub',
    'Java',
    'Data Structures & Algorithms',
  ]

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050807] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-green-500/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 font-mono text-xs tracking-[4px] text-green-400 sm:text-sm">
            &lt; ABOUT_ME /&gt;
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            A little about <span className="text-green-400">me.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            I'm Saurabh Vishwakarma, a frontend developer and MCA
            graduate with a BCA background. I enjoy building modern,
            responsive, and user-friendly web applications using React
            and related technologies.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-green-500/20 bg-[#090e0b] p-6 transition duration-300 hover:border-green-400/40 sm:p-8">
            <div className="mb-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-green-500/30 bg-green-500/10 font-mono text-lg text-green-400">
                01
              </div>

              <h3 className="text-xl font-semibold">Education</h3>

              <p className="mt-1 text-xs text-gray-500">
                Academic Background
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-white">
                  Master of Computer Applications
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  MCA graduate with a background in computer
                  applications and software development.
                </p>
              </div>

              <div className="h-px w-full bg-green-500/20" />

              <div>
                <h4 className="font-medium text-white">
                  Bachelor of Computer Applications
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  BCA graduate with foundational knowledge of
                  programming and computer science.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-green-500/20 bg-[#090e0b] p-6 transition duration-300 hover:border-green-400/40 sm:p-8">
            <div className="mb-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-green-500/30 bg-green-500/10 font-mono text-lg text-green-400">
                02
              </div>

              <h3 className="text-xl font-semibold">Experience</h3>

              <p className="mt-1 text-xs text-gray-500">
                Professional Journey
              </p>
            </div>

            <div>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-green-500/30 bg-green-500/5 font-mono text-2xl font-bold text-green-400">
                P
              </div>

              <h4 className="text-lg font-semibold">
                Frontend Developer Intern
              </h4>

              <p className="mt-2 font-mono text-sm text-green-400">
                Prodesk IT
              </p>

              <span className="mt-3 inline-block rounded-full border border-green-500/20 bg-green-500/5 px-3 py-1 font-mono text-xs text-green-400">
                6 Months
              </span>

              <p className="mt-5 text-sm leading-7 text-gray-400">
                Focused on frontend development using React.js and
                modern web technologies, building responsive
                interfaces, reusable components, and interactive
                web applications.
              </p>
            </div>
          </article>
        </div>

        <article className="mt-6 rounded-2xl border border-green-500/20 bg-[#090e0b] p-6 transition duration-300 hover:border-green-400/40 sm:p-8">
          <div className="mb-7">
            <p className="font-mono text-xs tracking-[3px] text-green-400">
              03 / TECHNICAL EXPERTISE
            </p>

            <h3 className="mt-3 text-xl font-semibold sm:text-2xl">
              Skills & Technologies
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
              Technologies and tools I use to develop responsive web
              applications and strengthen my programming skills.
            </p>
          </div>

          <div className="flex flex-wrap justify-start gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-green-500/15 bg-green-500/[0.04] px-3.5 py-2.5 font-mono text-xs text-gray-300 transition duration-200 hover:border-green-400/50 hover:bg-green-500/10 hover:text-green-400 sm:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Aboutme
