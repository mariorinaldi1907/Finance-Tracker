// src/lib/serverClient.js
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

// Next.js 15: cookies() is async.
// We must await it, then pass a function returning that store.
export async function createServerClient() {
  const cookieStore = await cookies();
  return createServerComponentClient({ cookies: () => cookieStore });
}