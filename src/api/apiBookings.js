import { getToday } from "../utils/helpers";
import { page_size } from "../utils/pagesize";
import supabase from "./supabase";

export async function getBookings({ filter, sortBy, page }) {
  let query = supabase
    .from("bookings")
    // Lấy dữ liệu khóa ngoại
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice ,rooms(name), guests(fullName, email)",
      { count: "exact" }
    );

  // filter
  if (filter) {
    query = query[filter.method || "eq"](filter.field, filter.value);
    console.log(filter.field, filter.value);
    console.log(query);
  }
  // lọc dữ liệu

  // sort
  // sắp xếp dữ liệu
  if (sortBy)
    query = query.order(sortBy.field, {
      // sắp xếp tăng dần (từ quá khứ tới tương lai)
      ascending: sortBy.direction === "inc",
    });

  if (page) {
    const from = (page - 1) * page_size;
    const to = from + page_size - 1;
    // Giới hạn truy vấn trong phạm vi để phân trang
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    console.error(error);
    throw new Error("Bookings could not be loaded");
  }
  return { data, count };
}

export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, rooms(*), guests(*)")
    .eq("id", id)
    // Lấy một đối tượng ra khỏi mảng
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }

  return data;
}
// Trả về tất cả ĐẶT PHÒNG được tạo sau ngày đã cho. Ví dụ: hữu ích để nhận các lượt đặt chỗ được tạo trong 30 ngày qua.
// Date: ISOstring
// Nhận số lượng đặt phòng được tạo từ x ngày trước tới hiện tại (checkin. checkout, unconfirmed)
export async function getBookingsAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, totalPrice, extrasPrice")

    // Láy khoảng thời gian created_at giữa ngày truyền vào tới hiện tại, vd: 30 ngày trước tới nay
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

// Số lần khách đã đến ks từ x ngày trước đến hiện tại (checkin, checkout, unconfirmed)
export async function getStaysAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    // .select('*')
    .select("*, guests(fullName)")

    // Lọc theo thời điểm bắt đầu nhận phòng tới bây giờ
    .gte("startDate", date)
    .lte("startDate", getToday());

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

// Trả về lượt nhận phòng hoặc trả phòng hôm nay
export async function getStaysTodayActivity() {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName, nationality, country)")
    // để lọc bookings dựa trên trạng thái và ngày
    .or(
      // trạng thái = unconfirmed và startDate = hôm nay hoặc trạng thái = checked-in và endDate = hôm nay
      `and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.checked-in,endDate.eq.${getToday()})`
    )
    // Sắp xếp kết quả theo ngày tạo phòng
    .order("created_at");

  // Tương đương với điều này. Nhưng bằng cách truy vấn điều này, chỉ tải xuống dữ liệu chúng tôi thực sự cần, nếu không sẽ cần TẤT CẢ các lượt đặt chỗ từng được tạo

  // (stay.status === 'unconfirmed' && isToday(new Date(stay.startDate))) ||
  // (stay.status === 'checked-in' && isToday(new Date(stay.endDate)))

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }
  return data;
}

export async function updateBooking(id, obj) {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  return data;
}

export async function deleteBooking(id) {
  // ghi nhớ chính sách RLS
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  return data;
}
