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
        <h3 style={{textAlign: 'center'}}>{eventDay}</h3>
        </div>
    </div>
    <h2 style={{paddingTop: '15px'}} >{eventName}</h2>
    <div style={{paddingTop: '5px'}}>{eventDescription}</div>
    </div>
  )
}
