import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css";

import Hero from "./pages/Hero";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Walking from "./pages/Walking";
import Restaurant from "./pages/Restaurant";
import Appointment from "./pages/Appointment";
import Alarmlist from "./pages/Alarmlist";

import Board from "./pages/Board";
import Boarddetail from "./pages/Boarddetail";
import Boardform from "./pages/Boardform";

import Error from "./pages/Error";

import Footer from "./pages/Footer";
import BottomNav from "./pages/BottomNav";


import Example from "./pages/Example";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 모두에게 열려있는 페이지 */}
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/example" element={<Example />} />
        <Route path="/walking" element={<Walking />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/example" element={<Example />} />
        <Route path="/alarmlist" element={<Alarmlist />} />
        <Route path="/board" element={<Board />} />
        

        
      </Routes>
      <BottomNav />
    </BrowserRouter>
  );
}