import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout as logoutApi } from "../../api/apiAuth";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      // Xóa dữ liệu người đăng nhập cũ ra khỏi bộ nhớ cache
      queryClient.removeQueries();
      // { replace: true  : ngăn người dùng quay lại trang trước đó bằng trình duyệt
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}
