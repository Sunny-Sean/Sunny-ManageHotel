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
    guestId: 1,
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
    guestId: 2,
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
    guestId: 3,
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
    guestId: 4,
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
    guestId: 5,
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
    guestId: 6,
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
    guestId: 7,
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
    guestId: 8,
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
    guestId: 9,
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
    guestId: 10,
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
    guestId: 11,
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
    guestId: 12,
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
    guestId: 13,
    hasBreakfast: true,
    guestsRequest: "",
    isPaid: false,
    numGuests: 5,
  },
  {
    created_at: fromToday(-6, true),
    startDate: fromToday(-4),
    endDate: fromToday(2),
    roomId: 5,
    guestId: 14,
    hasBreakfast: true,
    guestsRequest: "",
    isPaid: true,
    numGuests: 4,
  },
  {
    created_at: fromToday(-4, true),
    startDate: fromToday(-4),
    endDate: fromToday(1),
    roomId: 5,
    guestId: 15,
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
    guestId: 16,
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
    guestId: 17,
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
    guestId: 18,
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
    guestId: 19,
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
    guestId: 20,
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
    guestId: 21,
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
    guestId: 22,
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
    guestId: 26,
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
    guestId: 27,
    hasBreakfast: false,
    guestsRequest: "",
    isPaid: true,
    numGuests: 7,
  },

  // ROOM 10
  {
    created_at: fromToday(0, true),
    startDate: fromToday(10),
    endDate: fromToday(14),
    roomId: 10,
    guestId: 28,
    hasBreakfast: false,
    guestsRequest: "",
    isPaid: false,
    numGuests: 2,
  },
  {
    created_at: fromToday(-20, true),
    startDate: fromToday(-17),
    endDate: fromToday(-12),
    roomId: 10,
    guestId: 29,
    hasBreakfast: false,
    guestsRequest: "",
    isPaid: true,
    numGuests: 7,
  },
  {
    created_at: fromToday(-98, true),
    startDate: fromToday(-97),
    endDate: fromToday(-92),
    roomId: 10,
    guestId: 30,
    hasBreakfast: true,
    guestsRequest: "",
    isPaid: true,
    numGuests: 7,
  },

  // ROOM 11
  {
    created_at: fromToday(-10, true),
    startDate: fromToday(-5),
    endDate: fromToday(-2),
    roomId: 11,
    guestId: 31,
    hasBreakfast: false,
    guestsRequest: "",
    isPaid: false,
    numGuests: 2,
  },
  {
    created_at: fromToday(-29, true),
    startDate: fromToday(-18),
    endDate: fromToday(-13),
    roomId: 11,
    guestId: 32,
    hasBreakfast: false,
    guestsRequest: "",
    isPaid: true,
    numGuests: 4,
  },
  {
    created_at: fromToday(-97, true),
    startDate: fromToday(-96),
    endDate: fromToday(-94),
    roomId: 11,
    guestId: 33,
    hasBreakfast: true,
    guestsRequest: "",
    isPaid: true,
    numGuests: 8,
  },

  // ROOM 12
  {
    created_at: fromToday(-15, true),
    startDate: fromToday(-4),
    endDate: fromToday(3),
    roomId: 12,
    guestId: 1,
    hasBreakfast: false,
    guestsRequest: "",
    isPaid: false,
    numGuests: 2,
  },
  {
    created_at: fromToday(-20, true),
    startDate: fromToday(-18),
    endDate: fromToday(-9),
    roomId: 12,
    guestId: 2,
    hasBreakfast: false,
    guestsRequest: "",
    isPaid: true,
    numGuests: 7,
  },
  {
    created_at: fromToday(-9, true),
    startDate: fromToday(0),
    endDate: fromToday(3),
    roomId: 12,
    guestId: 33,
    hasBreakfast: true,
    guestsRequest: "",
    isPaid: true,
    numGuests: 7,
  },

  // Room 13
  {
    created_at: fromToday(-60, true),
    startDate: fromToday(-55),
    endDate: fromToday(-52),
    roomId: 13,
    guestId: 4,
    hasBreakfast: false,
    guestsRequest: "Extra pillows",
    isPaid: false,
    numGuests: 3,
  },
  {
    created_at: fromToday(-10, true),
    startDate: fromToday(-2),
    endDate: fromToday(4),
    roomId: 13,
    guestId: 5,
    hasBreakfast: false,
    guestsRequest: "Late check-in",
    isPaid: true,
    numGuests: 2,
  },
  {
    created_at: fromToday(-30, true),
    startDate: fromToday(-28),
    endDate: fromToday(-25),
    roomId: 13,
    guestId: 6,
    hasBreakfast: true,
    guestsRequest: "Vegetarian meals",
    isPaid: true,
    numGuests: 1,
  },

  // Room 14
  {
    created_at: fromToday(-5, true),
    startDate: fromToday(-3),
    endDate: fromToday(1),
    roomId: 14,
    guestId: 7,
    hasBreakfast: false,
    guestsRequest: "Early check-out",
    isPaid: false,
    numGuests: 1,
  },
  {
    created_at: fromToday(-20, true),
    startDate: fromToday(-1),
    endDate: fromToday(0),
    roomId: 14,
    guestId: 8,
    hasBreakfast: true,
    guestsRequest: "Airport shuttle",
    isPaid: false,
    numGuests: 4,
  },
  {
    created_at: fromToday(-4, true),
    startDate: fromToday(-1),
    endDate: fromToday(4),
    roomId: 14,
    guestId: 9,
    hasBreakfast: false,
    guestsRequest: "Late check-out",
    isPaid: true,
    numGuests: 2,
  },

  // Room 15
  {
    created_at: fromToday(-10, true),
    startDate: fromToday(-3),
    endDate: fromToday(5),
    roomId: 15,
    guestId: 10,
    hasBreakfast: false,
    guestsRequest: "Vegetarian breakfast",
    isPaid: false,
    numGuests: 3,
  },
  {
    created_at: fromToday(-25, true),
    startDate: fromToday(-20),
    endDate: fromToday(-16),
    roomId: 15,
    guestId: 11,
    hasBreakfast: false,
    guestsRequest: "Early check-in",
    isPaid: true,
    numGuests: 2,
  },
  {
    created_at: fromToday(-40, true),
    startDate: fromToday(-5),
    endDate: fromToday(1),
    roomId: 15,
    guestId: 12,
    hasBreakfast: true,
    guestsRequest: "Gluten-free meals",
    isPaid: true,
    numGuests: 1,
  },

  // Room 16
  {
    created_at: fromToday(-15, true),
    startDate: fromToday(-4), // Ngày mới
    endDate: fromToday(2), // Ngày mới
    roomId: 16,
    guestId: 13,
    hasBreakfast: true,
    guestsRequest: "Late check-in",
    isPaid: false,
    numGuests: 2,
  },
  {
    created_at: fromToday(-25, true),
    startDate: fromToday(-19), // Ngày mới
    endDate: fromToday(-16), // Ngày mới
    roomId: 16,
    guestId: 14,
    hasBreakfast: false,
    guestsRequest: "Extra pillows",
    isPaid: true,
    numGuests: 3,
  },
  {
    created_at: fromToday(-50, true),
    startDate: fromToday(-40), // Ngày mới
    endDate: fromToday(-35), // Ngày mới
    roomId: 16,
    guestId: 15,
    hasBreakfast: true,
    guestsRequest: "Special requests",
    isPaid: true,
    numGuests: 1,
  },

  // Room 17
  {
    created_at: fromToday(-8, true),
    startDate: fromToday(-5), // Ngày mới
    endDate: fromToday(-3), // Ngày mới
    roomId: 17,
    guestId: 16,
    hasBreakfast: false,
    guestsRequest: "Late check-out",
    isPaid: false,
    numGuests: 2,
  },
  {
    created_at: fromToday(-18, true),
    startDate: fromToday(-15), // Ngày mới
    endDate: fromToday(-12), // Ngày mới
    roomId: 17,
    guestId: 17,
    hasBreakfast: true,
    guestsRequest: "Airport shuttle",
    isPaid: false,
    numGuests: 4,
  },
  {
    created_at: fromToday(-70, true),
    startDate: fromToday(-65), // Ngày mới
    endDate: fromToday(-60), // Ngày mới
    roomId: 17,
    guestId: 18,
    hasBreakfast: true,
    guestsRequest: "Special dietary requirements",
    isPaid: true,
    numGuests: 3,
  },

  // Room 18
  {
    created_at: fromToday(-5, true),
    startDate: fromToday(-2), // Ngày mới
    endDate: fromToday(1), // Ngày mới
    roomId: 18,
    guestId: 19,
    hasBreakfast: false,
    guestsRequest: "Pet-friendly room",
    isPaid: false,
    numGuests: 1,
  },
  {
    created_at: fromToday(-15, true),
    startDate: fromToday(-2), // Ngày mới
    endDate: fromToday(7), // Ngày mới
    roomId: 18,
    guestId: 20,
    hasBreakfast: true,
    guestsRequest: "Early check-in",
    isPaid: true,
    numGuests: 2,
  },
  {
    created_at: fromToday(-65, true),
    startDate: fromToday(-50), // Ngày mới
    endDate: fromToday(-45), // Ngày mới
    roomId: 18,
    guestId: 21,
    hasBreakfast: false,
    guestsRequest: "Ocean view room",
    isPaid: true,
    numGuests: 3,
  },

  // Room19
  {
    created_at: fromToday(0, true), // Đã chỉnh sửa
    startDate: fromToday(1), // Ngày mới (số dương)
    endDate: fromToday(4), // Ngày mới (số dương và lớn hơn startDate)
    roomId: 19,
    guestId: 22,
    hasBreakfast: true,
    guestsRequest: "Late check-out",
    isPaid: true,
    numGuests: 2,
  },
  {
    created_at: fromToday(0, true), // Đã chỉnh sửa
    startDate: fromToday(3), // Ngày mới (số dương)
    endDate: fromToday(5), // Ngày mới (số dương và lớn hơn startDate)
    roomId: 19,
    guestId: 23,
    hasBreakfast: false,
    guestsRequest: "Airport shuttle",
    isPaid: false,
    numGuests: 4,
  },
  {
    created_at: fromToday(0, true), // Đã chỉnh sửa
    startDate: fromToday(4), // Ngày mới (số dương)
    endDate: fromToday(7), // Ngày mới (số dương và lớn hơn startDate)
    roomId: 19,
    guestId: 24,
    hasBreakfast: true,
    guestsRequest: "Special dietary requirements",
    isPaid: true,
    numGuests: 3,
  },

  // Room 20
  {
    created_at: fromToday(0, true), // Đã chỉnh sửa
    startDate: fromToday(7), // Ngày mới (số dương)
    endDate: fromToday(10), // Ngày mới (số dương và lớn hơn startDate)
    roomId: 20,
    guestId: 25,
    hasBreakfast: false,
    guestsRequest: "Pet-friendly room",
    isPaid: false,
    numGuests: 1,
  },
  {
    created_at: fromToday(0, true), // Đã chỉnh sửa
    startDate: fromToday(2), // Ngày mới (số dương)
    endDate: fromToday(5), // Ngày mới (số dương và lớn hơn startDate)
    roomId: 20,
    guestId: 26,
    hasBreakfast: true,
    guestsRequest: "Early check-in",
    isPaid: true,
    numGuests: 2,
  },
  {
    created_at: fromToday(0, true), // Đã chỉnh sửa
    startDate: fromToday(1), // Ngày mới (số dương)
    endDate: fromToday(6), // Ngày mới (số dương và lớn hơn startDate)
    roomId: 20,
    guestId: 27,
    hasBreakfast: false,
    guestsRequest: "Ocean view room",
    isPaid: true,
    numGuests: 3,
  },

  // Room 21
  {
    created_at: fromToday(-5, true),
    startDate: fromToday(-2), // Ngày mới
    endDate: fromToday(1), // Ngày mới (lớn hơn startDate)
    roomId: 21, // Đã tạo mới
    guestId: 31,
    hasBreakfast: true,
    guestsRequest: "Late check-out",
    isPaid: true,
    numGuests: 2,
  },
  {
    created_at: fromToday(-15, true),
    startDate: fromToday(-4), // Ngày mới
    endDate: fromToday(6), // Ngày mới (lớn hơn startDate)
    roomId: 21, // Đã tạo mới
    guestId: 32,
    hasBreakfast: false,
    guestsRequest: "Airport shuttle",
    isPaid: false,
    numGuests: 4,
  },
  {
    created_at: fromToday(-25, true),
    startDate: fromToday(-2), // Ngày mới
    endDate: fromToday(2), // Ngày mới (lớn hơn startDate)
    roomId: 21, // Đã tạo mới
    guestId: 33,
    hasBreakfast: true,
    guestsRequest: "Special dietary requirements",
    isPaid: true,
    numGuests: 3,
  },
];
