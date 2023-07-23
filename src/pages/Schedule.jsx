import InputBox from 'components/Input/InputBox';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Schedule = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="px-4 pt-4">
      <h2 className="mb-4 text-4xl">
        A Hospital
        <br />
        Appointment
      </h2>
      <Calendar
        onChange={onChange}
        value={value}
        showNavigation={false}
        locale="en"
        showNeighboringMonth={false}
      />
      <div className="flex flex-col mt-6 space-y-2">
        <p className="mb-4 text-lg">5월 1일의 예약</p>
        <InputBox />
        <InputBox title="미용" />
        <InputBox title="심장<br/>사상충약" />
      </div>
    </div>
  );
};
export default Schedule;