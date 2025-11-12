import { motion } from 'framer-motion'

const items = [
  {
    title: 'Lead AI Engineer',
    org: 'Neon Labs',
    time: '2022 — Present',
    points: ['Shipped production LLM features', 'Architected scalable inference'],
  },
  {
    title: 'Senior Frontend Engineer',
    org: 'Astra UI',
    time: '2020 — 2022',
    points: ['Built 3D interfaces', 'Led design system'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-[#0b0f17] text-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(34,211,238,0.10),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h3 className="text-3xl font-semibold">Experience & Skills</h3>
          <p className="mt-2 text-slate-300/80">A holographic-style timeline showcasing depth</p>
        </div>

        <div className="relative border-l border-white/10 pl-6 space-y-10">
          {items.map((it, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="relative">
              <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_18px_6px_rgba(34,211,238,0.5)]" />
              <div className="rounded-2xl p-6 bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_12px_40px_-20px_rgba(0,0,0,0.6)]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-semibold">{it.title}</h4>
                    <p className="text-slate-300/80">{it.org}</p>
                  </div>
                  <p className="text-sm text-cyan-300/80">{it.time}</p>
                </div>
                <ul className="mt-4 space-y-2 text-slate-300/80 list-disc list-inside">
                  {it.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
