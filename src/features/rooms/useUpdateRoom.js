import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createUpdateRoom } from "../../api/apiRooms";

export function useUpdateRoom() {
  const queryClient = useQueryClient();

  const { mutate: UpdateRoom, isLoading: isUpdating } = useMutation({
    mutationFn: ({ newRoomData, id }) => createUpdateRoom(newRoomData, id),
    // Làm mới dữ liệu sau khi tạo thành công
    onSuccess: () => {
      toast.success("Room successfully updated");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { UpdateRoom, isUpdating };
}
