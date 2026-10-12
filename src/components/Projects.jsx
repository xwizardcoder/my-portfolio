import React from 'react'

const projects = [
  {
    id: '01',
    name: 'Movies Flix',
    category: 'MOVIE DISCOVERY PLATFORM',
    description:
      'A Netflix-inspired movie website built with Next.js that fetches movie data from an external API, displays movie information, and provides individual movie details through dynamic routing.',
    technologies: ['Next.js', 'React', 'REST API', 'Tailwind CSS'],
    github: 'https://github.com/xwizardcoder/movies-flix-nextjs',
    live: 'https://movies-flix-nextjs-mocha.vercel.app',
  },
  {
    id: '02',
    name: 'XLR8 Chat',
    category: 'REAL-TIME COMMUNICATION',
    description:
      'A real-time chat application with instant messaging, client names, typing indicators, and automatic message scrolling for a smooth chatting experience.',
    technologies: ['React', 'Node.js', 'Express', 'Socket.IO', 'Tailwind CSS'],
    github: 'https://github.com/xwizardcoder/XLR8',
  },
  {
    id: '03',
    name: 'EduCore AI',
    category: 'AI-POWERED LEARNING PLATFORM',
    description:
      'An online learning platform with authentication, personalized user data, interactive dashboards, charts, and AI-powered quiz generation to support learning.',
    technologies: ['Next.js', 'React', 'Firebase', 'Tailwind CSS', 'Gemini AI'],
    github: 'https://github.com/xwizardcoder/Educore-new',
  },
  {
    id: '04',
    name: 'Sigma Store',
    category: 'E-COMMERCE PLATFORM',
    description:
      'A modern e-commerce application featuring dynamic product listings, responsive product cards, API integration, and a clean shopping interface for a smooth browsing experience.',
    technologies: ['React', 'JavaScript', 'Express', 'Axios', 'Tailwind CSS'],
    github: 'https://github.com/xwizardcoder/SIGMA-STORE',
  },
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050807] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="pointer-events-none absolute left-0 top-40 h-72 w-72 rounded-full bg-green-500/5 blur-3xl" />

      <div className="pointer-events-none absolute bottom-20 right-0 h-72 w-72 rounded-full bg-green-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-14">
          <p className="mb-4 font-mono text-xs tracking-[4px] text-green-400 sm:text-sm">
            &lt; PROJECTS /&gt;
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Things I've <span className="text-green-400">Built</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A collection of projects showcasing my work in frontend development,
            API integration, real-time communication, e-commerce, and AI-powered
            learning.
          </p>

          <div className="mt-6 font-mono text-xs text-green-500/70">
            saurabh@portfolio:~$ ls ./projects
            <span className="ml-1 animate-pulse">_</span>
          </div>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-xl border border-green-500/20 bg-[#090e0b] transition-all duration-300 hover:-translate-y-1 hover:border-green-400/50 hover:shadow-[0_15px_40px_rgba(34,197,94,0.08)]"
            >
              <div className="absolute left-0 top-0 h-px w-0 bg-green-400 transition-all duration-500 group-hover:w-full" />

              <div className="flex items-center justify-between border-b border-green-500/10 px-5 py-4">
                <span className="font-mono text-xs text-green-500/60">
                  PROJECT_{project.id}
                </span>

                <span className="flex items-center gap-2 font-mono text-[10px] text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  AVAILABLE
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="mb-3 min-h-4 font-mono text-[10px] tracking-[2px] text-green-400/70">
                  {project.category}
                </p>

                <h3 className="text-xl font-bold transition-colors group-hover:text-green-400 sm:text-2xl">
                  {project.name}
                  <span className="ml-2 font-mono text-sm font-normal text-green-500/40">
                    .exe
                  </span>
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="my-6 h-px bg-green-500/10" />

                <div className="min-h-[76px]">
                  <p className="mb-3 font-mono text-[10px] tracking-widest text-gray-500">
                    TECH_STACK
                  </p>

                  <div className="flex flex-wrap content-start gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-green-500/15 bg-green-500/[0.04] px-2.5 py-1.5 font-mono text-[10px] text-gray-300 transition-colors hover:border-green-400/40 hover:text-green-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap gap-3 border-t border-green-500/10 pt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-green-500/30 px-3 py-2.5 font-mono text-xs text-green-400 transition hover:bg-green-500/10 sm:px-4"
                  >
                    <span>GH</span>
                    Source Code
                    <span>↗</span>
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-green-500 px-3 py-2.5 font-mono text-xs font-semibold text-black transition hover:bg-green-400 sm:px-4"
                    >
                      Live Demo
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects