import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function ContactPage(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${backend}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('Message sent! We will get back to you soon.')
      setForm({ name: '', email: '', message: '' })
    } catch (e) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <div className="pt-24 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold">Contact</h1>
        <p className="mt-2 text-blue-200/85">Have questions? Send us a message.</p>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <input className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
          <input type="email" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
          <textarea className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10" placeholder="Message" rows="5" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required />
          <button className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors">Send</button>
          {status && <p className="text-blue-200/85">{status}</p>}
        </form>
      </div>
      <Footer />
    </div>
  )
}