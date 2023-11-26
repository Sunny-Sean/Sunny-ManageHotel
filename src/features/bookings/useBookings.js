import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../api/apiBookings";
import { useSearchParams } from "react-router-dom";

// Tìm nạp dữ liệu
export function useBookings() {
  // Tương tác với tham số truy vấn
  const [searchParams] = useSearchParams();

  // Filter
  //  lấy tham số truy vấn từ URL
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  // : { field: "totalPrice", value: 5000, method: "gte" };

  // Sort
  //  lấy tham số truy vấn từ URL
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  // Tách chuỗi truy vấn lấy được từ URL
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // Phân trang
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    // Đặt giá trị ban đầu là rỗng nếu chưa có dữ liệu
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    // Xác định duy nhất dữ liệu, filter và sortBy thay đổi react query tự tìm nạp dữ liệu
    queryKey: ["bookings", filter, sortBy, page],
    //Gọi hàm truy vấn  getBookings từ apiBookings
    queryFn: () => getBookings({ filter, sortBy, page }),
  });
  return { isLoading, error, bookings, count };
}
