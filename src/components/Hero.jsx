import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] pt-24 overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-blue-200 text-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Next‑gen education marketplace
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
            Learn with immersive videos. Shop premium study materials.
          </h1>
          <p className="mt-4 text-blue-200/90 max-w-xl">
            Courses with recorded lessons, modern modular curriculum, and a curated store for educational materials — all in one platform.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#courses" className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors">
              Explore Courses
            </a>
            <a href="#products" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 transition-colors">
              Browse Materials
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5"
        >
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="grid grid-cols-2 gap-3 text-sm text-blue-100">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <p className="text-2xl font-semibold text-white">120+</p>
                <p>Video lessons</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <p className="text-2xl font-semibold text-white">4.8/5</p>
                <p>Avg. ratings</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <p className="text-2xl font-semibold text-white">15K</p>
                <p>Learners</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <p className="text-2xl font-semibold text-white">Top</p>
                <p>Educators</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
