import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../api/apiRooms";
import { useSearchParams } from "react-router-dom";

// Tìm nạp dữ liệu tất cả phòng
export function useRoom() {
  const [searchParams] = useSearchParams();
  // Phân trang
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: rooms, count } = {},
    error,
  } = useQuery({
    // Xác định duy nhất dữ liệu
    queryKey: ["rooms", page],
    //Hàm truy vấn
    queryFn: () => getRooms({ page }),
  });
  return { isLoading, rooms, error, count };
}
