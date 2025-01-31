import React from 'react'
import Ministry from '../components/Ministry'
import KidsPic1 from "../images/kids_heim_pic_1.jpeg"
import KidsPic2 from "../images/kids_heim_pic_2.jpeg"
import KidsPic3 from "../images/kids_heim_pic_4.jpeg"
import { KidsQuestions } from '../data/questions'
import Questions from '../components/Questions'
import { database } from '../data/ChurchDatabase'
import Footer from '../components/Footer'


export default function Kids() {

  return (
    <div>
      <div className="maximum-height">
        <Ministry name={database.ministries.Kids.name}
        picture1={KidsPic1}
        picture2={KidsPic2}
        picture4={KidsPic3}
        descriptionTitle1={database.ministries.Kids.descriptionTitle1}
        description1={database.ministries.Kids.description1}
        descriptionTitle2={database.ministries.Kids.descriptionTitle2}
        description2={database.ministries.Kids.description2}
        questions = {<Questions questions={KidsQuestions}/>}
        />
      </div>
      <Footer/>
    </div>
  )
}
