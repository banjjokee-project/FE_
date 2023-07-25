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
  {
    _id: 1,
    placeName: "동물병원1",
    desc: "수의사님이 친절하고 과잉진료가 없어요.",
    lat: 37.413167, 
    lng: 126.678877,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3dHznBk2k3CXndyoqk0VDHHSHe_753JRuyw&usqp=CAU"
  },
  {
    _id: 2,
    placeName: "동물병원2",
    desc: "수의사님이 친절하고 과잉진료가 없어요.",
    lat: 37.413167, 
    lng: 126.678877,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3dHznBk2k3CXndyoqk0VDHHSHe_753JRuyw&usqp=CAU"
  },
  {
    _id: 3,
    placeName: "동물병원3",
    desc: "수의사님이 친절하고 과잉진료가 없어요.",
    lat: 37.413167, 
    lng: 126.678877,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3dHznBk2k3CXndyoqk0VDHHSHe_753JRuyw&usqp=CAU"
  },
  {
    _id: 4,
    placeName: "동물병원4",
    desc: "수의사님이 친절하고 과잉진료가 없어요.",
    lat: 37.413167, 
    lng: 126.678877,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3dHznBk2k3CXndyoqk0VDHHSHe_753JRuyw&usqp=CAU"
  },

];

const Restaurant = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(dummyData);


  return (
    <div className="flex flex-1 flex-col justify-center py-4 pt-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="line text-3xl leading-9 tracking-tight text-gray-900">
            A Dog-friendly Restaurant
          </h2>
      </div>
      
      <div className="h-96 w-full xl:max-w-10xl sm:mx-auto sm:w-full sm:max-w-sm">
        <PlacesMap height="80%" data={data} />
        <div className="places w-[94%] ml-3 mt-3 mx-auto overflow: scroll overflow-y-scroll">
        {data.map((item) => {
          return <Place key={item._id} {...item} />;
        })}
        </div>
      </div>
    </div>
    
  );
};

export default Restaurant;