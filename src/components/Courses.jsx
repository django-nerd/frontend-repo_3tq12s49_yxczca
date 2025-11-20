import { useEffect, useState } from 'react'
import { PlayCircle } from 'lucide-react'

const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Courses() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch(`${backend}/api/courses`).then(r => r.json()).then(setCourses).catch(() => setCourses([]))
  }, [])

  return (
    <section id="courses" className="relative py-16 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-semibold text-white">Popular Courses</h2>
            <p className="text-blue-200/80 mt-1">Recorded video lessons, downloadable resources, and quizzes</p>
          </div>
          <a href="/courses" className="text-blue-300 hover:text-white">View all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.length === 0 && [1,2,3].map(i => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4 animate-pulse h-64"/>
          ))}

          {courses.map(c => (
            <div key={c.id} className="group rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <div className="relative aspect-video overflow-hidden">
                {c.thumbnail_url ? (
                  <img src={c.thumbnail_url} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                ) : (
                  <div className="w-full h-full grid place-items-center bg-gradient-to-br from-blue-800/40 to-violet-800/40">
                    <PlayCircle className="text-white/70" size={48} />
                  </div>
                )}
                {c.preview_video_url && (
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center">
                    <a href={c.preview_video_url} target="_blank" className="px-3 py-2 text-sm rounded-md bg-white/90 text-slate-900 font-medium">Watch preview</a>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold">{c.title}</h3>
                <p className="text-blue-200/80 text-sm line-clamp-2 mt-1">{c.description}</p>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="text-white font-semibold">${c.price.toFixed(2)}</span>
                  <a href="#" className="text-blue-300 hover:text-white">View details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
