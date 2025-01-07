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

const churchImageBackground = 'https://i.postimg.cc/nrJz4FrF/churchphoto1.jpg'

export default function Home() {

  const faceBookLink = 'https://www.facebook.com/people/HEIM-Church-LIVE/61553576407518/?mibextid=wwXIfr&rdid=cex9k3X5IaFQuv5Y&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EGnJNCVKr%2F%3Fmibextid%3DwwXIfr';
  const instagramLink = 'https://www.instagram.com/heim_church/?igsh=N3dqOGN6NXFkYWc%3D';
  const youtubeLink  = 'https://www.youtube.com/@heimchurch3540';


  const backgroundStyle = {
    backgroundImage: `url(${churchImageBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    backgroundColor: 'black', 
  };

  return (
    <div className='home'>

      <div className='home-pg1-container' style={backgroundStyle}>
        <div className='centered'>
          <div className='white-text abril-fatface-regular size-very-large welcome-to' >WELCOME TO</div>
          <div className='white-text size-large roboto-regular welcome-to-heim-church'>HEIM CHURCH</div>
          <div className='home-button-container'>
            <RegularButton color='white' bgcolor='blue' text='WATCH LIVE' width={150} height={50} to='Watchlive'/>
            <RegularButton color='white' bgcolor='blue' text='GIVE' width={150} height={50} to='Offering'/>
          </div>
        </div>
      </div>

      <div className='home-pg2-container'>
        <h1 className="roboto-bold size-medium">Coming Up At HEIM Church</h1>
        <EventsContainer/>
        <RegularButton color='white' bgcolor='blue' text='VIEW CALENDAR' width={200} height={80} to='Calendar'/>
      </div>

      <div className='home-pg3-container'>
        <div className='home-pg3-container-1'>
          <AboutUs to='About'/>
          <LinkContainers 
            title="Follow Us" 
            isIcons={true} icons={[<Instagram/>, <Facebook/>, <Youtube/>]} 
            links={['Instagram', 'Facebook', 'Youtube']} 
            to={[instagramLink, faceBookLink, youtubeLink]}
          />
        </div>

        <div className='home-pg3-container-1'>
          <Request title="In Need Of A Prayer?" width='500px' height='275px' buttonText='Request Prayer' image={prayer_request} to='Prayer'/>
          <LinkContainers title="Get Involved"  
            icons={[]}
            links={['Giving', 'Groups']}
            to={['Offering', 'Others']}
          />
        </div>
        
        <div className='home-pg3-container-1'>
          <Request title="In Need Of A Ride?" width='500px' height='275px' image={churchvan} buttonText='Request Ride' to='Ride' alt='picture of a van'/>
          <Request title="Are you interested in Getting Baptized?" buttonText='Learn More' to='Baptizing' alt='picture of a person praying'/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
