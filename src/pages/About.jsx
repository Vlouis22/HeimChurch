import React from 'react'
import Footer from '../components/Footer'
import TextContainer from '../components/TextContainer'
import Leader from '../components/Leader'
import outsideChurchPic from '../images/church-outside-picture.png'

export default function About() {

  const backgroundImg = {
    backgroundImage: `url(${outsideChurchPic})`, 
    height: '100%', 
    backgroundSize: 'cover', 
  }

  return (
    <div className='about-page' style={backgroundImg}>
      <div className='about-page-container'>
        <div className='about-page-welcome size-medium bold montserrat'>Welcome to HEIM Church</div>
        <div className='general-container about-text-container' style={{width: '100%'}}>
        <TextContainer title='Background' description='this description will contain information about the church background'/>
        <TextContainer title='Our Mission' description='this description will contain information about the church mission'/>
        <TextContainer title='Our Values' description='this description will contain information about the church values'/>
        </div>
        <div className='meet-our-leaders-container'>
          <div className='meet-our-leaders-text bold montserrat' style={{fontSize: '20px'}}>Meet Our Leaders</div>
          <div className='meet-our-leaders-container-inside'>
            <Leader name='Leader name' description='leader description'/>
            <Leader name='Leader name' description='leader description'/>
            <Leader name='Leader name' description='leader description'/>
          </div>
        </div>
        <div className='frequently-asked-questions'>
          <div className='frequently-ask-questions-title bold montserrat' style={{fontSize: '20px'}}>Frequently Asked Questions</div>
          <div className='questions-container'>
              <div>
                <p><b>1. How can I get in touch with church leaders or members?</b></p>
                <p>You can reach out to our church leaders or members by <span className='blue-text underlined'>clicking here</span>. There, you’ll find email addresses and phone numbers you can use to reach out to us. You’re also welcome to speak with someone in person after any of our services.</p>
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
          </div>

        </div>
      </div>
      <Footer/>
    </div>
  )
}
