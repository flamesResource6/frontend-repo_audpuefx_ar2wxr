import { motion } from 'framer-motion'

const projects = [
  { title: 'Neon Vision', tag: 'Computer Vision', img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Holo Chat', tag: 'NLP', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Synth Space', tag: 'WebGL', img: 'https://images.unsplash.com/photo-1520316587275-5ddc9e71d29f?q=80&w=1200&auto=format&fit=crop' },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-[#0b0f17] text-slate-200 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_30%,rgba(139,92,246,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h3 className="text-3xl font-semibold">Projects</h3>
          <p className="mt-2 text-slate-300/80">A rotating gallery of selected work</p>
        </div>

        <div className="relative">
          <motion.div
            initial={{ rotateY: 30 }}
            whileInView={{ rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 [perspective:1200px]"
          >
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                whileHover={{ y: -6, rotateY: -6 }}
                className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_12px_40px_-20px_rgba(0,0,0,0.6)]"
              >
                <div className="aspect-[4/3]">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover opacity-90" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-xs uppercase tracking-widest text-cyan-300/80">{p.tag}</p>
                  <h4 className="text-xl font-semibold">{p.title}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
