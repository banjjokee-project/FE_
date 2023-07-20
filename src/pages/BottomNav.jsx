import React from 'react';
import { Link } from 'react-router-dom';


const BottomNav = () => {
  if (window.location.pathname === '/login') return null;
  if (window.location.pathname === '/register') return null;

  return (
    <nav className="wrapper">
      <div>
        <Link to="/walking" className="nav-link">Walking
        </Link>
      </div>
      <div>
        <Link to="/restaurant" className="nav-link">Restaurant
        </Link>
      </div>
      <div>
        <Link to="/example" className="nav-link">Example
        </Link>
      </div>
      <div>
        <Link to="/alarmlist" className="nav-link">Alarmlist
        </Link>
      </div>
      <div>
        <Link to="/board" className="nav-link">Board
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
