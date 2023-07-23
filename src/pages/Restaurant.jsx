import React from 'react';
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { Fragment, useState, useEffect } from 'react';
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import PlacesMap from "./Place";
import Place from "./PlaceMap";

const { kakao } = window;

const dummyData = [
  {
    _id: 0,
    placeName: "우동맛집",
    desc: "존맛탱",
  },
];

const Walking = () => {
  const [data, setData] = useState(dummyData);

  useEffect(() => {
    axios
      .get("/api/place")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  
  return (

    <div className="flex min-h-[80%] flex-1 flex-col justify-center py-4 px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="line mt-6 text-3xl leading-9 tracking-tight text-gray-900">
            A Dog-friendly Restaurant
          </h2>
      </div>
  
      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="line mt-6 text-3xl leading-9 tracking-tight text-gray-900">
            A Dog-friendly Restaurant
          </h2>
      </div>
      
        <div className="grid h-36 flex-grow border-2 border-black bg-base-300 place-items-center">restaurant</div>
      </div>

      
    </div>

  );
};

export default Walking;