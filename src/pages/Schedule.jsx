import InputBox from 'components/Input/InputBox';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Schedule = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8">
       <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mb-4 text-3xl">
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
      <div className="flex flex-col mt-5 space-y-1.5">
        <p className="mb-2 text-lg">5월 1일의 예약</p>
        <InputBox />
        <InputBox title="미용" />
        <InputBox title="심장<br/>사상충약" />
      </div>
    </div>
    </div>
  );
};
export default Schedule;