import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from "react";
import SubNav from './SubNav';
import Socials from './Socials';
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import ChurchLogoWhite from "../images/heimchurchlogo_processed.JPG";
import { useNavigate } from 'react-router-dom';
import { database } from '../data/ChurchDatabase';
import LanguageSelector from './LanguageSelector';


export default function Navbar() {

    const navigate = useNavigate();

    let language = database;

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
        await sleep(1);
        window.location.reload(true); 
      };

    function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }


    return (
        <header>
            <p className='nav-churchname'>
                <img src={ChurchLogoWhite} style={{ width: '50px' }} alt='a picture of the church logo'></img>
                <NavLink to="/Home" className={({ isActive }) => (isActive ? "active-link" : "")} style={{ textDecoration: 'none', color: 'black' }} onClick={refreshPage}>{language['church-name']}</NavLink>
            </p>
            <nav ref={navRef}>
                <NavLink to="/Home" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={refreshPage}>{language.navbar[0]}</NavLink>
                <NavLink to='/About' className={({ isActive }) => (isActive ? "active-link" : "")} onClick={refreshPage}>{language.navbar[1]}</NavLink>
                <div className='navbar-minitries subnav-ministries'>{language.navbar[2]}<SubNav /></div>

                {/* this is the sub navbar ad it should only show up if in smaller screen size*/}
                <NavLink to='/Youth' className={({ isActive }) => (isActive ? "active-link subnav-invisible" : "subnav-invisible")} onClick={refreshPage}>{language['subnav-for-phone'][0]}</NavLink>
                <NavLink to='/Womens' className={({ isActive }) => (isActive ? "active-link subnav-invisible" : "subnav-invisible")} onClick={refreshPage}>{language['subnav-for-phone'][1]}</NavLink>
                <NavLink to='/Kids' className={({ isActive }) => (isActive ? "active-link subnav-invisible" : "subnav-invisible")} onClick={refreshPage}>{language['subnav-for-phone'][2]}</NavLink>
                <NavLink to='/Others' className={({ isActive }) => (isActive ? "active-link subnav-invisible" : "subnav-invisible")} onClick={refreshPage}>{language['subnav-for-phone'][3]}</NavLink>

                <NavLink to='/WatchLive' className={({ isActive }) => (isActive ? "active-link" : "")} onClick={refreshPage}>{language.navbar[3]}</NavLink>
                <NavLink to='/Offering' className={({ isActive }) => (isActive ? "active-link" : "")} onClick={refreshPage}>{language.navbar[4]}</NavLink>
                <LanguageSelector/>
                {window.innerWidth < 1024 ? <Socials size={25} blackIcon={true}/> : null}
                <button className='nav-btn nav-close-btn' onClick={showNavbar} aria-label='close navigation button'>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar} aria-label='open navigation button'>
                <FaBars />
            </button>
            
            {window.innerWidth > 1024 ? <div style={{width: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Socials size={20} blackIcon={true}/></div> : null}
        </header>
    )
}
