import React from 'react'
import Footer from '../components/Footer'
// import TextContainer from '../components/TextContainer'
// import Leader from '../components/Leader'
import outsideChurchPic from '../images/church-outside-picture.png'
import { useState, useEffect } from 'react';

export default function About() {

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = outsideChurchPic;
    img.onload = () => setIsImageLoaded(true);
  }, []);

  const backgroundImg = isImageLoaded
    ? {
        backgroundImage: `url(${outsideChurchPic})`,
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {
        backgroundColor: '#f0f0f0', 
        height: '100%',
      };

  return (
    <>
    <div className='about-page' style={backgroundImg}>
      <div className='about-page-container'>
        <div className='about-page-welcome size-medium bold montserrat'>Welcome to HEIM Church</div>
        {/* <div className='general-container about-text-container' style={{width: '100%'}}>
        <TextContainer title='Background' description='this description will contain information about the church background'/>
        <TextContainer title='Our Mission' description='this description will contain information about the church mission'/>
        <TextContainer title='Our Values' description='this description will contain information about the church values'/>
        </div> */}
        {/* <div className='meet-our-leaders-container'>
          <div className='meet-our-leaders-text bold montserrat' style={{fontSize: '20px'}}>Meet Our Leaders</div>
          <div className='meet-our-leaders-container-inside'>
            <Leader name='Leader name' description='leader description'/>
            <Leader name='Leader name' description='leader description'/>
            <Leader name='Leader name' description='leader description'/>
          </div>
        </div> */}
        <div className='frequently-asked-questions'>
          <div className='frequently-ask-questions-title bold montserrat' style={{fontSize: '20px'}}>Frequently Asked Questions</div>
          <div className='questions-container'>
              <div>
                <p><b>1. How can I get in touch with church leaders or members?</b></p>
                <p>You can reach out to our church leaders or members by <span className='blue-text underlined'><a href='/Contact'>clicking here</a></span>. There, you’ll find email addresses and phone numbers you can use to reach out to us. You’re also welcome to speak with someone in person after any of our services.</p>
              </div>
              <div>
                <p><b>2. Where are you located and when do you gather?</b></p>
                <p>Our church is located at 3540 Peachtree Run, Dover, DE 19901, United States. We gather every Sunday at 11:00 AM.</p>
              </div>
              <div>
              <p><b>3. What groups are available, and how can i join one?</b></p>
              <p>There are numerous groups you can join! Visit our Ministries section to explore the available groups and learn more about each one.</p>
              </div>
              <div>
              <p><b>4. Are there any Bible study sessions?</b></p>
              <p>Yes, we hold Bible study sessions every Wednesday at 6:30 PM. Everyone is welcome!</p>
              </div>
              <div>
              <p><b>5. How can I visit the church if I don't have a ride?</b></p>
              <p>We have transportation to and from church, fill out a ride request form if this will be your first time visiting the church.</p>
              </div>
              <div>
              <p><b>6. What do you have for young adults?</b></p>
              <p>If you're a young adult, we encourage you to join the youth ministry! We host a variety of activities, including Bible study sessions, social events, etc...</p>
              </div>
              <div>
              <p><b>7. I don't speak Haitian Creole, can I still visit?</b></p>
              <p>Absolutely! We would be delighted to have you visit. While our church services are primarily conducted in Haitian Creole, we also incorporate French and English throughout the service. Additionally, we provide translation services for your convenience.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
