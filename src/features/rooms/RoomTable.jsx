import Spinner from "../../ui/Spinner";
import RoomRow from "./RoomRow";
import { useRoom } from "./useRoom";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import Pagination from "../../ui/Pagination";

function RoomTable() {
  const { isLoading, rooms, count } = useRoom();
  // Lấy đường dẫn hiện tại để lọc dữ liệu
  if (isLoading) return <Spinner />;
  if (!rooms.length) return <Empty resourceName="rooms" />;

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
          data={rooms}
          render={(room) => <RoomRow room={room} key={room.id} />}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default RoomTable;
