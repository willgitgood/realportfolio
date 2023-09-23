"use client";

import './Navbar.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    useEffect(() => {
        if (openMenu) {
            document.body.classList.add("no-scroll");
        }else{
            document.body.classList.remove("no-scroll");
        }
    }, [openMenu])

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
       <li> <Link href="/Home">Home</Link></li>
            <Link href="/Projects"><li>Projects</li></Link>
            <a href="/About"><li>About</li></a>
            <a href="/Contact"><li>Contact</li></a>
        </ul>
        
        <div className="nav-right">
    <button className='hire-me'>
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
