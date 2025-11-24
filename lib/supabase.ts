import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://bmizrtfzvqxatxvlkunt.supabase.co"
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtaXpydGZ6dnF4YXR4dmxrdW50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5MjM5NTgsImV4cCI6MjA3OTQ5OTk1OH0.lkbb-fw470AyiidYu153KLAMLP3fFqc3qLDeA_KSa3s"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
