import React from 'react'
import emailjs, { send } from '@emailjs/browser'
import { useState, useEffect } from 'react'
import { IoIosSend } from "react-icons/io";
import Footer from '../components/Footer';

export default function Ride() {

  const [rideRequest, setRideRequest] = useState({})

  const sendEmail = (e) => {
    e.preventDefault();
    try{
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID_FOR_RIDE, process.env.REACT_APP_TEMPLATE_ID_FOR_RIDE, e.target, process.env.REACT_APP_PUBLIC_KEY_FOR_RIDE);
      setRideRequest({});
      alert("ride request submitted");
    } catch (e){
      alert("ride request was not submitted. Please try again later.");
    }
  }

  const handleChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setRideRequest(values => ({...rideRequest, [name]: value}));
  }

  return (
    <>
    <div className='ride--container'>
      <form onSubmit={sendEmail}>

        <h1 style={{width: '100%', textAlign: 'center'}} className='blue-text'>Ride Request</h1>

        <label>Name/Non<span style={{color: 'red'}}>*</span></label>
          <div>
            <input type='text' name='first_name' value={rideRequest.first_name || ''} onChange={handleChange} placeholder='First Name' className='regular-input-height regular-input-width' required></input>
            <input type='text' name='last_name' value={rideRequest.last_name || ''} onChange={handleChange} placeholder='Last Name' className='regular-input-height regular-input-width' required></input>
          </div>

        <label>Email<span style={{color: 'red'}}>*</span></label>
        <input type='email' name='email' value={rideRequest.email || ''} onChange={handleChange} className='regular-input-height regular-input-width' required></input>

        <label>Phone/telefòn<span style={{color: 'red'}}>*</span></label>
        <input type='text' name='phone' value={rideRequest.phone || ''} onChange={handleChange} className='regular-input-height regular-input-width' required></input>

        <label>Address/adrès<span style={{color: 'red'}}>*</span></label>
        <div>
          <input type='text' name='street_address' value={rideRequest.street_address || ''} onChange={handleChange}  placeholder='Street Address' className='regular-input-height regular-input-width' required></input>
          <input type='text' name='city' value={rideRequest.city || ''} onChange={handleChange}  placeholder='City' className='regular-input-height' required></input>
          <input type='text' name='state' value={rideRequest.state || ''} onChange={handleChange}  placeholder="State (eg. 'DE')" className='regular-input-height' required></input>
          <input type='text' name='zip_code' value={rideRequest.zip_code || ''} onChange={handleChange}  placeholder="Zip" className='regular-input-height' required></input>
        </div>

        <label>Ride request date/Dat demann woulib<span style={{color: 'red'}}>*</span></label>
        <input type='date' name='date' value={rideRequest.date} onChange={handleChange} min={new Date().toJSON().slice(0, 10)} required></input>

        <label>Number of people/Kantite moun<span style={{color: 'red'}}>*</span></label>
        <input type='number' name='number_of_people' value={rideRequest.number_of_people} onChange={handleChange} min={1} max={10} required></input>

        <label>Anything else we need to know?/Nenpòt lòt bagay nou bezwen konnen?</label>
        <textarea onChange={handleChange} name='additional_information' value={rideRequest.additional_information} placeholder='type it here...'></textarea>

        <button onSubmit={sendEmail} className='blue-background underlined' style={{width: 'fit-content', display: 'flex', justifyContent: 'center', margin: '0 auto', marginTop: '20px'}}>
        Submit Ride Request <IoIosSend style={{ marginLeft: '8px' }} />
        </button>

      </form>

      <div style={{ marginTop: "20px", textAlign: "center", fontSize: "14px", color: "#555" }}>
        <p>
          Ride requests are not finalized until you receive a confirmation email or text with your estimated pickup time.  
          If you do not receive confirmation, your ride has not been scheduled. 
        </p>
    </div>
    </div>
    <Footer/>
    </>
  )
}