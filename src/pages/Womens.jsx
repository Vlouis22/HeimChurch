import React from 'react'
import Ministry from '../components/Ministry';
import picture1 from "../images/groupe_dame.jpg";
import { WomenQuestions } from '../data/questions';
import Questions from '../components/Questions';
import { database } from '../data/ChurchDatabase';

export default function Womens() {

  let language = database

  return (
    <div>
        <Ministry 
          name={language.ministries.Womens.name} 
          picture1={picture1} 
          descriptionTitle1={language.ministries.Womens.descriptionTitle1} 
          description1={language.ministries.Womens.description1}
          questions={<Questions questions={WomenQuestions}/>}
        />
    </div>
  )
}
