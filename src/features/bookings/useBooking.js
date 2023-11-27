import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBooking } from "../../api/apiBookings";

// Tìm nạp dữ liệu
export function useBooking() {
  // Lấy tham số đường dẫn
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    // Xác định duy nhất dữ liệu
    queryKey: ["booking", bookingId],
    //Hàm truy vấn
    queryFn: () => getBooking(bookingId),
    // Chỉ tìm nạp dữ liệu 1 lần
    retry: false,
  });
  return { isLoading, booking, error };
}
