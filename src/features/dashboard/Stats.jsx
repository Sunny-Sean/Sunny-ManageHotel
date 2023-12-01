import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, roomCount }) {
  // 1. Tính số lượng đặt phòng = checkin + unconfirmed
  const numBookings = bookings.length;
  // 2.Tính tổng doanh thu
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  //   3. Tính số lượng checkin
  const checksin = confirmedStays.length;
  // 4. Tính tỉ lệ lấp đầy = tổng số đêm của all phòng đã checkin / Numdays(7,30,90) * tổng số phòng
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (roomCount * numDays);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checksin}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
