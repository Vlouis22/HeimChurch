import React from 'react';
import Footer from '../components/Footer';
import Questions from '../components/Questions';
import { OtherGroupsQuestions } from '../data/questions';
import { database } from '../data/ChurchDatabase';


export default function Others() {

  let language = database

  return (
    <>
    <div className='maximum-height'>
      <div className="others--ministry--container">
        <div className="header-text blue-text bold">
          {language.ministries.Others.mainTitle}
        </div>

        <div className="others-introduction">
          <div className="others-introduction-title">{language.ministries.Others.subtitle}</div>
          <p className="others-introduction-text">
            {language.ministries.Others['subtitle-description']}
          </p>
        </div>
          {<Questions questions={OtherGroupsQuestions} bgColor={'clear'}/>}
      </div>
      </div>
      <Footer />
    </>
  );
}