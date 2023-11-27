import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField={"status"}
        option={[
          { value: "all", label: "All" },
          { value: "checked-out", label: "Checked out" },
          { value: "checked-in", label: "Checked in" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />

      <SortBy
        option={[
          { value: "startDate-desc", label: "Sort by date (recent first)" },
          { value: "startDate-inc", label: "Sort by date (earlier first)" },
          {
            value: "totalPrice-desc",
            label: "Sort by amount (high to low)",
          },
          { value: "totalPrice-inc", label: "Sort by amount (low to high)" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
