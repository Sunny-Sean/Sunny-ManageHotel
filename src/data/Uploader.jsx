import { useState } from "react";
import { isFuture, isPast, isToday } from "date-fns";
import supabase from "../api/supabase";
import Button from "../ui/Button";
import { subtractDates } from "../utils/helpers";

import { bookings } from "./data-bookings";
import { rooms } from "./data-rooms";
import { guests } from "./data-guests";

// async function deleteGuests() {
//   const { error } = await supabase.from("guests").delete().gt("id", 0);
//   if (error) console.log(error.message);
// }

// async function deleteRooms() {
//   const { error } = await supabase.from("rooms").delete().gt("id", 0);
//   if (error) console.log(error.message);
// }

async function deleteBookings() {
  const { error } = await supabase.from("bookings").delete().gt("id", 0);
  if (error) console.log(error.message);
}

// async function createGuests() {
//   const { error } = await supabase.from("guests").insert(guests);
//   if (error) console.log(error.message);
// }

// async function createRooms() {
//   const { error } = await supabase.from("rooms").insert(rooms);
//   if (error) console.log(error.message);
// }

async function createBookings() {
  // Việc đặt chỗ cần có guestId và roomId, không thể nói ID Supabase cho từng đối tượng, nó sẽ tự tính toán chúng. Vì vậy, nó có thể khác nhau đối với những người khác nhau, đặc biệt là sau khi tải lên nhiều lần. Do đó, trước tiên cần lấy tất cả ID khách và ID phòng, sau đó thay thế ID gốc trong dữ liệu đặt phòng bằng ID thực tế từ DB
  const { data: guestsIds } = await supabase
    .from("guests")
    .select("id")
    .order("id");
  const allGuestIds = guestsIds.map((room) => room.id);
  const { data: roomsIds } = await supabase
    .from("rooms")
    .select("id")
    .order("id");
  const allRoomIds = roomsIds.map((room) => room.id);

  const finalBookings = bookings.map((booking) => {
    // Ở đây dựa vào thứ tự các phòng vì chưa có và ID
    const room = rooms.at(booking.roomId - 1);
    const numNights = subtractDates(booking.endDate, booking.startDate);
    const roomPrice = numNights * (room.price - room.discount);
    const extrasPrice = booking.hasBreakfast
      ? numNights * 60 * booking.numGuests
      : 0; // giá bữa sáng được mã hóa cứng
    const totalPrice = roomPrice + extrasPrice;

    let status;
    if (
      isPast(new Date(booking.endDate)) &&
      !isToday(new Date(booking.endDate))
    )
      status = "checked-out";
    if (
      isFuture(new Date(booking.startDate)) ||
      isToday(new Date(booking.startDate))
    )
      status = "unconfirmed";
    if (
      (isFuture(new Date(booking.endDate)) ||
        isToday(new Date(booking.endDate))) &&
      isPast(new Date(booking.startDate)) &&
      !isToday(new Date(booking.startDate))
    )
      status = "checked-in";

    return {
      ...booking,
      numNights,
      roomPrice,
      extrasPrice,
      totalPrice,
      guestId: allGuestIds.at(booking.guestId - 1),
      roomId: allRoomIds.at(booking.roomId - 1),
      status,
    };
  });

  console.log(finalBookings);
  // console.log("aa");

  const { error } = await supabase.from("bookings").insert(finalBookings);
  if (error) console.log(error.message);
}

function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  // async function uploadAll() {
  //   setIsLoading(true);
  //   // Xóa dữ liệu cũ
  //   await deleteBookings();
  //   await deleteGuests();
  //   await deleteRooms();

  //   // Thêm dữ liệu test
  //   await createGuests();
  //   await createRooms();
  //   await createBookings();

  //   setIsLoading(false);
  // }

  async function uploadBookings() {
    setIsLoading(true);
    await deleteBookings();
    await createBookings();
    setIsLoading(false);
  }

  return (
    <div
      style={{
        marginTop: "auto",
        backgroundColor: "#e0e7ff",
        padding: "8px",
        borderRadius: "5px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <h3>Data from server</h3>

      {/* <Button onClick={uploadAll} disabled={isLoading}>
        Upload ALL
      </Button> */}

      <Button onClick={uploadBookings} disabled={isLoading}>
        Upload bookings ONLY
      </Button>
    </div>
  );
}

export default Uploader;
