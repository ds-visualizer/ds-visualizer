import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_supabase_URL!;
const key = process.env.NEXT_PUBLIC_supabase_anon_key!;

const client = createClient(url, key);

export default client;
