import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

// grid-template-columns: 26rem 1fr;

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  overflow: scroll;
`;

const Main = styled.main`
  background-color: var(--color-grey-300);
  padding: 4rem 4.8rem 6.4rem;
`;

function Applayout() {
  return (
    <StyledAppLayout className="none-scroll">
      <Header />
      <Sidebar />
      <Main>
        {/* Hiển thị các thành phần trong tuyến đường con dựa trên URL */}
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default Applayout;
