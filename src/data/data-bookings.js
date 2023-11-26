import { add } from "date-fns";

function fromToday(numDays, withTime = false) {
  const date = add(new Date(), { days: numDays });
  // Nếu có thông tin về thời gian => đặt thời gian của ngày mới về 00:00:00.000
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  // chuyển đối tượng Date thành chuỗi đại diện và loại bỏ ký tự cuối cùng
  return date.toISOString().slice(0, -1);
}

export const bookings = [
  // ROOM 001
  {
    // Thời điểm tạo phòng: ngày đại diện - 20 ngày
    created_at: fromToday(-20, true),
    // ngày nhận phòng: ngày đại diện là ngày hiện tại
    startDate: fromToday(0),
    // ngày trả phòng: ngày đại diện là ngày hiện tại + 7 ngày
    endDate: fromToday(7),
    roomId: 1,
    guestId: 2,
    hasBreakfast: true,
    guestsRequest:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    isPaid: false,
    numGuests: 1,
  },
  {
    created_at: fromToday(-33, true),
    startDate: fromToday(-23),
    endDate: fromToday(-13),
    roomId: 1,
    guestId: 3,
    hasBreakfast: true,
    guestsRequest: "",
    isPaid: true,
    numGuests: 2,
  },
  {
    created_at: fromToday(-27, true),
    startDate: fromToday(12),
    endDate: fromToday(18),
    roomId: 1,
    guestId: 4,
    hasBreakfast: false,
    guestsRequest: "",
    isPaid: false,
    numGuests: 2,
  },

  // ROOM 002
  {
    created_at: fromToday(-45, true),
    startDate: fromToday(-45),
    endDate: fromToday(-29),
    roomId: 2,
    guestId: 5,
    hasBreakfast: false,
    guestsRequest: "",
    isPaid: true,
    numGuests: 2,
  },
  {
    created_at: fromToday(-2, true),
    startDate: fromToday(15),
    endDate: fromToday(18),
    roomId: 2,
    guestId: 6,
    hasBreakfast: true,
    guestsRequest: "",
    isPaid: true,
    numGuests: 2,
  },
  {
    created_at: fromToday(-5, true),
    startDate: fromToday(33),
    endDate: fromToday(48),
    roomId: 2,
    guestId: 7,
    hasBreakfast: true,
    guestsRequest: "",
    isPaid: false,
    numGuests: 2,
  },

  // ROOM 003
  {
    created_at: fromToday(-65, true),
    startDate: fromToday(-25),
    endDate: fromToday(-20),
    roomId: 3,
    guestId: 8,
    hasBreakfast: true,
    guestsRequest: "",
    isPaid: true,
    numGuests: 4,
  },
  {
    created_at: fromToday(-2, true),
    startDate: fromToday(-2),
    endDate: fromToday(0),
    roomId: 3,
    guestId: 9,
    hasBreakfast: false,
    guestsRequest: "We will be bringing our small dog with us",
    isPaid: true,
    numGuests: 3,
  },
  {
    created_at: fromToday(-14, true),
    startDate: fromToday(-14),
    endDate: fromToday(-11),
    roomId: 3,
    guestId: 10,
    hasBreakfast: true,
    guestsRequest: "",
    isPaid: true,
    numGuests: 4,
  },

  // ROOM 004
  {
    created_at: fromToday(-30, true),
    startDate: fromToday(-4),
    endDate: fromToday(8),
    roomId: 4,
    guestId: 11,
    hasBreakfast: true,
    guestsRequest: "",
    isPaid: true,
    numGuests: 4,
  },
  {
    created_at: fromToday(-1, true),
    startDate: fromToday(12),
    endDate: fromToday(17),
    roomId: 4,
    guestId: 12,
    hasBreakfast: true,
    guestsRequest: "",
    isPaid: false,
    numGuests: 4,
  },
  {
    created_at: fromToday(-3, true),
    startDate: fromToday(18),
    endDate: fromToday(19),
    roomId: 4,
    guestId: 13,
    hasBreakfast: false,
    guestsRequest: "",
    isPaid: true,
    numGuests: 1,
  },

  // ROOM 005
  {
    created_at: fromToday(0, true),
    startDate: fromToday(14),
    endDate: fromToday(21),
    roomId: 5,
    guestId: 14,
    hasBreakfast: true,
    guestsRequest: "",
    isPaid: false,
    numGuests: 5,
  },
  {
    created_at: fromToday(-6, true),
    startDate: fromToday(-6),
    endDate: fromToday(-4),
    roomId: 5,
    guestId: 15,
    hasBreakfast: true,
    guestsRequest: "",
    isPaid: true,
    numGuests: 4,
  },
  {
    created_at: fromToday(-4, true),
    startDate: fromToday(-4),
    endDate: fromToday(-1),
    roomId: 5,
    guestId: 16,
    hasBreakfast: false,
    guestsRequest: "",
    isPaid: true,
    numGuests: 6,
  },

  // ROOM 006
  {
    created_at: fromToday(-3, true),
    startDate: fromToday(0),
    endDate: fromToday(11),
    roomId: 6,
    guestId: 17,
    hasBreakfast: false,
    guestsRequest:
      "We will be checking in late, around midnight. Hope that's okay :)",
    isPaid: true,
    numGuests: 6,
  },
  {
    created_at: fromToday(-16, true),
    startDate: fromToday(-16),
    endDate: fromToday(-9),
    roomId: 6,
    guestId: 18,
    hasBreakfast: true,
    guestsRequest: "I will need a rollaway bed for one of the guests",
    isPaid: true,
    numGuests: 4,
  },
  {
    created_at: fromToday(-18, true),
    startDate: fromToday(-4),
    endDate: fromToday(-1),
    roomId: 6,
    guestId: 19,
    hasBreakfast: true,
    guestsRequest: "",
    isPaid: true,
    numGuests: 6,
  },

  // ROOM 007
  {
    created_at: fromToday(-2, true),
    startDate: fromToday(17),
    endDate: fromToday(23),
    roomId: 7,
    guestId: 20,
    hasBreakfast: false,
    guestsRequest: "",
    isPaid: false,
    numGuests: 8,
  },
  {
    created_at: fromToday(-7, true),
    startDate: fromToday(40),
    endDate: fromToday(50),
    roomId: 7,
    guestId: 21,
    hasBreakfast: true,
    guestsRequest: "",
    isPaid: true,
    numGuests: 7,
  },
  {
    created_at: fromToday(-55, true),
    startDate: fromToday(32),
    endDate: fromToday(37),
    roomId: 7,
    guestId: 22,
    hasBreakfast: true,
    guestsRequest: "",
    isPaid: true,
    numGuests: 6,
  },

  // ROOM 008
  {
    created_at: fromToday(-8, true),
    startDate: fromToday(-5),
    endDate: fromToday(0),
    roomId: 8,
    guestId: 1,
    hasBreakfast: true,
    guestsRequest:
      "My wife has a gluten allergy so I would like to request a gluten-free breakfast if possible",
    isPaid: true,
    numGuests: 9,
  },
  {
    created_at: fromToday(0, true),
    startDate: fromToday(0),
    endDate: fromToday(5),
    roomId: 8,
    guestId: 23,
    hasBreakfast: true,
    guestsRequest:
      "I am celebrating my anniversary, can you arrange for any special amenities or decorations?",
    isPaid: true,
    numGuests: 10,
  },
  {
    created_at: fromToday(-10, true),
    startDate: fromToday(10),
    endDate: fromToday(13),
    roomId: 8,
    guestId: 24,
    hasBreakfast: false,
    guestsRequest: "",
    isPaid: true,
    numGuests: 7,
  },

  // ROOM 9
  {
    created_at: fromToday(-55, true),
    startDate: fromToday(32),
    endDate: fromToday(37),
    roomId: 9,
    guestId: 25,
    hasBreakfast: false,
    guestsRequest: "",
    isPaid: true,
    numGuests: 7,
  },
  {
    created_at: fromToday(-55, true),
    startDate: fromToday(-37),
    endDate: fromToday(-32),
    roomId: 9,
    guestId: 31,
    hasBreakfast: false,
    guestsRequest: "",
    isPaid: true,
    numGuests: 7,
  },
  {
    created_at: fromToday(-18, true),
    startDate: fromToday(-14),
    endDate: fromToday(-10),
    roomId: 9,
    guestId: 32,
    hasBreakfast: false,
    guestsRequest: "",
    isPaid: true,
    numGuests: 7,
  },
];
