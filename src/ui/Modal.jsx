import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { useOutSideClick } from "../hooks/useOutsideClick";

const StyledModalTable = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -25%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;
const StyledModalAdd = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
  overflow: scroll;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutSideClick(close);

  if (name !== openName) return null;
  // Tránh gây xung đột với việc đặt thuộc tính overfllow thành hidden
  // Hiển thị jsx vào cây dom
  return createPortal(
    <Overlay className="none-scroll">
      {name === "table" ? (
        // Theo dõi sự kiện thay đổi bên trong style model
        <StyledModalTable ref={ref}>
          <Button onClick={close}>
            <HiXMark />
          </Button>

          <div>{cloneElement(children, { onCloseModal: close })}</div>
        </StyledModalTable>
      ) : (
        <StyledModalAdd ref={ref}>
          <Button onClick={close}>
            <HiXMark />
          </Button>

          <div>{cloneElement(children, { onCloseModal: close })}</div>
        </StyledModalAdd>
      )}
    </Overlay>,
    // chuyển jsx này thành phần tử con trực tiếp của body
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
