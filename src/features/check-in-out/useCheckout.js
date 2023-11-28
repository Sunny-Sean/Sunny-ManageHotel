import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../api/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();
  // Thực hiện thay đổi dữ liệu
  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    // Gọi hàm updateBooking để thực hiện update và truyền vào id
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        // Cập nhật obj của updateBooking
        status: "checked-out",
      }),

    onSuccess: (data) => {
      // Làm mới dữ liệu sau khi tạo thành công
      toast.success(`Booking #${data.id} successfully checked out`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error("There was an error while checked out"),
  });
  return { checkout, isCheckingOut };
}
