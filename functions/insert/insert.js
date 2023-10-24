// Create a single supabase client for interacting with your database

const { createClient } = require('@supabase/supabase-js');

// This URL and anon public key are both found in Project > Home > Project API at Supabase
const supabaseUrl = "https://jtsqoijulrjlpdmpugnz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0c3FvaWp1bHJqbHBkbXB1Z256Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxNzMyNTEsImV4cCI6MjAxMzc0OTI1MX0.K1qIrb9MwClhvfpq9luLQBMwQKXzbdNzojj_WGD69W8";

const supabase = createClient(supabaseUrl, supabaseKey);

console.log('Supabase Instance: ', supabase);