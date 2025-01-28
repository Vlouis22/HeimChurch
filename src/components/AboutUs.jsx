import React from 'react'
import churchimage from '../images/churchphoto1.jpg'
import { useNavigate } from 'react-router-dom';
import { database } from '../data/ChurchDatabase';


export default function AboutUs({to}) {

  let language = database;

  const navigate = useNavigate()
    
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
    
  async function handleClick() {
    let navigation = `/` + to;
    await sleep(250);
    navigate(navigation);
    window.location.reload()
  }

  return (
    <div className='about-us-container'>
        <img className='about-us-img rounded-border' src={churchimage} alt='picture of the church'></img>
        <div className='about-us-text button'  style={{fontSize: '38px'}} onClick={handleClick}><p className='white-text underlined'>{language.homepage['container-1-button']}</p></div>
    </div>
  )
}
