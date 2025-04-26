import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://mbvfydxjlevqimcilqzo.supabase.co'; // 🔁 your project URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1idmZ5ZHhqbGV2cWltY2lscXpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NTYyMzksImV4cCI6MjA2MTIzMjIzOX0.jqEo0NXXkzJbZ0nuJ22nN9EXb3Y-O-4maUElD5vl1kk';       // 🔁 your anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);