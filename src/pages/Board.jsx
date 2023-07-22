import React from 'react';
import { useNavigate } from "react-router-dom";
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

const Board = () => {
  const navigate = useNavigate();
  
  return (

    <div className="flex min-h-[80%] flex-1 flex-col justify-center w-96 mx-auto py-4 px-2">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="line mt-7 text-3xl leading-9 tracking-tight text-gray-900">
          “My dog 
          <br></br>
          is the cutest” Board
          </h2>
          <div className="line pt-6 text-sm font-extrabold">Q&A 로도 활용해요 !</div>
      </div>
  
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 mt-4 gap-2">
      <img className=""src="/assets/leo.jpg" alt=""></img>
      <img className=""src="/assets/leo.jpg" alt=""></img>
      <img className=""src="/assets/leo.jpg" alt=""></img>
      <img className=""src="/assets/leo.jpg" alt=""></img>
      <img className=""src="/assets/leo.jpg" alt=""></img>
      <img className=""src="/assets/leo.jpg" alt=""></img>
      <img className=""src="/assets/leo.jpg" alt=""></img>
      <img className=""src="/assets/leo.jpg" alt=""></img>
      <img className=""src="/assets/leo.jpg" alt=""></img>
      <img className=""src="/assets/leo.jpg" alt=""></img>
      <img className=""src="/assets/leo.jpg" alt=""></img>
      <img className=""src="/assets/leo.jpg" alt=""></img>
      <img className=""src="/assets/leo.jpg" alt=""></img>
      <img className=""src="/assets/leo.jpg" alt=""></img>
      <img className=""src="/assets/leo.jpg" alt=""></img>
      </div>
    </div>

  );
};

export default Board;