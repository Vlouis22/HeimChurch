import React from 'react'
import BaptizingPicture from '../images/baptism_picture.jpg'
import BaptizingQuote from '../images/baptizing_quote_1.jpg'
import Footer from '../components/Footer'
import { database } from '../data/ChurchDatabase'

export default function Baptizing() {

  let language = database

  return (
    <>
    <div className='baptizing-page'>
      <div className='baptizing-page-1'>
      <img className='baptizing-picture' width='60%' height='100%' src={BaptizingPicture}></img>

      <div className='baptizing-page-1-text-container'>
        <div className='baptizing-page-headers'>{language.baptism['title-1']}</div>
        <p style={{marginTop: '10px'}}>{language.baptism['description-1']}</p>
      </div>
      
      </div>
      <div>
        <div className='baptizing-page-headers'>{language.baptism['title-2']}</div>
        <p>{language.baptism['description-2']}</p>
      </div>
      <div>
        <img src={BaptizingQuote}></img>
      </div>
      <div>
        <p className='interested-in-baptizing'>{language.baptism['interested-in-baptizing']}</p>
      </div>
    </div>
    <Footer/>
    </>
  )
}
