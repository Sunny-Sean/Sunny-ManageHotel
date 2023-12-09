import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { updateBooking } from "../../api/apiBookings";
import toast from "react-hot-toast";

export function useChecking() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Thực hiện thay đổi dữ liệu
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    // Gọi hàm updateBooking để thực hiện update và truyền vào id
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        // Cập nhật obj của updateBooking
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),

    onSuccess: (data) => {
      // Làm mới dữ liệu sau khi tạo thành công
      toast.success(`Booking #${data.id} successfully checked in`);
      queryClient.invalidateQueries({ active: true });
      navigate("/dashboard");
    },

    onError: () => toast.error("There was an error while checked in"),
  });
  return { checkin, isCheckingIn };
}
