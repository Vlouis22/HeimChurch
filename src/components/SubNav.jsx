import React from 'react'
import { data, NavLink } from 'react-router-dom'
import { database } from '../data/ChurchDatabase'

export default function SubNav({show}) {

  let language = database

  async function refreshPage() {
    await sleep(0.001);
    window.location.reload(true); 
  };

  function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
  }
      
  return (
    <div className='sub-nav'>
    <nav>
        <NavLink to='/Youth' className={({ isActive }) => (isActive ? "active-link" : "")} onClick={refreshPage}>{language.subnav[0]}</NavLink>
        <NavLink to='/Womens' className={({ isActive }) => (isActive ? "active-link" : "")} onClick={refreshPage}>{language.subnav[1]}</NavLink>
        <NavLink to='/Kids' className={({ isActive }) => (isActive ? "active-link" : "")} onClick={refreshPage}>{language.subnav[2]}</NavLink>
        <NavLink to='/Others' className={({ isActive }) => (isActive ? "active-link" : "")} onClick={refreshPage}>{language.subnav[3]}</NavLink>
        {/* <NavLink to='/WorshipAndMusic' className={({ isActive }) => (isActive ? "active-link" : "")}>Worship And Music</NavLink> */}
        {/* <NavLink to='/TechAndMedia' className={({ isActive }) => (isActive ? "active-link" : "")}>Tech And Media</NavLink> */}
    </nav>
</div>
  )
}
