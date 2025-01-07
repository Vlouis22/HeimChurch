import React from 'react';
import Footer from '../components/Footer';
import Questions from '../components/Questions';
import { OtherGroupsQuestions } from '../data/questions';


export default function Others() {
  return (
    <>
    <div className='maximum-height'>
      <div className="others--ministry--container">
        <div className="header-text blue-text bold">
          Other Groups/Ministries at HEIM Church
        </div>

        <div className="others-introduction">
          <div className="others-introduction-title">Find Your Community at HEIM Church</div>
          <p className="others-introduction-text">
            At HEIM Church, we offer a wide variety of ministries and groups designed to welcome everyone. 
            No matter your stage in life or the skills you bring, there’s a place for you here. These groups 
            are opportunities to build friendships, grow in faith, and make a difference. Whether you’re seeking 
            support, meaningful connections, or ways to serve, you’ll find something just right for you. 
            We invite you to join us and be a part of the vibrant HEIM Church community.
          </p>
        </div>
          {<Questions questions={OtherGroupsQuestions} bgColor={'clear'}/>}
      </div>
      </div>
      <Footer />
    </>
  );
}