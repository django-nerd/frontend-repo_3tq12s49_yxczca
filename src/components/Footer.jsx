export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-blue-200/80">
          <div>
            <h4 className="text-white font-semibold mb-3">Aveducation</h4>
            <p>Modern learning platform with video courses and materials store.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Explore</h4>
            <ul className="space-y-2">
              <li><a href="/courses" className="hover:text-white">Courses</a></li>
              <li><a href="/products" className="hover:text-white">Materials</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Get in touch</h4>
            <p>Email: hello@aveducation.app</p>
          </div>
        </div>
        <div className="mt-8 text-xs text-blue-200/60">© {new Date().getFullYear()} Aveducation. All rights reserved.</div>
      </div>
    </footer>
  )
}
