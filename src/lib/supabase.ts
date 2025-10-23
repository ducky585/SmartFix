import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Booking {
  id?: string;
  name: string;
  email: string;
  phone: string;
  device_brand: string;
  device_model: string;
  repair_type: string;
  preferred_date: string;
  message?: string;
  status?: string;
  created_at?: string;
}
