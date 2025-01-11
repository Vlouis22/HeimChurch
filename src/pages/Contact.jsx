import React from 'react';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
    <div className='page'>
      <div className='contact--container'>
        <div style={{ width: '100%', textAlign: 'center', fontSize: '38px', marginBottom: '3rem' }} className='blue-text bold'>
          Ways To Contact Us
        </div>

        <div className='contact-section'>
          <h2 className='contact-heading'>Ride Requests</h2>
          <p className='contact-info'>
            Email: <a href="mailto:heimchurchtransportation@gmail.com">heimchurchtransportation@gmail.com</a>
          </p>
        </div>

        <div className='contact-section'>
          <h2 className='contact-heading'>Prayer Requests</h2>
          <p className='contact-info'>
            Email: <a href="mailto:heimchurchprayer@gmail.com">heimchurchprayer@gmail.com</a>
          </p>
        </div>

        <div className='contact-section'>
          <h2 className='contact-heading'>Website Inquiries</h2>
          <p className='contact-info'>
            Email: <a href="mailto:heimchurchweb@gmail.com">heimchurchweb@gmail.com</a>
          </p>
        </div>

        <div className='contact-section'>
          <h2 className='contact-heading'>General Inquiries</h2>
          <p className='contact-info'>
            Phone: <a href="tel:+13026703007">+1 (302) 535-8307</a>
          </p>
          <p className='contact-info'>
            Email: <a href="mailto:heimchurch3540@gmail.com">Heimchurch3540@gmail.com</a>
          </p>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}