import { createServerClient } from '@/lib/serverClient';

export default async function HomePage() {
  const supabase = await createServerClient();            // ← await
  const { data: { session } } = await supabase.auth.getSession();
  const link = { color:'#2563eb', textDecoration:'underline' };

  return (
    <main style={{ padding: 24 }}>
      <h1>Finance Tracker</h1>
      {session ? (
        <>
          <p>Welcome back, {session.user?.email}</p>
          <ul>
            <li><a href="/upload" style={link}>Upload CSV</a></li>
            <li><a href="/transactions" style={link}>Transactions</a></li>
            <li><a href="/dashboard" style={link}>Dashboard</a></li>
            <li><a href="/logout" style={link}>Log out</a></li>
          </ul>
        </>
      ) : (
        <p>
          Please <a href="/login" style={link}>log in</a> or{' '}
          <a href="/signup" style={link}>sign up</a>.
        </p>
      )}
    </main>
  );
}