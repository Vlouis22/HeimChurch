import React from 'react'
import churchimage from '../images/churchphoto1.jpg'
import RegularButton from '../components/RegularButton'
import EventsContainer from '../components/EventsContainer'
import AboutUs from '../components/AboutUs'
import LinkContainers from '../components/LinkContainers'
import Facebook from '../components/Facebook'
import Youtube from '../components/Youtube'
import Instagram from '../components/Instagram'
import Request from '../components/Request'
import churchvan from '../images/churchvan.jpg'
import prayer_request from '../images/prayer_request.jpeg'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div className='home'>

      <div className='home-pg1-container'>
        <img src={churchimage} className='home-church-image'></img>
        <div className='centered'>
          <div className='white-text abril-fatface-regular size-very-large welcome-to' >WELCOME TO</div>
          <div className='white-text size-large roboto-regular'>HEIM CHURCH</div>
          <div className='home-button-container'>
            <RegularButton color='white' bgcolor='blue' text='WATCH LIVE' width={150} height={50}/>
            <RegularButton color='white' bgcolor='blue' text='GIVE' width={150} height={50}/>
          </div>
        </div>
      </div>

      <div className='home-pg2-container'>
        <h1 className="roboto-bold size-medium">Coming Up At HEIM Church</h1>
        <EventsContainer/>
        <RegularButton color='white' bgcolor='blue' text='VIEW CALENDAR' width={200} height={80}/>
      </div>

      <div className='home-pg3-container'>
        <div className='home-pg3-container-1'>
          <AboutUs/>
          <LinkContainers title="Follow Us" isIcons={true} icons={[<Instagram/>, <Facebook/>, <Youtube/>]} links={['Instagram', 'Facebook', 'Youtube']}/>
        </div>
        <div className='home-pg3-container-1'>
          <Request title="In Need Of A Prayer?" width='500px' height='275px' buttonText='Request Prayer' image={prayer_request} buttonLink=''/>
          <LinkContainers title="Get Involved"  icons={[]} links={['Giving', 'Groups']}/>
        </div>
        <div className='home-pg3-container-1'>
          <Request title="In Need Of A Ride?" width='500px' height='275px' image={churchvan} buttonText='Request Ride' buttonLink=''/>
          <Request title="Are you interested in Getting Baptized?" buttonText='Learn More' buttonLink=''/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
