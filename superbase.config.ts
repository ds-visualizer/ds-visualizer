import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_superbase_URL!;
const key = process.env.NEXT_PUBLIC_superbase_anon_key!;

const client = createClient(url, key);

export default client;
