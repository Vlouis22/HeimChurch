import React from 'react'
import Footer from '../components/Footer'
import PaymentMethod from '../components/PaymentMethod'
import CashappLogo from '../images/cashapplogo.webp'
import ZelleLogo from '../images/zelle-logo-smaller.png' 
import PaypalLogo from '../images/paypallogo.webp'
import VenmoLogo from '../images/venmologo.webp'
import FakeQrCode from '../images/general_qr_code.png'
import PaymentButton from '../components/PaymentButton'
import CashAppQrCode from "../images/CashAppQRCode_HEIMCHURCH18.png"
import PaypalQrCode from "../images/heim_church_paypal_qrcode.jpg"
import VenmoQrCode from "../images/heim_church_venmo_qrcode.jpg"



export default function Offering() {
  return (
    <div className='offering-page maximum-height page'>
      <div className='offering-page-container'> 
        <div className='ways-to-give size-medium roboto-bold'>Ways To Give</div>
        <div className='payment-methods-container grey-background'>
        <PaymentMethod 
          paymentName='Cash App' 
          // logo={CashappLogo} 
          logo = {<PaymentButton text='Cash App' color='white' bgColor='#00CF31' to='https://cash.app/$HEIMCHURCH18?qr=1' specialclassName='cashapp'/>}
          qrCode={CashAppQrCode} 
          info1name='Name:' 
          info1detail='$HEIMCHURCH18' 
          info2name='Number:'
          info2detail='+1 (302) 387-7570'

        />
        {/* <PaymentMethod paymentName='Zelle' logo={ZelleLogo} qrCode={null} info1='Name: @Heimchurch' info2='Number: +1 (123) 456-7890'/> */}
        <PaymentMethod
          paymentName='Paypal' 
          // logo={PaypalLogo} 
          logo = {<PaymentButton text='Paypal' color='white' bgColor='#003087' to='https://www.paypal.com/qrcodes/managed/06e1da78-d8f4-4c36-9c2a-f4d2910fe767?utm_source=bizapp_download' specialclassName='paypal'/>}
          qrCode={PaypalQrCode} 
          info1name='Name:' 
          info1detail='Haitian evange international ministry' 
          info2name='Number:'
          info2detail='+1 (302) 387-7570'
        />
        <PaymentMethod 
          paymentName='Venmo' 
          // logo={VenmoLogo} 
          qrCode={VenmoQrCode} 
          logo = {<PaymentButton text='Venmo' color='white' bgColor='#008CFF' to='https://venmo.com/code?user_id=4236972109334496461&created=1735935029' specialclassName='venmo'/>}
          info1name='Name:' 
          info1detail='@Jean-Joseph-153'
          info2name='Number:' 
          info2detail='(302) 387-7570'
          />
        </div>
      </div>
      <Footer/>
    </div>
  )
}
