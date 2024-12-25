import React from 'react'
import Footer from '../components/Footer'
import PaymentMethod from '../components/PaymentMethod'
import CashappLogo from '../images/cashapplogo.webp'
import ZelleLogo from '../images/zelle-logo-smaller.png' 
import PaypalLogo from '../images/paypallogo.webp'
import VenmoLogo from '../images/venmologo.webp'
import FakeQrCode from '../images/general_qr_code.png'


export default function Offering() {
  return (
    <div className='offering-page maximum-height'>
      <div className='offering-page-container'> 
        <div className='ways-to-give size-medium roboto-bold'>Ways To Give</div>
        <div className='payment-methods-container grey-background'>
        <PaymentMethod paymentName='Cash App' logo={CashappLogo} qrCode={FakeQrCode} info1='name: @Heimchurch' info2='Number: +1 (123) 456-7890'/>
        <PaymentMethod paymentName='Zelle' logo={ZelleLogo} qrCode={FakeQrCode} info1='name: @Heimchurch' info2='Number: +1 (123) 456-7890'/>
        <PaymentMethod paymentName='Paypal' logo={PaypalLogo} qrCode={FakeQrCode} info1='name: @Heimchurch' info2='Number: +1 (123) 456-7890'/>
        <PaymentMethod paymentName='Venmo' logo={VenmoLogo} qrCode={FakeQrCode} info1='name: @Heimchurch' info2='Number: +1 (123) 456-7890'/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
