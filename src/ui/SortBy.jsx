import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ option }) {
  //Lấy thông tin tham số truy vấn của đường dẫn URL
  const [searchParams, setSearchParams] = useSearchParams();

  //   Lấy giá trị đang đưọc chọn nếu 0 thì lấy giá trị đầu tiên
  const sortBy = searchParams.get("sortBy") || "";
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);

    // Thêm chuỗi truy vấn mới vào cuối URL
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={option}
      onChange={handleChange}
      type="white"
      value={sortBy}
    />
  );
}

export default SortBy;
