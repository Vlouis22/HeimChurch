import React from 'react'
import emailjs, { send } from '@emailjs/browser'
import { useState, useEffect } from 'react'
import { IoIosSend } from "react-icons/io";
import Footer from '../components/Footer';


export default function Prayer() {

  const [prayerRequest, setPrayerRequest] = useState({})

  const sendEmail = (e) => {
    e.preventDefault();
    try{
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID_FOR_PRAYER, process.env.REACT_APP_TEMPLATE_ID_FOR_PRAYER, e.target, process.env.REACT_APP_PUBLIC_KEY_FOR_PRAYER);
      setPrayerRequest({});
      alert("prayer request submitted");
    } catch (e){
      alert("prayer request was not submitted. Please try again later.");
    }
  }

  const handleChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setPrayerRequest(values => ({...prayerRequest, [name]: value}));
  }


  return (
    <>
    <div className='prayer--container'>
      <form onSubmit={sendEmail}>

        <h1 style={{width: '100%', textAlign: 'center'}} className='blue-text'>Prayer Request</h1>

        <label>Name/Non<span style={{color: 'red'}}>*</span></label>
          <div>
            <input type='text' name='first_name' value={prayerRequest.first_name || ''} onChange={handleChange} placeholder='First Name' className='regular-input-height regular-input-width' required></input>
            <input type='text' name='last_name' value={prayerRequest.last_name || ''} onChange={handleChange} placeholder='Last Name' className='regular-input-height regular-input-width' required></input>
          </div>

        <label>Email<span style={{color: 'red'}}>*</span></label>
        <input type='email' name='email' value={prayerRequest.email || ''} onChange={handleChange} className='regular-input-height regular-input-width' required></input>

        <label>Phone/telefòn<span style={{color: 'red'}}>*</span></label>
        <input type='text' name='phone' value={prayerRequest.phone || ''} onChange={handleChange} className='regular-input-height regular-input-width' required></input>

        <label>Address/adrès <span style={{fontWeight: 300}}>(optional)</span></label>
        <div>
          <input type='text' name='street_address' value={prayerRequest.street_address || ''} onChange={handleChange}  placeholder='Street Address' className='regular-input-height regular-input-width'></input>
          <input type='text' name='city' value={prayerRequest.city || ''} onChange={handleChange}  placeholder='City' className='regular-input-height'></input>
          <input type='text' name='state' value={prayerRequest.state || ''} onChange={handleChange}  placeholder="State (eg. 'DE')" className='regular-input-height'></input>
          <input type='text' name='zip_code' value={prayerRequest.zip_code || ''} onChange={handleChange}  placeholder="Zip" className='regular-input-height'></input>
        </div>

        <label>Prayer Request/demann lapriyè<span style={{color: 'red'}}>*</span></label>
        <textarea onChange={handleChange} name='prayer_request' value={prayerRequest.prayer_request}></textarea>

        <button onSubmit={sendEmail} className='blue-background underlined' style={{width: 'fit-content', display: 'flex', justifyContent: 'center', margin: '0 auto', marginTop: '20px'}}>
        Submit Prayer Request <IoIosSend style={{ marginLeft: '8px' }} />
        </button>
      </form>
    </div>
    <Footer/>
    </>
  )
}
