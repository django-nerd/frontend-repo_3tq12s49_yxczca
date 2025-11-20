import { useState } from 'react'
import { Menu, X, GraduationCap, ShoppingBag, BookOpen, Info, Phone, LogIn, UserPlus } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-white bg-white/10' : 'text-blue-100 hover:text-white hover:bg-white/10'}`

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 grid place-items-center shadow-lg">
              <GraduationCap className="text-white" size={20} />
            </div>
            <span className="font-semibold tracking-tight">Aveducation</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/courses" className={linkClass}><BookOpen size={16} className="inline mr-2"/>Courses</NavLink>
            <NavLink to="/products" className={linkClass}><ShoppingBag size={16} className="inline mr-2"/>Materials</NavLink>
            <NavLink to="/about" className={linkClass}><Info size={16} className="inline mr-2"/>About</NavLink>
            <NavLink to="/contact" className={linkClass}><Phone size={16} className="inline mr-2"/>Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/login" className={linkClass}><LogIn size={16} className="inline mr-2"/>Login</NavLink>
            <NavLink to="/register" className={linkClass}><UserPlus size={16} className="inline mr-2"/>Register</NavLink>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="px-4 py-3 space-y-1">
            <NavLink onClick={() => setOpen(false)} to="/courses" className={linkClass}>Courses</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/products" className={linkClass}>Materials</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className={linkClass}>About</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClass}>Contact</NavLink>
            <div className="h-px bg-white/10 my-2"/>
            <NavLink onClick={() => setOpen(false)} to="/login" className={linkClass}>Login</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/register" className={linkClass}>Register</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
