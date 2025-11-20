import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export function LoginPage(){
  const [form, setForm] = useState({ email:'', password:'' })
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Logging in...')
    try {
      const res = await fetch(`${backend}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Login failed')
      setStatus(`Welcome ${data.name}!`)
    } catch (e) {
      setStatus(e.message)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <div className="pt-24 mx-auto max-w-md px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold">Login</h1>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <input type="email" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
          <input type="password" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10" placeholder="Password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} required />
          <button className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors w-full">Login</button>
          {status && <p className="text-blue-200/85">{status}</p>}
        </form>
      </div>
      <Footer />
    </div>
  )
}

export function RegisterPage(){
  const [form, setForm] = useState({ name:'', email:'', password:'' })
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Creating account...')
    try {
      const res = await fetch(`${backend}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Registration failed')
      setStatus(`Welcome ${data.name}! Account created.`)
    } catch (e) {
      setStatus(e.message)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <div className="pt-24 mx-auto max-w-md px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold">Create account</h1>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <input className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10" placeholder="Full name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
          <input type="email" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
          <input type="password" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10" placeholder="Password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} required />
          <button className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors w-full">Create account</button>
          {status && <p className="text-blue-200/85">{status}</p>}
        </form>
      </div>
      <Footer />
    </div>
  )
}
