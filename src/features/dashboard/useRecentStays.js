import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../api/apiBookings";

export function useRecentStays() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: stays } = useQuery({
    // Đếm số lần khách đã đến ks từ queryDate ngày trước đến hiện tại (checkin, checkout, unconfirmed)
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ["stays", `last-${numDays}`],
  });

  // Lọc phòng đã được xác nhận ( checkin, checkout )
  const confirmedStays = stays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out"
  );

  // stays: Số lần khách đã đến ks từ x ngày trước đến hiện tại (checkin, checkout, unconfirmed)
  // confirmedStays: Số lần khách đã đến ks từ x ngày trước đến hiện tại (checkin, checkout)

  return { isLoading, stays, confirmedStays, numDays };
}
