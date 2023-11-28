import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../api/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    // Gọi hàm login từ api
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      // Cập nhật dữ liệu truy vấn người dùng nếu có sẵn trong cache
      queryClient.setQueryData(["user"], user.user);
      // { replace: true  : ngăn người dùng quay lại trang trước đó bằng trình duyệt
      toast.success("Logged in successfully");
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      toast.error("Email or password is incorrect");
      console.log("error", err);
    },
  });

  return { login, isLoading };
}
