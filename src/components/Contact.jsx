import { useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setStatus('');
    const r = await fetch(`${API}/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, subject, message }) });
    const data = await r.json();
    setStatus(r.ok ? 'Thanks, we received your message.' : (data.detail || 'Something went wrong'));
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Contact</h2>
        <p className="text-blue-200/80 mb-6">We typically reply within 24 hours.</p>
        <form onSubmit={submit} className="grid md:grid-cols-2 gap-4 bg-white/5 border border-white/10 rounded-2xl p-6">
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" required className="px-4 py-2 bg-slate-900/60 border border-white/10 rounded-lg text-white placeholder:text-blue-200/60" />
          <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" required className="px-4 py-2 bg-slate-900/60 border border-white/10 rounded-lg text-white placeholder:text-blue-200/60" />
          <input value={subject} onChange={e=>setSubject(e.target.value)} placeholder="Subject" required className="md:col-span-2 px-4 py-2 bg-slate-900/60 border border-white/10 rounded-lg text-white placeholder:text-blue-200/60" />
          <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Message" rows={5} required className="md:col-span-2 px-4 py-2 bg-slate-900/60 border border-white/10 rounded-lg text-white placeholder:text-blue-200/60" />
          <div className="md:col-span-2 flex items-center justify-between">
            <span className="text-sm text-blue-300/80">Your info is safe with us.</span>
            <button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white">Send</button>
          </div>
        </form>
        {status && <p className="mt-3 text-blue-200">{status}</p>}
      </div>
    </section>
  );
}
