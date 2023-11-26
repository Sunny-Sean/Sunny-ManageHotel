import { useSearchParams } from "react-router-dom";

import Spinner from "../../ui/Spinner";
import RoomRow from "./RoomRow";
import { useRoom } from "./useRoom";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

function RoomTable() {
  const { isLoading, rooms } = useRoom();
  // Lấy đường dẫn hiện tại để lọc dữ liệu
  const [searchParams] = useSearchParams();
  if (isLoading) return <Spinner />;

  if (!rooms.length) return <Empty resourceName="rooms" />;

  let filterRooms;

  // 1) Filter
  // lấy giá trị của đường dẫn
  const filterValue = searchParams.get("discount") || "all";
  if (filterValue === "all") filterRooms = rooms;
  if (filterValue === "no-discount")
    filterRooms = rooms.filter((room) => room.discount === 0);

  if (filterValue === "with-discount")
    filterRooms = rooms.filter((room) => room.discount > 0);

  // 2) Sort
  const sortBy = searchParams.get("sortBy") || "name-inc";
  // Tách chuỗi truy vấn lấy được từ url
  const [field, direction] = sortBy.split("-");
  // console.log(field, direction);
  const change = direction === "inc" ? 1 : -1;

  // Sắp xếp tăng dần nếu change = 1 và ngc lại
  const sortedRooms = filterRooms.sort(
    (a, b) => (a[field] - b[field]) * change
  );

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Room</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          // data={rooms}
          // data={filterRooms}
          data={sortedRooms}
          render={(room) => <RoomRow room={room} key={room.id} />}
        />
      </Table>
    </Menus>
  );
}

export default RoomTable;
