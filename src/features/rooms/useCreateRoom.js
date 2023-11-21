import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUpdateRoom } from "../../api/apiRooms";
import toast from "react-hot-toast";

export function useCreateRoom() {
  const queryClient = useQueryClient();

  const { mutate: createRoom, isLoading: isCreating } = useMutation({
    mutationFn: (newRoom) => createUpdateRoom(newRoom),
    // Làm mới dữ liệu sau khi tạo thành công
    onSuccess: () => {
      toast.success("New room successfully created");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { createRoom, isCreating };
}
