import { useState } from "react";
import RoomTable from "../features/rooms/RoomTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import CreateRoomForm from "../features/rooms/CreateRoomForm";

function Rooms() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Rooms</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <RoomTable />
        <Button onClick={() => setShowForm((show) => !show)}>
          Add new Room
        </Button>
        {showForm && <CreateRoomForm />}
      </Row>
    </>
  );
}

export default Rooms;
