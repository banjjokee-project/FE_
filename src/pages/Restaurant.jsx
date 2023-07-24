import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import PlacesMap from "./PlacesMap";
import Place from "./Place";


const dummyData = [
  {
    _id: 0,
    placeName: "동물병원",
    desc: "수의사님이 친절하고 과잉진료가 없어요.",
    lat: 37.413167, 
    lng: 126.678877,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3dHznBk2k3CXndyoqk0VDHHSHe_753JRuyw&usqp=CAU"
  },

];

const Restaurnat = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(dummyData);


  return (
    <div className="flex w-[80%] flex-1 flex-col justify-center py-4 px-6">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="line mt-6 text-3xl leading-9 tracking-tight text-gray-900">
            A Dog-friendly Restaurant
          </h2>
      </div>
      <div className="container w-[50%] xl:max-w-10xl absolute top-20 bottom-10 left-24 right-10">
        <PlacesMap height="40%" data={data} />
        <div className="places ml-5 mt-5 mb-5 mx-auto lg:mr-5 overflow-y-scroll">
        {data.map((item) => {
          return <Place key={item._id} {...item} />;
        })}
      </div>
      </div>
    </div>
  );
};

export default Restaurnat;