// config/supabase.config.js
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();  // Indlæs miljøvariabler fra .env filen

const supabaseUrl = process.env.SUPABASE_URL;  // URL til din Supabase-projekt
const supabaseKey = process.env.SUPABASE_KEY;  // Anon API nøgle fra Supabase

export const supabase = createClient(supabaseUrl, supabaseKey);  // Opret Supabase klient
