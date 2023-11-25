import { useEffect, useRef } from "react";

export function useOutSideClick(handler, lister = true) {
  // theo dõi một giá trị thay đổi theo thời gian và không làm kích thích việc render lại component khi giá trị của nó thay đổi
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        // Nếu nhấp vào style model thì không xảy ra, nhấp ngoài vùng sẽ thoát
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      //
      document.addEventListener("click", handleClick, lister);

      return () => document.removeEventListener("click", handleClick, lister);
    },
    [handler, lister]
  );

  return ref;
}
