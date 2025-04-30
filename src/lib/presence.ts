import { supabase } from './supabaseClient';

export async function updatePresence(userId: string, status: 'online' | 'offline') {
  const { error } = await supabase
    .from('presence')
    .upsert({ user_id: userId, status, last_seen: new Date().toISOString() });
  return { error };
}

export async function getOnlineUsers() {
  const { data, error } = await supabase
    .from('presence')
    .select('user_id, status, last_seen')
    .eq('status', 'online');
  return { data, error };
} 