import React from 'react'
import Ministry from '../components/Ministry';
import picture1 from "../images/groupe_dame.jpg";
import { WomenQuestions } from '../data/questions';
import Questions from '../components/Questions';
import { database } from '../data/ChurchDatabase';
import Footer from '../components/Footer';
import { data } from 'react-router-dom';

export default function Womens() {

  return (
    <>
        <div className="maximum-height">
          <Ministry 
            name={database.ministries.Womens.name} 
            picture1={picture1} 
            descriptionTitle1={database.ministries.Womens.descriptionTitle1} 
            description1={database.ministries.Womens.description1}
            questions={<Questions questions={WomenQuestions}/>}
          />
        </div>
        <Footer/>
    </>
  )
}
