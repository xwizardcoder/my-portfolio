
import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-green-500/20 bg-[#050807]/95 text-green-400 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/5 font-mono text-xl font-bold transition-all duration-300 group-hover:border-green-400 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.2)]">
            &gt;_
          </div>

          <div>
            <h1 className="font-mono text-lg font-bold tracking-wide text-white">
              saurabh<span className="text-green-400">.dev</span>
            </h1>
            <p className="font-mono text-[10px] tracking-[2px] text-green-500/60">
              DEVELOPER_PORTFOLIO
            </p>
          </div>
        </a>

        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href="https://github.com/xwizardcoder"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="flex h-10 items-center gap-2 rounded-md border border-green-500/20 px-3 font-mono text-xs text-gray-400 transition duration-300 hover:border-green-400/50 hover:bg-green-500/10 hover:text-green-400 sm:px-4"
          >
            <span className="font-bold">GH</span>
            <span className="hidden sm:inline">GitHub</span>
            <span>↗</span>
          </a>

          <a
            href="https://linkedin.com/in/saurabh-vishwakarma-227581226/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="flex h-10 items-center gap-2 rounded-md border border-green-500/20 px-3 font-mono text-xs text-gray-400 transition duration-300 hover:border-green-400/50 hover:bg-green-500/10 hover:text-green-400 sm:px-4"
          >
            <span className="font-bold">IN</span>
            <span className="hidden sm:inline">LinkedIn</span>
            <span>↗</span>
          </a>

          <a
            href="tel:+918853349948"
            className="group flex h-10 items-center gap-2 rounded-md border border-green-400 bg-green-400 px-4 font-mono text-xs font-bold text-black transition duration-300 hover:bg-green-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.25)] sm:px-5"
          >
            <span>Hire Me</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>
      </div>

      <div className="hidden border-t border-green-500/10 px-5 py-2 font-mono text-[11px] text-green-500/60 sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <p>
            <span className="text-green-400">root@saurabh</span>:~$ ./portfolio
            <span className="ml-1 animate-pulse">_</span>
          </p>

          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
            SYSTEM ONLINE
          </p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
