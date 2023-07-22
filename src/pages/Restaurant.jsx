import React from 'react';
import { useNavigate } from "react-router-dom";

import { Fragment, useState } from 'react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

const { kakao } = window;

const Walking = () => {
  
  return (

    <div className="flex min-h-[80%] flex-1 flex-col justify-center py-4 px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="line mt-6 text-3xl leading-9 tracking-tight text-gray-900">
            A Dog-friendly Restaurant
          </h2>
      </div>
  
      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="grid h-80 flex-grow mb-4 border-2 border-black bg-base-300 place-items-center">map</div>
        <div className="grid h-36 flex-grow border-2 border-black bg-base-300 place-items-center">restaurant</div>
      </div>

      
    </div>

  );
};

export default Walking;