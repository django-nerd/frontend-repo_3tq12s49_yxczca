import { useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Auth() {
  const [mode, setMode] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (mode === 'register') {
        const r = await fetch(`${API}/auth/register`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, password }) });
        if (!r.ok) throw new Error((await r.json()).detail || 'Register failed');
        setMsg('Registration successful. You can log in now.');
        setMode('login');
      } else {
        const r = await fetch(`${API}/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
        const data = await r.json();
        if (!r.ok) throw new Error(data.detail || 'Login failed');
        setToken(data.token);
        localStorage.setItem('token', data.token);
        setUser(data.user);
        setMsg('Logged in successfully.');
      }
    } catch (err) {
      setMsg(err.message);
    }
  };

  const fetchMe = async () => {
    const r = await fetch(`${API}/me`, { headers: { 'X-Token': token } });
    const data = await r.json();
    if (r.ok) setUser(data); else setMsg(data.detail || 'Invalid token');
  };

  const logout = () => { localStorage.removeItem('token'); setToken(''); setUser(null); };

  return (
    <section id="login" className="py-16">
      <div className="max-w-xl mx-auto px-6 bg-white/5 border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white font-semibold text-xl">Student {user ? 'Account' : 'Login / Register'}</h2>
          <div className="flex gap-2 text-sm">
            <button className={`px-3 py-1 rounded-lg ${mode==='login'?'bg-white/20 text-white':'text-blue-200'}`} onClick={() => setMode('login')}>Login</button>
            <button className={`px-3 py-1 rounded-lg ${mode==='register'?'bg-white/20 text-white':'text-blue-200'}`} onClick={() => setMode('register')}>Register</button>
          </div>
        </div>

        {user ? (
          <div className="text-blue-100 space-y-3">
            <p>Welcome, <span className="text-white font-medium">{user.name}</span></p>
            <div className="flex gap-2">
              <button className="px-3 py-2 rounded-lg bg-white/10 text-white" onClick={fetchMe}>Refresh</button>
              <button className="px-3 py-2 rounded-lg bg-white/10 text-white" onClick={logout}>Logout</button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-3">
            {mode === 'register' && (
              <input value={name} onChange={e=>setName(e.target.value)} required placeholder="Full name" className="px-4 py-2 bg-slate-900/60 border border-white/10 rounded-lg text-white placeholder:text-blue-200/60" />
            )}
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Email" className="px-4 py-2 bg-slate-900/60 border border-white/10 rounded-lg text-white placeholder:text-blue-200/60" />
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required placeholder="Password" className="px-4 py-2 bg-slate-900/60 border border-white/10 rounded-lg text-white placeholder:text-blue-200/60" />
            <button className="mt-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white">{mode==='login'?'Login':'Create account'}</button>
          </form>
        )}
        {msg && <p className="mt-3 text-sm text-blue-300">{msg}</p>}
      </div>
    </section>
  );
}
