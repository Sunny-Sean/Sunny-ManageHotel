import supabase, { supabaseUrl } from "./supabase";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  // return { data, password };
  return data;
}

export async function getUserUID() {
  const { data, error } = await supabase.auth.admin.getUserById(
    "68800ddc-6831-4409-9de2-fea2bde9e876"
  );

  if (error) throw new Error(error.message);

  // return { data, password };
  return data;
}

export async function getCurrentUser() {
  // Lấy thông tin đăng nhập hiện tại để ktra xem người dùng có đăng nhập hay ko
  const { data: session } = await supabase.auth.getSession();
  // Nếu ko có trả về null
  if (!session.session) return null;

  // trả về thông tin chi tiết người dùng hiện tại nếu có đăng nhập
  const { data, error } = await supabase.auth.getUser();
  // console.log(data);

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  // 1. Cập nhật mật khẩu hoặc tên đầy đủ người dùng
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  // Supabase tự biết người nào đang dùng để cập nhật
  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);
  if (!avatar) return data;

  // 2. Up ảnh đại diện người dùng
  // Tạo tên file ảnh random
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  // Upload ảnh lên kho lưu trữ
  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // 3. Cập nhật ảnh đại diện cho người dùng
  const { data: updateUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error2) throw new Error(error2.message);

  return updateUser;
}
