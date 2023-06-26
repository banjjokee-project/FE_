import React from 'react';
import { useNavigate } from "react-router-dom";
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

const Board = () => {
  const navigate = useNavigate();
  
  return (

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <img
            className="mx-auto h-6 mr-96"
            src="/assets/iconback.jpg"
            alt=""
            onClick={() => navigate("/example")}
      />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="line mt-7 text-4xl leading-9 tracking-tight text-gray-900">
          “My dog 
          <br></br>
          is the cutest” Board
          </h2>
          <div className="line pt-8 text-md font-extrabold">Q&A 로도 활용해요 !</div>
      </div>
  
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 mt-5 gap-3">
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