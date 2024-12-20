import React from 'react'
import churchimage from '../images/churchphoto1.jpg'
import { useNavigate } from 'react-router-dom';


export default function AboutUs({to}) {

  const navigate = useNavigate()
    
  function handleClick() {
    let navigation = `/` + to;
    navigate(navigation);
  }

  return (
    <div className='about-us-container'>
        <img className='about-us-img rounded-border' src={churchimage}></img>
        <div className='about-us-text button' onClick={handleClick}><p className='white-text underlined size-medium'>About Us</p></div>
    </div>
  )
}
