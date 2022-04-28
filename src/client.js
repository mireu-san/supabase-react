import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    "https://agzdbdwmtluqiqaoagrc.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnemRiZHdtdGx1cWlxYW9hZ3JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTExNTI0MDEsImV4cCI6MTk2NjcyODQwMX0.vNt31bveNFD3h4Ocy0iq6_HRrNlw79IrKZh0N1GO2l8"
)