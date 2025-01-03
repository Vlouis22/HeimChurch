import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from "react";
import SubNav from './SubNav';
import Socials from './Socials';
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import ChurchLogoWhite from "../images/heimchurchlogo_processed.JPG";
import { useNavigate } from 'react-router-dom';


export default function Navbar() {

    const navigate = useNavigate();

    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }


    const [isMobile, setIsMobile] = useState(false)
    const handleResize = () => {
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

    async function refreshPage() {
        await sleep(1); // Wait for 2 seconds
        window.location.reload(true); // Set to `true` to force a reload from the server
      };

    function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }


    return (
        <header>
            <p className='nav-churchname'>
                <img src={ChurchLogoWhite} style={{ width: '50px' }}></img>
                <NavLink to="/Home" className={({ isActive }) => (isActive ? "active-link" : "")} style={{ textDecoration: 'none', color: 'black' }} onClick={refreshPage}>HEIM Church</NavLink>
            </p>
            <nav ref={navRef}>
                <NavLink to="/Home" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={refreshPage}>Home</NavLink>
                <NavLink to='/About' className={({ isActive }) => (isActive ? "active-link" : "")} onClick={refreshPage}>About</NavLink>
                <div className='navbar-minitries subnav-ministries'>Ministries<SubNav /></div>

                {/* this is the sub navbar ad it should only show up if in smaller screen size*/}
                <NavLink to='/Youth' className={({ isActive }) => (isActive ? "active-link subnav-invisible" : "subnav-invisible")} onClick={refreshPage}>Youth Ministry</NavLink>
                <NavLink to='/Womens' className={({ isActive }) => (isActive ? "active-link subnav-invisible" : "subnav-invisible")} onClick={refreshPage}>Women's Ministry</NavLink>
                <NavLink to='/Kids' className={({ isActive }) => (isActive ? "active-link subnav-invisible" : "subnav-invisible")} onClick={refreshPage}>Kids Ministry</NavLink>
                <NavLink to='/Others' className={({ isActive }) => (isActive ? "active-link subnav-invisible" : "subnav-invisible")} onClick={refreshPage}>Other Ministries</NavLink>

                <NavLink to='/WatchLive' className={({ isActive }) => (isActive ? "active-link" : "")} onClick={refreshPage}>Watch Live</NavLink>
                <NavLink to='/Offering' className={({ isActive }) => (isActive ? "active-link" : "")} onClick={refreshPage}>Offering</NavLink>
                {window.innerWidth < 1024 ? <Socials /> : null}
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
            {window.innerWidth > 1024 ? <Socials /> : null}
        </header>
    )
}
