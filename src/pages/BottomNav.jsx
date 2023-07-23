import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";


const BottomNav = () => {
  const locationNow = useLocation();
  if (locationNow.pathname === '/') return null;
  if (window.location.pathname === '/login') return null;
  if (window.location.pathname === '/register') return null;

  return (
    <nav className="wrapper min-h-16 mx-auto">
      <div>
        <Link to="/walking" className="nav-link px-10 py-5">
          <img className="h-4 w-4" src="/assets/free-icon-font-calendar.png" alt=""></img>
        </Link>
      </div>
      <div>
        <Link to="/restaurant" className="nav-link px-10 py-5">
        <img className="h-4 w-4" src="/assets/free-icon-font-marker.png" alt=""></img>
        </Link>
      </div>
      <div>
        <Link to="/profile" className="nav-link px-10 py-5">
        <img className="h-4 w-4" src="/assets/free-icon-font-user.png" alt=""></img>
        </Link>
      </div>
      <div>
        <Link to="/alarmlist" className="nav-link px-10 py-5">
        <img className="h-4 w-4" src="/assets/free-icon-font-bell.png" alt=""></img>
        </Link>
      </div>
      <div>
        <Link to="/board" className="nav-link px-10 py-5">
        <img className="h-4 w-4" src="/assets/free-icon-font-edit.png" alt=""></img>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
