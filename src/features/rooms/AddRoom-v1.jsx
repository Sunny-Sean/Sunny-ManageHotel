import Button from "../../ui/Button";
import CreateRoomForm from "./CreateRoomForm";
import Modal from "../../ui/Modal";
import RoomTable from "./RoomTable";

function AddRoom() {
  return (
    <Modal>
      <Modal.Open opens="room-form">
        <Button>Add new room</Button>
      </Modal.Open>
      <Modal.Window name="room-form">
        <CreateRoomForm />
      </Modal.Window>

      <Modal.Open opens="table">
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <RoomTable />
      </Modal.Window>
    </Modal>
  );
}
// function AddRoom() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add new Room
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateRoomForm onCloseModel={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddRoom;
