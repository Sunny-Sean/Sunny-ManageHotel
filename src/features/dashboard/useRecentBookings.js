import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../api/apiBookings";

export function useRecentBookings() {
  // Lấy tham số truy vấn từ URL
  const [searchParams] = useSearchParams();
  // Lấy giá trị tham số của last
  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  // Tính số ngày từ numdays tới hiện tại rồi đổi thành chuỗi iso
  const queryDate = subDays(new Date(), numDays).toISOString();

  // Truy vấn dữ liệu
  const { isLoading, data: bookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["bookings", `last-${numDays}`],
  });

  return { isLoading, bookings };
}
