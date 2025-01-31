import React from 'react'
import Footer from '../components/Footer'
import { database } from '../data/ChurchDatabase'

export default function Calendar() {

  return (
    <>
    <div className='heim-church-calendar'>
      <div className='roboto-bold heim-calendar-text'>{database.calendar.title}</div>
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&src=M2Y1ZDcxOGIzOTk3OTY0MzJkZjdkNDU4ZmQxNzdkMTU4MTZiMTBjODUwM2I5ZTIyZjhkNDhjMWE0ZWY2ZDk0NUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F09300" style={{border:"solid 1px #777"}} width="1000" height="750" frameborder="0" scrolling="no"></iframe>    
    </div>
    <Footer/>
    </>
  )
}
