import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../api/apiRooms";
import { getBookings } from "../../api/apiBookings";

// Tìm nạp dữ liệu
export function useBookings() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    // Xác định duy nhất dữ liệu
    queryKey: ["bookings"],
    //Hàm truy vấn
    queryFn: getBookings,
  });
  return { isLoading, bookings, error };
}
