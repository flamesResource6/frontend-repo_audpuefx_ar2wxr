import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-[#0b0f17]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for mood - pointer-events-none so Spline remains interactive */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(0,152,255,0.18)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,15,23,0)_0%,#0b0f17_85%)]" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full grid grid-cols-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-sm/0"
          >
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-white/5 border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset]">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_3px_rgba(34,211,238,0.7)]" />
              <p className="text-xs tracking-widest uppercase text-cyan-200/90">Available for projects</p>
            </div>

            <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-[700] tracking-tight text-slate-100 font-orbitron">
              Alex Nova
            </h1>
            <p className="mt-3 text-xl sm:text-2xl text-slate-300/90 font-poppins">
              AI Engineer • Designer • Developer
            </p>

            <p className="mt-6 max-w-2xl text-slate-300/80 leading-relaxed">
              I craft intelligent, immersive experiences—merging machine learning, interactive 3D, and delightful interfaces.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a href="#contact" className="group relative inline-flex items-center gap-2 rounded-xl px-6 py-3 text-slate-900 font-semibold bg-cyan-300 hover:bg-cyan-200 transition-colors">
                <span className="relative z-10">Hire Me</span>
              </a>
              <a href="#projects" className="relative inline-flex items-center gap-2 rounded-xl px-6 py-3 border border-white/15 text-slate-200/90 hover:text-white hover:border-cyan-300/60 transition-colors">
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
