import React from 'react';
import { useNavigate } from "react-router-dom";

const Example = () => {
    const navigate = useNavigate();
    
  
    return (
      <div className="">
        <h2 className="text-2xl text-center pt-40 pb-8">
        <img
            className="mx-auto h-6 mb-4"
            src="/assets/iconback.jpg"
            alt=""
            onClick={() => navigate("/")}
        />
        </h2>
      </div>
    );
  };


  
  export default Example;