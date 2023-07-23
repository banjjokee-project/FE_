import React from 'react';
import { useNavigate } from "react-router-dom";
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

const Walking = () => {

  return (

    <div className="flex min-h-[80%] flex-1 flex-col justify-center py-4 px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="line mt-6 text-3xl leading-9 tracking-tight text-gray-900">
            A Walking Record
          </h2>
      </div>
  
      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="grid h-72 flex-grow border-2 border-black bg-base-300 place-items-center">calendar</div>
        <div className="line text-lg ml-1 mt-6 mb-4">
          5월 1일의 산책
        </div>
        <div className="flex w-full border-2 border-black">
          <div className="grid w-20 h-12 text-white bg-black text-base place-items-center">목표</div>
          <input type="text" placeholder="30분 이상 산책하기" className="input grid w-20 h-12 flex-grow bg-white text-base place-items-center" />
        </div>
        <div className="line ml-1 mt-6 font-medium text-base">How much did you achieve?
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