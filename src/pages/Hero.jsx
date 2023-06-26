import React from 'react';
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    
  
    return (
      
      <div className="hero">
        <img className="h-screen w-fit" src="/assets/background.jpg" alt="" />
        <div>
        <div className="hero-content text-center pt-0">
          <div className="max-w-md pt-44 pb-48">
            <p className="py-6">반려 동물과 함께하는 건강한 삶</p>
            <div className="grid grid-flow-row-dense grid-cols-3">
              <img className="" src="/assets/slogo.png" alt="" />
              <div className="col-span-2 pt-1">
                <h1 className="text-5xl font-bold">반쪽이</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 pt-32 mb-5 w-fit">
          <button className="btn btn-outline bg-base-100 outline outline-2 rounded-md w-60 h-14" onClick={() => navigate("/login")}>LOG IN</button>
          <button className="btn btn-primary outline outline-2 outline-black rounded-md w-60 h-14" onClick={() => navigate("/register")}>REGISTER</button>
        </div>
        </div>
      </div>

    );
  };
  
  export default Hero;