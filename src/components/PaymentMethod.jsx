import React from 'react'
import { useState } from 'react'

export default function PaymentMethod({logo, name, qrCode, info1name, info2name, info1detail, info2detail}) {

  const [isImageLoading, setIsImageLoading] = useState(true)
  const [anErrorOccurred, setAnErrorOccured] = useState(false)

  const loader = (
    <div className=''>
    <div className="loader--2">
    </div>
    </div>
  );

  const error = (
    <div className='qr-code-error'>
      Unable to display the QR code.
    </div>
  );

  function turnOffLoading(){
    setIsImageLoading(false)
  }

  function setAnError(){
    setIsImageLoading(false)
    setAnErrorOccured(true)
  }


  return (
    <div className='payment-method white-background black-text rounded-border'>
        {!qrCode && <img className='payment-logo' src={logo}></img>}
        {qrCode && logo}
        {
          qrCode && 
          <>
            <div className='payment-qrcode-container'>
              {isImageLoading && loader}
              {!isImageLoading && anErrorOccurred && error}
              <img 
                className={isImageLoading || anErrorOccurred ? 'payment-qrcode invisible' : 'payment-qrcode'} 
                src={qrCode}
                onLoad={turnOffLoading}
                onError={setAnError}
                alt={`${name} qr code`}
                >
              </img>
            </div>
            <div className='payment-information-container'>
              <p><b>{info1name}</b>{' ' + info1detail}</p>
              <p><b>{info2name}</b>{' ' + info2detail}</p>
            </div>
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
