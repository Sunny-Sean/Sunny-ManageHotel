import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://kfduxewfhoyqzvuzdvxz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmZHV4ZXdmaG95cXp2dXpkdnh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAzNTg4MDcsImV4cCI6MjAxNTkzNDgwN30.DpX5tgI3I07N9MK6UZLWNAqyzPRu691xwuagii-6nWw";

// Tạo kết nối để bắt đầu truy vấn cơ sở dữ liệu
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
