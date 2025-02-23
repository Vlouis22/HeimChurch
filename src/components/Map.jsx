import React from 'react'
import { database } from '../data/ChurchDatabase';


export default function Map({backgroundColor}) {

    const style = backgroundColor ? backgroundColor + "-background map-container" : 'white-background map-container';

    console.log(style)

  return (
    <div className={style}>
    <div 
      style={{textAlign: 'center', fontSize: '38px', marginBottom: '1.2rem' }} 
      className='black-text bold special-underline'>
      {database.contact.location}
      </div>
      <iframe
        width="100%"
        height="450"
        frameborder="0"
        referrerpolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_personal_api_k}&q=3540+Peachtree+Run+Dover+DE+19901`}
        allowfullscreen>
      </iframe>
    </div>
  )
}
