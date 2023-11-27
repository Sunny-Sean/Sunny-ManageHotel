import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../api/apiBookings";
import { useSearchParams } from "react-router-dom";
import { page_size } from "../../utils/pagesize";

// Tìm nạp dữ liệu
export function useBookings() {
  // Quản lý Cache
  const queryClient = useQueryClient();
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

  // Tìm nạp trước dữ liệu:
  // Đếm số trang
  const pageCount = Math.ceil(count / page_size);
  // Tìm nạp dữ liệu cho trang tiếp theo, khi ở trang cuối sẽ không tìm nạp dữ liệu cho tiếp theo
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      // Khi ở trang 1 thì tìm nạp dữ liệu ở trang 2
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });

  // Tìm nạp dữ liệu cho trang ở phía sau
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });
  return { isLoading, error, bookings, count };
}
