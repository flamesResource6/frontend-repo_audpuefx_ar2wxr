import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#0b0f17] text-slate-200 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -right-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-semibold">Contact</h3>
          <p className="mt-2 text-slate-300/80">Let’s build something extraordinary together</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="relative rounded-2xl p-8 bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_12px_40px_-20px_rgba(0,0,0,0.6)]"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-slate-300/80">Name</label>
              <input className="mt-2 w-full rounded-xl bg-white/[0.06] border border-white/10 px-4 py-3 outline-none focus:border-cyan-300/60 focus:bg-white/[0.08] transition-all" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-slate-300/80">Email</label>
              <input type="email" className="mt-2 w-full rounded-xl bg-white/[0.06] border border-white/10 px-4 py-3 outline-none focus:border-cyan-300/60 focus:bg-white/[0.08] transition-all" placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-300/80">Message</label>
              <textarea rows={5} className="mt-2 w-full rounded-xl bg-white/[0.06] border border-white/10 px-4 py-3 outline-none focus:border-cyan-300/60 focus:bg-white/[0.08] transition-all" placeholder="Tell me about your project..." />
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="group relative inline-flex items-center gap-2 rounded-xl px-6 py-3 text-slate-900 font-semibold bg-cyan-300 hover:bg-cyan-200 transition-colors">
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
