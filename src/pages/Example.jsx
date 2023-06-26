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
          페이지 확인을 위한 임시 버튼 입니다 🙂
        </h2>
        <button className="btn btn-outline outline outline-1 ml-64 mx-4 h-14 w-40 justify-center" onClick={() => navigate("/walking")}>산책 달력 페이지</button>
        <button className="btn btn-outline outline outline-1 mx-4 h-14 w-40 justify-center" onClick={() => navigate("/restaurant")}>식당 지도 페이지</button>
        <button className="btn btn-outline outline outline-1 mx-4 h-14 w-40 justify-center" onClick={() => navigate("/")}>마이페이지</button>
        <button className="btn btn-outline outline outline-1 mx-4 h-14 w-40 justify-center" onClick={() => navigate("/arlamlist")}>알림 내역 페이지</button>
        <button className="btn btn-outline outline outline-1 mr-64 mx-4 h-14 w-40 justify-center" onClick={() => navigate("/board")}>게시판 페이지</button>
      </div>
    );
  };


  
  export default Example;