import styled from "styled-components";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

import CreateRoomForm from "./CreateRoomForm";
import { useDeleteRoom } from "./useDeleteRoom";
import { useCreateRoom } from "./useCreateRoom";

import { formatCurrency } from "../../utils/helpers";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-3px);
`;

const Room = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function RoomRow({ room }) {
  const { isDeleting, deleteRoom } = useDeleteRoom();
  const { createRoom, isCreating } = useCreateRoom();
  const {
    id: roomId,
    name,
    maxCapacity,
    price,
    discount,
    description,
    image,
  } = room;

  // Thực hiện việc tạo phòng dựa trên useCreateRoom và trả về tên mới là copy ..
  function handleDuplicate() {
    createRoom({
      name: `Copy of ${name}`,
      maxCapacity,
      price,
      discount,
      description,
      image,
    });
  }

  return (
    <Table.Row role="row">
      <Img src={image} />
      <Room>{name}</Room>
      <div>Maximum for {maxCapacity} guests</div>
      <Price>{formatCurrency(price)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={roomId} />

            <Menus.List id={roomId}>
              <Menus.Button
                icon={<HiSquare2Stack />}
                onClick={() => handleDuplicate()}
                disabled={isCreating}
              >
                Duplicate
              </Menus.Button>

              {/* Đặt Menus.Buttonus trong  Modal.Open để các button trong menus có thể thực hiện chức năng*/}
              <Modal.Open opens="update">
                <Menus.Button icon={<HiPencil />} disabled={isCreating}>
                  Update
                </Menus.Button>
              </Modal.Open>

              {/* Đặt Menus.Buttonus trong  Modal.Open để các button trong menus có thể thực hiện chức năng*/}
              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />} disabled={isCreating}>
                  Delete
                </Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="update">
              <CreateRoomForm roomToUpdate={room} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="rooms"
                disabled={isDeleting}
                onConfirm={() => deleteRoom(roomId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default RoomRow;
