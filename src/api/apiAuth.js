import supabase from "./supabase";

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  // Lấy thông tin đăng nhập hiện tại để ktra xem người dùng có đăng nhập hay ko
  const { data: session } = await supabase.auth.getSession();
  // Nếu ko có trả về null
  if (!session.session) return null;

  // trả về thông tin chi tiết người dùng hiện tại nếu có đăng nhập
  const { data, error } = await supabase.auth.getUser();

  console.log(data);

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
