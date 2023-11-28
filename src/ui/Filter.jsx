import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Filter({ filterField, option }) {
  // Lấy thông tin tham số truy vấn của đường dẫn URL
  const [searchParams, setSearchParams] = useSearchParams();
  // Lấy đường dẫn hiện tại
  const currentFilter = searchParams.get(filterField) || option.at(0).value;
  function handleClick(value) {
    // console.log("test");
    searchParams.set(filterField, value);
    // Khi chuyển sang bộ lọc mới đặt lại trang = 1
    if (searchParams.get("page")) searchParams.set("page", 1);
    // Cập nhật giá trị tham số truy vấn
    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {option.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter ? 1 : 0}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
