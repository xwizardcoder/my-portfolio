
import React from 'react'

const Resume = () => {
  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-[#050807] px-5 py-20 text-white sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="rounded-2xl border border-green-500/20 bg-[#090e0b] p-7 sm:p-10 md:p-14">
          <div className="mb-8 flex items-center justify-between border-b border-green-500/10 pb-4">
            <p className="font-mono text-xs tracking-widest text-green-400">
              &lt; RESUME /&gt;
            </p>

            <p className="font-mono text-xs text-gray-500">
              PDF_DOCUMENT
            </p>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-3 font-mono text-sm text-green-400">
                root@saurabh:~$ cat resume.pdf
              </p>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Let's build something
                <span className="block text-green-400">great together.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                I'm a frontend developer with six months of internship
                experience, focused on building responsive, interactive
                web applications using React.js and modern web technologies.
                Download my resume to explore my skills, projects, and experience.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="Saurabh_vishwakarma_SE.pdf"
                  download="Saurabh_vishwakarma_SE"
                  className="group inline-flex items-center gap-3 rounded-lg bg-green-400 px-6 py-3.5 font-mono text-sm font-bold text-black transition-all duration-300 hover:bg-green-300 hover:shadow-[0_0_25px_rgba(34,197,94,0.2)]"
                >
                  Download Resume
                  <span className="text-lg transition-transform group-hover:translate-y-1">
                    ↓
                  </span>
                </a>

                <a
                  href="tel:+918853349948"
                  className="inline-flex items-center gap-2 rounded-lg border border-green-500/30 px-6 py-3.5 font-mono text-sm text-green-400 transition-all duration-300 hover:bg-green-500/10"
                >
                  Contact Me
                  <span>↗</span>
                </a>
              </div>
            </div>

           
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-green-500/10 pt-5 font-mono text-xs text-gray-500">
            <p>
              <span className="text-green-400">$</span> status: ready_to_download
            </p>

            <p className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              SAURABH_VISHWAKARMA.pdf
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume