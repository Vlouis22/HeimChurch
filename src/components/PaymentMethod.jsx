import React from 'react'

export default function PaymentMethod({logo, name, qrCode, info1, info2}) {

  return (
    <div className='payment-method white-background black-text rounded-border'>
        <img className='payment-logo' src={logo}></img>
        {/* <img className='payment-qrcode' src={qrCode}></img> */}
        {/* <p>{info1}</p>
        <p>{info2}</p> */}
        <h1>Not yet set up</h1>
    </div>
  )
}
