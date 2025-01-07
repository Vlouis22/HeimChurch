import React from 'react'

export default function EventHolder({eventName, eventBackground, eventDay, eventMonth, eventDescription}) {

  if(eventName.length > 30){
    eventName = eventName.slice(0, 81) + '...';
  }

  return (
    <div className='grey-background rounded-border black-text home-page-event-placeholder'> 
    <div className='image-container'>
        <img src={eventBackground} className='event-holder-img' alt="Event background" />
        <div className='event-holder-day'>
        <p style={{textAlign: 'center'}}>{eventMonth}</p>
        <div style={{textAlign: 'center', fontWeight: '700', fontSize: '1.2rem'}}>{eventDay}</div>
        </div>
    </div>
    <div style={{paddingTop: '15px', fontWeight: '700', fontSize: '1.5rem'}} >{eventName}</div>
    <div style={{paddingTop: '5px'}}>{eventDescription}</div>
    </div>
  )
}
