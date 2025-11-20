import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

function CourseCard({ course }) {
  return (
    <div className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition">
      <div className="aspect-video bg-gradient-to-br from-blue-500/30 to-fuchsia-500/30 grid place-items-center">
        {course.thumbnail_url ? (
          <img src={course.thumbnail_url} alt={course.title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-white/70">Video Course</span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold">{course.title}</h3>
        <p className="text-blue-200/80 text-sm mt-1 line-clamp-2">{course.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-white font-bold">${'{'}course.price{'}'}</span>
          <button className="px-3 py-1.5 rounded-lg bg-blue-500 text-white text-sm hover:bg-blue-600">Buy</button>
        </div>
      </div>
    </div>
  );
}

export default function CourseGrid() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/courses`).then(r => r.json()).then(setCourses).finally(() => setLoading(false));
  }, []);

  return (
    <section id="courses" className="relative py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Popular Courses</h2>
            <p className="text-blue-200/80">Recorded, self‑paced lessons</p>
          </div>
        </div>
        {loading ? (
          <p className="text-blue-200">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map(c => <CourseCard key={c.id} course={c} />)}
          </div>
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(59,130,246,0.15),transparent)]" />
    </section>
  );
}
