import React from 'react'
import Footer from '../components/Footer'
import outsideChurchPic from '../images/church-outside-picture.png'
import { useState, useEffect } from 'react';
import Questions from '../components/Questions';
import { AboutQuestions } from '../data/questions';

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
      {<Questions questions={AboutQuestions}/>}
      </div>
    </div>
    <Footer/>
    </>
  )
}
