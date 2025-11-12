import { motion } from 'framer-motion'
import { Cpu, Code2, Bot, Sparkles } from 'lucide-react'

const skills = [
  { name: 'AI/ML', icon: Bot, level: 90 },
  { name: 'Frontend', icon: Code2, level: 88 },
  { name: 'Systems', icon: Cpu, level: 82 },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0b0f17] text-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_10%_10%,rgba(0,167,255,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_90%_20%,rgba(168,85,247,0.10),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-[0_0_1px_1px_rgba(255,255,255,0.02)_inset,0_10px_40px_-10px_rgba(0,0,0,0.6)]">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-300/20">
                <Sparkles className="text-cyan-300" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">About Me</h3>
                <p className="mt-2 text-slate-300/80 leading-relaxed">
                  I design and build intelligent products that feel magical. My work blends AI systems, 3D interaction, and visual design to create meaningful, future-forward experiences.
                </p>
              </div>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              {skills.map(({ name, icon: Icon, level }) => (
                <div key={name} className="text-center">
                  <div className="relative mx-auto h-24 w-24">
                    <svg viewBox="0 0 36 36" className="mx-auto h-24 w-24 rotate-[-90deg]">
                      <path d="M18 2a16 16 0 1 1 0 32 16 16 0 0 1 0-32" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                      <motion.path
                        d="M18 2a16 16 0 1 1 0 32 16 16 0 0 1 0-32"
                        fill="none"
                        stroke="url(#grad)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: level / 100 }}
                        transition={{ duration: 1.2 }}
                      />
                      <defs>
                        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#22d3ee" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 grid place-items-center">
                      <Icon className="text-cyan-300" />
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-slate-300/90">{name}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-6">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-white/5 to-white/[0.03] border border-white/10 backdrop-blur-xl">
              <h4 className="text-lg font-semibold">What I Do</h4>
              <ul className="mt-3 space-y-2 text-slate-300/80">
                <li>• AI product engineering and model integration</li>
                <li>• Real-time 3D and motion systems for the web</li>
                <li>• Design systems with futuristic aesthetics</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6 bg-gradient-to-br from-white/5 to-white/[0.03] border border-white/10 backdrop-blur-xl">
              <h4 className="text-lg font-semibold">Stack</h4>
              <p className="mt-3 text-slate-300/80">TypeScript, React, Three.js, Python, FastAPI, PyTorch, Tailwind, Framer Motion</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
