import React from 'react';
import { useNavigate } from "react-router-dom";
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

const Appointment = () => {
  return (

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="line mt-6 text-3xl leading-9 tracking-tight text-gray-900">
            A Hospital Appointment
          </h2>
      </div>
  
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="grid h-72 flex-grow border-2 border-black bg-base-300 place-items-center">calendar</div>
        <div className="line text-2xl ml-2 mt-6 mb-5">
          5월 1일의 예약
        </div>
        <div className="flex w-full border-2 border-black">
          <div className="grid w-20 h-14 text-white bg-black text-lg place-items-center">병원</div>
          <div className="grid h-14 flex-grow bg-white text-lg font-medium place-items-center">연수 동물 메디컬 센터 17:00</div>
        </div>
        <div className="flex w-full border-2 mt-1.5 border-black">
          <div className="grid w-20 h-14 text-white bg-black text-lg place-items-center">미용</div>
          <div className="grid h-14 flex-grow bg-white text-lg font-medium place-items-center">3일 남음</div>
        </div>
        <div className="flex w-full border-2 mt-1.5 border-black">
          <div className="grid w-20 h-14 text-white bg-black text-lg place-items-center">심장사상충 <div>약</div></div>
          <div className="grid h-14 flex-grow bg-white text-lg font-medium place-items-center">3일 남음</div>
        </div>
      </div>
    </div>

  );
};

export default Appointment;