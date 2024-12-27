import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import {useRef} from "react";
import {Link} from 'react-router-dom';
import SubNav from './SubNav';
import Socials from './Socials';
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import ChurchLogoWhite from "../images/heimchurchlogo_processed.JPG";




export default function Navbar() {

    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }


    const [isMobile, setIsMobile] = useState(false)
    const handleResize = () => {
        console.log(isMobile)
        console.log(window.innerWidth)

        if (window.innerWidth < 1024) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
      }
      
      useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
      
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
        

  return (
    <header>
        <p className='nav-churchname'><img src={ChurchLogoWhite} style={{width: '50px'}}></img>HEIM Church</p>
        <nav ref={navRef}>
        <NavLink to="/Home" exact className={({ isActive }) => (isActive ? "active-link" : "")}>Home</NavLink>
            <NavLink to='/About' exact className={({ isActive }) => (isActive ? "active-link" : "")}>About</NavLink>
            <div className='navbar-minitries subnav-ministries'>Ministries<SubNav/></div>

            {/* this is the sub navbar ad it should only show up if in smaller screen size*/}
            <NavLink to='/Youth' exact className={({ isActive }) => (isActive ? "active-link subnav-invisible" : "subnav-invisible")}>Youth</NavLink>
            <NavLink to='/Womens' exact className={({ isActive }) => (isActive ? "active-link subnav-invisible" : "subnav-invisible")}>Women's</NavLink>
            <NavLink to='/Kids' exact className={({ isActive }) => (isActive ? "active-link subnav-invisible" : "subnav-invisible")}>Kids</NavLink>
            <NavLink to='/Others' exact className={({ isActive }) => (isActive ? "active-link subnav-invisible" : "subnav-invisible")}>Others</NavLink>

            <NavLink to='/WatchLive' exact className={({ isActive }) => (isActive ? "active-link" : "")}>Watch Live</NavLink>
            <NavLink to='/Offering'exact className={({ isActive }) => (isActive ? "active-link" : "")}>Offering</NavLink>
            {window.innerWidth < 1024? <Socials/> : null}
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars/>
        </button>
        {window.innerWidth > 1024? <Socials/> : null}
    </header>
  )
}
