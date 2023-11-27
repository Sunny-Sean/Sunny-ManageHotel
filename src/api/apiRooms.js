import { page_size } from "../utils/pagesize";
import supabase, { supabaseUrl } from "./supabase";

export async function getRooms({ page }) {
  let query = supabase.from("rooms").select("*", { count: "exact" });
  // Thực hiện tạo truy vấn supabase = phương thức from
  if (page) {
    const from = (page - 1) * page_size;
    const to = from + page_size - 1;
    // Giới hạn truy vấn để phân trang
    query = query.range(from, to);
  }
  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Room could not be loaded");
  }

  return { data, count };
}

export async function createUpdateRoom(newRoom, id) {
  // console.log(newRoom, id);
  // Ktra xem đường dẫn chứa ảnh có chứa supabaseUrl ko?
  const hasImagePath = newRoom.image?.startsWith?.(supabaseUrl);

  // Tạo tên ảnh
  const imageName = `${Math.random()}-${newRoom.image?.name}`.replaceAll(
    "/",
    ""
  );

  // Nếu có đường dân từ trước thì sử dụng đường dẫn ảnh đó, nếu ko thì tạo đường dẫn ảnh mới
  const imagePath = hasImagePath
    ? newRoom.image
    : `${supabaseUrl}/storage/v1/object/public/room-images/${imageName}`;

  let query = supabase.from("rooms");

  // A)Tạo phòng
  if (!id) query = query.insert([{ ...newRoom, image: imagePath }]);

  // B) Cập nhật
  if (id) query = query.update({ ...newRoom, image: imagePath }).eq("id", id);

  // Lấy dữ liệu vừa nhận được
  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Room could not be created");
  }

  // b2: Up ảnh

  // Nếu có đường dẫn hình ảnh thì trở về
  if (hasImagePath) return data;
  // Up ảnh lên "room-images
  const { error: storageError } = await supabase.storage
    .from("room-images")
    .upload(imageName, newRoom.image);

  //b3: nếu quá trình tải lên hình ảnh gặp lỗi thì xóa thông tin phòng và gửi về lỗi
  if (storageError) {
    await supabase.from("rooms").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("Room image could not be upload and not created");
  }

  return data;
}

export async function deleteRoom(id) {
  const { data, error } = await supabase.from("rooms").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Room could not be deleted");
  }
  return data;
}
