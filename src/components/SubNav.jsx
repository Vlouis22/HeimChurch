import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SubNav({show}) {
      
  return (
    <div className='sub-nav'>
    <nav>
        <NavLink to='/Youth' className={({ isActive }) => (isActive ? "active-link" : "")}>Youth</NavLink>
        <NavLink to='/Womens' className={({ isActive }) => (isActive ? "active-link" : "")}>Women's</NavLink>
        {/* <NavLink to='/Kids' className={({ isActive }) => (isActive ? "active-link" : "")}>Kids</NavLink> */}
        <NavLink to='/Others' className={({ isActive }) => (isActive ? "active-link" : "")}>Others</NavLink>
        {/* <NavLink to='/WorshipAndMusic' className={({ isActive }) => (isActive ? "active-link" : "")}>Worship And Music</NavLink> */}
        {/* <NavLink to='/TechAndMedia' className={({ isActive }) => (isActive ? "active-link" : "")}>Tech And Media</NavLink> */}
    </nav>
</div>
  )
}
