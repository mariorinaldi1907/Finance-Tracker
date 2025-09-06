'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setMsg('Creating account...');
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) { setMsg('Error: ' + error.message); return; }

    setMsg('Account created. Signing in...');
    const { error: err2 } = await supabase.auth.signInWithPassword({ email, password });
    if (err2) setMsg('Login error: ' + err2.message);
    else window.location.href = '/dashboard';
  }

  return (
    <main style={{ padding: 24, maxWidth: 360 }}>
      <h1>Sign up</h1>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12, marginTop: 16 }}>
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Password (min 6 chars)" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button type="submit">Create account</button>
      </form>
      <p style={{ marginTop: 8, color: '#475569' }}>{msg}</p>
      <p style={{ marginTop: 16 }}>
        Already have an account? <a href="/login" style={{ color:'#2563eb', textDecoration:'underline' }}>Log in</a>
      </p>
    </main>
  );
}