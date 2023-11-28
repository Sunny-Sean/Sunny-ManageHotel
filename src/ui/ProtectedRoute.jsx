import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. Đợi người dùng xác thực
  const { isLoading, isAuthenticated } = useUser();
  //2. Nếu người dùng không được xác thực thì chuyển đến trang đăng nhập
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3. Khi đang tải, hiển thị vòng quay
  if (isLoading)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  // 4. Nếu được xác thực thì sử dụng ứng dụng
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
