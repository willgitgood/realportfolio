"use client";

import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const menuHandler = () => {
        setOpenMenu(!openMenu);
    }
  return (
   <nav>
    <div className="nav-container">
        <h1>
            Willpforhire<span>.com</span>
        </h1>

        <ul className={openMenu ? "nav-menu active" : "nav-menu "}>
            <a href="/"><li>Home</li></a>
            <a href="./Projects"><li>Projects</li></a>
            <a href="/"><li>About</li></a>
            <a href="/"><li>Contact</li></a>
        </ul>
        
        <div className="nav-right">
    <button>
        Hire Me
    </button>

    <div onClick={menuHandler} className= {openMenu ? "hamburger active" : "hamburger"}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
    </div>

        </div>
    </div>
   </nav>
  )
}

export default Navbar
