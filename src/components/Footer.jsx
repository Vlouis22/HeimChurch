import React from 'react'
import FooterTextHolder from './FooterTextHolder'
import RegularButton from './RegularButton'
import Socials from './Socials'
import { database } from '../data/ChurchDatabase'

export default function Footer() {

  let language = database

  return (
    <footer className='white-text'>
      <div>
        <div className='footer-text-container'>
          <FooterTextHolder title={language.footer['text-container-1'].title} description={language.footer['text-container-1'].description} />
          <FooterTextHolder title={language.footer['text-container-2'].title} description='3540 Peachtree Run Dover, DE 19901, United States' />
        </div>
        <div className='smaller-footer-text-container'>
          <div>
            <div className='footer-button-container'>
              <RegularButton color='black' bgcolor='white' text={language.footer.buttons[0]} width={120} height={40} to='Contact' />
            </div>
            <div className='footer-button-container'>
              <RegularButton color='black' bgcolor='white' text={language.footer.buttons[1]} width={120} height={40} to='Watchlive' />
            </div>
          </div>
          <div>
            <div className='footer-button-container'>
              <RegularButton color='black' bgcolor='white' text={language.footer.buttons[2]} width={120} height={40} to='Offering' />
            </div>
            <div className='footer-socials footer-button-container' width={120} ><Socials color='white' size={28} blackIcon={true} /></div>
          </div>
        </div>
        <div className='all-rights-reserved'><p>&copy;2024 {language.footer.copyright['text-1']} <b>HEIM Church</b> | {language.footer.copyright['text-2']}</p></div>
      </div>
    </footer>
  )
}
