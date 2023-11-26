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
    // Cập nhật giá trị tham số truy vấn
    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {option.map((el) => (
        <FilterButton
          key={el.value}
          onClick={() => handleClick(el.value)}
          active={el.value === currentFilter}
          disabled={el.value === currentFilter}
        >
          {el.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
