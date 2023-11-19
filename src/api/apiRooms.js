import supabase from "./supabase";

export async function getRooms() {
  // Thực hiện tạo truy vấn supabase = phương thức from
  const { data, error } = await supabase.from("rooms").select("*");

  if (error) {
    console.log(error);
    throw new Error("Không thể tải phòng");
  }

  return data;
}
