import Ministry from "../components/Ministry";
import YouthPicture1 from "../images/heim_youth_pic_1.JPG";
import YouthPicture2 from "../images/heim_youth_pic_3.jpg";
import YouthPicture3 from "../images/heim_youth_bible_study.jpg";
import YouthLeaders from "../images/youth_leaders.jpeg";
import { YouthQuestions } from "../data/questions";
import React from 'react'
import Questions from "../components/Questions";
import { database } from "../data/ChurchDatabase";

export default function Youth() {

  let language = database

  return (
    <div>
      <Ministry 
        name={language.ministries.Youth.name} 
        picture1={YouthPicture1} 
        picture2={YouthPicture2} 
        picture3={YouthPicture3} 
        picture4={YouthLeaders}
        descriptionTitle1={language.ministries.Youth.descriptionTitle1} description1={language.ministries.Youth.description1}
        descriptionTitle2={language.ministries.Youth.descriptionTitle2} description2={language.ministries.Youth.description2}
        descriptionTitle3={language.ministries.Youth.descriptionTitle3} description3={language.ministries.Youth.description3}
        questions={<Questions questions={YouthQuestions}/>}
      />
    </div>
  )
}
