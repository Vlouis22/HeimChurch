import React from 'react'
import BaptizingPicture from '../images/baptism_picture.jpg'
import BaptizingQuote from '../images/baptizing_quote_1.jpg'
import Footer from '../components/Footer'

export default function Baptizing() {
  return (
    <>
    <div className='baptizing-page'>
      <div className='baptizing-page-1'>
      <img className='baptizing-picture' width='60%' height='100%' src={BaptizingPicture}></img>

      <div className='baptizing-page-1-text-container'>
        <div className='baptizing-page-headers'>What is Baptism?</div>
        <p style={{marginTop: '10px'}}>A Christian sacrament signifying spiritual cleansing and rebirth.</p>
      </div>
      
      </div>
      <div>
        <div className='baptizing-page-headers'>Acts 2:38</div>
        <p>"Repent and be Baptized in the name of Jesus Christ for the remission of sins"</p>
      </div>
      <div>
        <img src={BaptizingQuote}></img>
      </div>
      <div>
        <p className='interested-in-baptizing'>If you are interested in getting baptized or would like to know more about baptism, visit us in person at 3540 peachtree run, Dover, DE 19901 United States </p>
      </div>
    </div>
    <Footer/>
    </>
  )
}
