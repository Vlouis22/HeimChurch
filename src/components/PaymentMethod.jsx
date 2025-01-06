import React from 'react'

export default function PaymentMethod({logo, name, qrCode, info1name, info2name, info1detail, info2detail}) {

  return (
    <div className='payment-method white-background black-text rounded-border'>
        {!qrCode && <img className='payment-logo' src={logo}></img>}
        {qrCode && logo}
        {
          qrCode && 
          <>
            <img className='payment-qrcode' src={qrCode}></img>
            <p><b>{info1name}</b>{' ' + info1detail}</p>
            <p><b>{info2name}</b>{' ' + info2detail}</p>
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
