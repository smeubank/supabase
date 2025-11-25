import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

let supabase: ReturnType<typeof createClient<Database>> | null = null

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
    realtime: {
      params: {
        eventsPerSecond: 1000,
      },
    },
  })
} else {
  // For demo / preview builds without Supabase env, we expose a null client.
  // Call sites should guard on its presence and fall back to static content.
  // eslint-disable-next-line no-console
  console.warn(
    '[www/lib/supabase] NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY not set; Supabase client disabled.'
  )
}

export type SupabaseClient = typeof supabase

export default supabase
