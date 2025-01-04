import React from 'react'
import Footer from '../components/Footer'
import PaymentMethod from '../components/PaymentMethod'
import CashappLogo from '../images/cashapplogo.webp'
import ZelleLogo from '../images/zelle-logo-smaller.png' 
import PaypalLogo from '../images/paypallogo.webp'
import VenmoLogo from '../images/venmologo.webp'
import FakeQrCode from '../images/general_qr_code.png'
import CashAppQrCode from "../images/CashAppQRCode_HEIMCHURCH18.png"
import RegularButton from '../components/RegularButton'
import PaymentButton from '../components/PaymentButton'


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
          info1='Name: $HEIMCHURCH18' 
          info2='Number: +1 (302) 387-7570'
        />
        <PaymentMethod paymentName='Zelle' logo={ZelleLogo} qrCode={null} info1='Name: @Heimchurch' info2='Number: +1 (123) 456-7890'/>
        <PaymentMethod paymentName='Paypal' logo={PaypalLogo} qrCode={null} info1='Name: @Heimchurch' info2='Number: +1 (123) 456-7890'/>
        <PaymentMethod paymentName='Venmo' logo={VenmoLogo} qrCode={null} info1='Name: @Heimchurch' info2='Number: +1 (123) 456-7890'/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
