import React from 'react'

export default function PaymentMethod({logo, name, qrCode, info1, info2}) {

  return (
    <div className='payment-method white-background black-text rounded-border'>
        <img className='payment-logo' src={logo}></img>
        {
          qrCode && 
          <>
            <img className='payment-qrcode' src={qrCode}></img>
            <p>{info1}</p>
            <p>{info2}</p>
          </>
        }
        {
          !qrCode &&
          <>
            <h1>Not yet set up</h1>
            <p style={{margin: '1rem'}}>Please check back soon for updates</p>
          </>
        }
    </div>
  )
}
