import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../api/apiAuth";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    // xác định duy nhất và quản lý cache
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { user, isLoading, isAuthenticated: user?.role === "authenticated" };
}
