import React from 'react';
import { useNavigate } from "react-router-dom";
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

const Walking = () => {
  const navigate = useNavigate();

  return (

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8">
      <img
            className="mx-auto h-6 mr-96"
            src="/assets/iconback.jpg"
            alt=""
            onClick={() => navigate("/example")}
          />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="line mt-10 text-4xl leading-9 tracking-tight text-gray-900">
            A Walking Record
          </h2>
      </div>
  
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="grid h-72 flex-grow border-2 border-black bg-base-300 place-items-center">calendar</div>
        <div className="line text-2xl ml-2 mt-8 mb-6">
          5월 1일의 산책
        </div>
        <div className="flex w-full border-2 border-black">
          <div className="grid w-20 h-14 text-white bg-black text-lg place-items-center">목표</div>
          <div className="grid h-14 flex-grow bg-white text-lg font-medium place-items-center">30분 이상 산책하기</div>
        </div>
        <div className="line ml-2 mt-6 font-medium text-lg">How much did you achieve?
        <div className="grid grid-cols-5 w-48 gap-20 content-between text-center pt-2">
          <div>100%<input type="checkbox" checked="checked" className="checkbox w-6 rounded-lg" /></div>
          <div>75%<input type="checkbox" checked="checked" className="checkbox w-6 rounded-lg" /></div>
          <div>50%<input type="checkbox" checked="checked" className="checkbox w-6 rounded-lg" /></div>
          <div>25%<input type="checkbox" checked="checked" className="checkbox w-6 rounded-lg" /></div>
          <div>0%<input type="checkbox" checked="checked" className="checkbox w-6 rounded-lg" /></div>
        </div>
      </div>
      </div>

      
    </div>

  );
};

export default Walking;