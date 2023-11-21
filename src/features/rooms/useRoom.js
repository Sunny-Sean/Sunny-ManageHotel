import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../api/apiRooms";

// Tìm nạp dữ liệu
export function useRoom() {
  const {
    isLoading,
    data: rooms,
    error,
  } = useQuery({
    // Xác định duy nhất dữ liệu
    queryKey: ["rooms"],
    //Hàm truy vấn
    queryFn: getRooms,
  });
  return { isLoading, rooms, error };
}
