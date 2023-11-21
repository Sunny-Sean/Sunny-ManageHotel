import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRoom as deleteRoomApi } from "../../api/apiRooms";
import toast from "react-hot-toast";

export function useDeleteRoom() {
  const queryClient = useQueryClient();

  // Thực hiện thay đổi dữ liệu
  const { isLoading: isDeleting, mutate: deleteRoom } = useMutation({
    mutationFn: (id) => deleteRoomApi(id),
    // Làm mới lại dữ liệu sau khi xóa thành công
    onSuccess: () => {
      toast.success("Delete room successfully");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteRoom };
}
