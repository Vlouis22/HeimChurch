import React from 'react';
import Footer from '../components/Footer';
import { database } from '../data/ChurchDatabase';
import { data } from 'react-router-dom';
import Map from '../components/Map';

export default function Contact() {

  return (
    <>
    <div className='page'>

      <div style={{ width: '100%', textAlign: 'center', fontSize: '38px', marginBottom: '1.5rem' }} className='blue-text bold contact-headers'>
        {database.contact.title}
      </div>

      <div className='contact--container'>

        <div className='contact-section'>
          <h2 className='contact-heading'>{database.contact['ride-request']}</h2>
          <p className='contact-info'>
            {database.contact.email}: <a href="mailto:heimchurchtransportation@gmail.com">heimchurchtransportation@gmail.com</a>
          </p>
        </div>

        <div className='contact-section'>
          <h2 className='contact-heading'>{database.contact['prayer-request']}</h2>
          <p className='contact-info'>
          {database.contact.email}: <a href="mailto:heimchurchprayer@gmail.com">heimchurchprayer@gmail.com</a>
          </p>
        </div>

        <div className='contact-section'>
          <h2 className='contact-heading'>{database.contact['website-inquiry']}</h2>
          <p className='contact-info'>
          {database.contact.email}: <a href="mailto:heimchurchweb@gmail.com">heimchurchweb@gmail.com</a>
          </p>
        </div>

        <div className='contact-section'>
          <h2 className='contact-heading'>{database.contact['general-inquiry']}</h2>
          <p className='contact-info'>
          {database.contact.phone}: <a href="tel:+13026703007">+1 (302) 535-8307</a>
          </p>
          <p className='contact-info'>
          {database.contact.email}: <a href="mailto:heimchurch3540@gmail.com">Heimchurch3540@gmail.com</a>
          </p>
        </div>
      </div>
      <Map/>
      </div>
      <Footer />
    </>
  );
}