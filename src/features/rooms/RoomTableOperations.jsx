import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function RoomTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        option={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />

      <SortBy
        option={[
          { value: "name-inc", label: "Sort by name A-Z" },
          { value: "name-desc", label: "Sort by name Z-A" },
          { value: "price-inc", label: "Sort by price (low to high)" },
          { value: "price-desc", label: "Sort by price (high to low)" },
          { value: "maxCapacity-inc", label: "Sort by capacity (low to high)" },
          {
            value: "maxCapacity-desc",
            label: "Sort by capacity (high to low)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default RoomTableOperations;
