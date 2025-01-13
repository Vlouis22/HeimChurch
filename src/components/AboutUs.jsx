import React from 'react'
import churchimage from '../images/churchphoto1.jpg'
import { useNavigate } from 'react-router-dom';
import { database } from '../data/ChurchDatabase';


export default function AboutUs({to}) {

  let language = database;

  const navigate = useNavigate()
    
  function handleClick() {
    let navigation = `/` + to;
    navigate(navigation);
  }

  return (
    <div className='about-us-container'>
        <img className='about-us-img rounded-border' src={churchimage} alt='picture of the church'></img>
        <div className='about-us-text button'  style={{fontSize: '38px'}} onClick={handleClick}><p className='white-text underlined'>{language.homepage['container-1-button']}</p></div>
    </div>
  )
}
