import React from 'react';
import Footer from '../components/Footer';
import { database } from '../data/ChurchDatabase';

export default function Contact() {

  let language = database

  return (
    <>
    <div className='page'>
      <div className='contact--container'>
        <div style={{ width: '100%', textAlign: 'center', fontSize: '38px', marginBottom: '3rem' }} className='blue-text bold'>
          {language.contact.title}
        </div>

        <div className='contact-section'>
          <h2 className='contact-heading'>{language.contact['ride-request']}</h2>
          <p className='contact-info'>
            {language.contact.email}: <a href="mailto:heimchurchtransportation@gmail.com">heimchurchtransportation@gmail.com</a>
          </p>
        </div>

        <div className='contact-section'>
          <h2 className='contact-heading'>{language.contact['prayer-request']}</h2>
          <p className='contact-info'>
          {language.contact.email}: <a href="mailto:heimchurchprayer@gmail.com">heimchurchprayer@gmail.com</a>
          </p>
        </div>

        <div className='contact-section'>
          <h2 className='contact-heading'>{language.contact['website-inquiry']}</h2>
          <p className='contact-info'>
          {language.contact.email}: <a href="mailto:heimchurchweb@gmail.com">heimchurchweb@gmail.com</a>
          </p>
        </div>

        <div className='contact-section'>
          <h2 className='contact-heading'>{language.contact['general-inquiry']}</h2>
          <p className='contact-info'>
          {language.contact.phone}: <a href="tel:+13026703007">+1 (302) 535-8307</a>
          </p>
          <p className='contact-info'>
          {language.contact.email}: <a href="mailto:heimchurch3540@gmail.com">Heimchurch3540@gmail.com</a>
          </p>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}