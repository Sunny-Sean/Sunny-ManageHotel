import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getRooms } from "../../api/apiRooms";
import { useSearchParams } from "react-router-dom";
import { page_size } from "../../utils/pagesize";

// Tìm nạp dữ liệu tất cả phòng
export function useRoom() {
  // Quản lý Cache
  const queryClient = useQueryClient();
  // Tương tác với tham số truy vấn
  const [searchParams] = useSearchParams();

  // Filter
  //  lấy tham số truy vấn từ URL
  const filterValue = searchParams.get("discount");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "discount", value: filterValue };
  // : { field: "totalPrice", value: 5000, method: "gte" };

  // Sort
  //  lấy tham số truy vấn từ URL
  const sortByRaw = searchParams.get("sortBy") || "name-inc";
  // Tách chuỗi truy vấn lấy được từ URL
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // Phân trang
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: rooms, count } = {},
    error,
  } = useQuery({
    // Xác định duy nhất dữ liệu
    queryKey: ["rooms", filter, sortBy, page],
    //Hàm truy vấn
    queryFn: () => getRooms({ filter, sortBy, page }),
  });

  // Tìm nạp trước dữ liệu:
  // Đếm số trang
  const pageCount = Math.ceil(count / page_size);
  // Tìm nạp dữ liệu cho trang tiếp theo, khi ở trang cuối sẽ không tìm nạp dữ liệu cho tiếp theo
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["rooms", filter, sortBy, page + 1],
      // Khi ở trang 1 thì tìm nạp dữ liệu ở trang 2
      queryFn: () => getRooms({ filter, sortBy, page: page + 1 }),
    });

  // Tìm nạp dữ liệu cho trang ở phía sau
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["rooms", filter, sortBy, page - 1],
      queryFn: () => getRooms({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, rooms, error, count };
}
