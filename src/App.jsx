import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl px-4 py-2">
          <a href="#home" className="text-slate-200 font-semibold tracking-wide">AN</a>
          <nav className="hidden sm:flex items-center gap-6 text-slate-300/90">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-xl px-3 py-2 text-slate-900 font-semibold bg-cyan-300 hover:bg-cyan-200 transition-colors">Hire Me</a>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-[#0b0f17] text-slate-400 py-10">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Alex Nova</p>
        <p className="text-slate-500">Built with love and light</p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f17]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
