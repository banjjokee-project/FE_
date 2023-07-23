import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Hero from './pages/Hero';
import Login from './pages/Login';
import Register from './pages/Register';
import Walking from './pages/Walking';
import Restaurant from './pages/Restaurant';
import Appointment from './pages/Appointment';
import Alarmlist from './pages/Alarmlist';

import Board from './pages/Board';
import Boarddetail from './pages/Boarddetail';
import Boardform from './pages/Boardform';

import Error from './pages/Error';

import BottomNav from './pages/BottomNav';
import Profile from './pages/Profile';
import Schedule from './pages/Schedule';
import Note from './pages/Note';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 모두에게 열려있는 페이지 */}
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/walking" element={<Walking />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/note" element={<Note />} />
        <Route path="/alarmlist" element={<Alarmlist />} />
        <Route path="/board" element={<Board />} />
      </Routes>
      <BottomNav />
    </BrowserRouter>
  );
}
