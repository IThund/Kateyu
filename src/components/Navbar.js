import React, { useEffect, useState } from 'react'
import {Link, useLocation} from "react-router-dom";
import '../styles/Navbar.scss';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location])

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="toggleButton">
            <button 
                onClick={() => {
                    setExpandNavbar((prev) =>!prev);
                }}
            >
                <div className="hamburger-menu">
                    <span></span>
                    <span></span>
                </div>
            </button>
        </div>
        <div className="links">
            <Link to="/Kateyu">Home</Link>
            <Link to="/about"> About </Link>
        </div>
    </div>
  )
}

export default Navbar