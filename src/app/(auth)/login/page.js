'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setMsg('Signing in...');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMsg('Error: ' + error.message);
    else window.location.href = '/dashboard';
  }

  return (
    <main style={{ padding: 24, maxWidth: 360 }}>
      <h1>Log in</h1>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12, marginTop: 16 }}>
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button type="submit">Log in</button>
      </form>
      <p style={{ marginTop: 8, color: '#475569' }}>{msg}</p>
      <p style={{ marginTop: 16 }}>
        No account? <a href="/signup" style={{ color:'#2563eb', textDecoration:'underline' }}>Sign up</a>
      </p>
    </main>
  );
}