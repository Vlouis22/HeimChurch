import React from 'react'
import FooterTextHolder from './FooterTextHolder'
import RegularButton from './RegularButton'
import Socials from './Socials'

export default function Footer() {

  return (
    <footer className='white-text'>
      <div>
        <div className='footer-text-container'>
          <FooterTextHolder title='Sunday Morning' description='11:00am service - in person & online'/>
          <FooterTextHolder title='Visit Us' description='3540 peachtree run Dover, DE 19901 United States'/>
        </div>
        <div className='smaller-footer-text-container'>
          <div>
            <div className='footer-button-container'>
              <RegularButton color='black' bgcolor='white' text='CONTACT US' width={120} height={40} to='Contact'/>
            </div>
            <div className='footer-button-container'>
              <RegularButton color='black' bgcolor='white' text='WATCH LIVE' width={120} height={40} to='Watchlive' />
            </div>
          </div>
          <div>
            <div className='footer-button-container'>
              <RegularButton color='black' bgcolor='white' text='GIVE' width={120} height={40} to='Offering'/>  
            </div>
            <div className='footer-socials footer-button-container' width={120} ><Socials color='white' size={28} blackIcon={true}/></div>
          </div>
        </div>
        <div className='all-rights-reserved'><p>&copy;2024 By <b>HEIM Church</b> | All Rights Reserved</p></div>
      </div>
    </footer>
  )
}
