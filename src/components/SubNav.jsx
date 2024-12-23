import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SubNav({show}) {
      
  return (
    <div className='sub-nav'>
    <nav>
        <NavLink to='/Youth' exact className={({ isActive }) => (isActive ? "active-link" : "")}>Youth</NavLink>
        <NavLink to='/Womens' exact className={({ isActive }) => (isActive ? "active-link" : "")}>Women's</NavLink>
        <NavLink to='/Mens' exact className={({ isActive }) => (isActive ? "active-link" : "")}>Men's</NavLink>
        <NavLink to='/WorshipAndMusic' exact className={({ isActive }) => (isActive ? "active-link" : "")}>Worship And Music</NavLink>
        <NavLink to='/TechAndMedia' exact className={({ isActive }) => (isActive ? "active-link" : "")}>Tech And Media</NavLink>
        <NavLink to='/Kids' exact className={({ isActive }) => (isActive ? "active-link" : "")}>Kids</NavLink>
    </nav>
</div>
  )
}
