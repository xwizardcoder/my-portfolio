
import React from 'react'

const Projects = () => {
  const projects = [
    {
      id: '01',
      name: 'XLR8 Chat',
      category: 'REAL-TIME COMMUNICATION',
      description:
        'A real-time chat application with instant messaging, client names, typing indicators, and automatic message scrolling for a smooth chatting experience.',
      technologies: ['React', 'Node.js', 'Express', 'Socket.IO', 'Tailwind CSS'],
      github: 'https://github.com/xwizardcoder/XLR8',
    },
    {
      id: '02',
      name: 'Sigma Store',
      category: 'E-COMMERCE PLATFORM',
      description:
        'A modern e-commerce application featuring product listings, responsive product cards, and a clean shopping interface built for a smooth browsing experience.',
      technologies: ['React', 'JavaScript', 'Express', 'Axios', 'Tailwind CSS'],
      github: 'https://github.com/xwizardcoder/SIGMA-STORE',
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
  ]

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050807] px-5 py-24 text-white sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute left-0 top-40 h-72 w-72 rounded-full bg-green-500/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-0 h-72 w-72 rounded-full bg-green-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 font-mono text-sm tracking-[4px] text-green-400">
            &lt; PROJECTS /&gt;
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Things I've <span className="text-green-400">Built</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A selection of projects showcasing my work in frontend development,
            real-time communication, e-commerce, and AI-powered learning.
          </p>

          <div className="mt-6 font-mono text-xs text-green-500/70">
            saurabh@portfolio:~$ ls ./projects
            <span className="ml-1 animate-pulse">_</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-green-500/20 bg-[#090e0b] transition-all duration-300 hover:-translate-y-1 hover:border-green-400/50 hover:shadow-[0_15px_40px_rgba(34,197,94,0.08)]"
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

              <div className="flex flex-1 flex-col p-6">
                <p className="mb-3 font-mono text-[10px] tracking-[2px] text-green-400/70">
                  {project.category}
                </p>

                <h3 className="text-2xl font-bold transition-colors group-hover:text-green-400">
                  {project.name}
                  <span className="ml-2 font-mono text-sm font-normal text-green-500/40">
                    .exe
                  </span>
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="my-6 h-px bg-green-500/10" />

                <p className="mb-3 font-mono text-[10px] tracking-widest text-gray-500">
                  TECH_STACK
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-green-500/15 bg-green-500/[0.04] px-2.5 py-1.5 font-mono text-[10px] text-gray-300 transition-colors hover:border-green-400/40 hover:text-green-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 border-t border-green-500/10 pt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-green-500/30 px-4 py-2.5 font-mono text-xs text-green-400 transition hover:bg-green-500/10"
                  >
                    <span>GH</span>
                    Source Code
                    <span>↗</span>
                  </a>
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