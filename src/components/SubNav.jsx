import React from 'react'
import { data, NavLink } from 'react-router-dom'
import { database } from '../data/ChurchDatabase'

export default function SubNav({show}) {

  let language = database
      
  return (
    <div className='sub-nav'>
    <nav>
        <NavLink to='/Youth' className={({ isActive }) => (isActive ? "active-link" : "")}>{language.subnav[0]}</NavLink>
        <NavLink to='/Womens' className={({ isActive }) => (isActive ? "active-link" : "")}>{language.subnav[1]}</NavLink>
        <NavLink to='/Kids' className={({ isActive }) => (isActive ? "active-link" : "")}>{language.subnav[2]}</NavLink>
        <NavLink to='/Others' className={({ isActive }) => (isActive ? "active-link" : "")}>{language.subnav[3]}</NavLink>
        {/* <NavLink to='/WorshipAndMusic' className={({ isActive }) => (isActive ? "active-link" : "")}>Worship And Music</NavLink> */}
        {/* <NavLink to='/TechAndMedia' className={({ isActive }) => (isActive ? "active-link" : "")}>Tech And Media</NavLink> */}
    </nav>
</div>
  )
}
