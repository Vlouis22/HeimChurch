import Ministry from "../components/Ministry";
import YouthPicture1 from "../images/heim_youth_pic_1.JPG";
import YouthPicture2 from "../images/heim_youth_pic_3.jpg";
import YouthPicture3 from "../images/heim_youth_bible_study.jpg";
import YouthLeaders from "../images/youth_leaders.jpeg";
import YouthLeadersInCreole from "../images/youth_leaders_creole.jpeg";
import { YouthQuestions } from "../data/questions";
import React from 'react'
import Questions from "../components/Questions";
import { database } from "../data/ChurchDatabase";
import Footer from "../components/Footer";
import { getLanguage } from "../data/language";

export default function Youth() {

  let YouthLeadersPicture = (getLanguage() == "English") ? YouthLeaders : YouthLeadersInCreole; 

  return (
    <div>
      <div className="maximum-height">
        <Ministry 
          name={database.ministries.Youth.name} 
          picture1={YouthPicture1} 
          picture2={YouthPicture2} 
          picture3={YouthPicture3} 
          picture4={YouthLeadersPicture}
          descriptionTitle1={database.ministries.Youth.descriptionTitle1} description1={database.ministries.Youth.description1}
          descriptionTitle2={database.ministries.Youth.descriptionTitle2} description2={database.ministries.Youth.description2}
          descriptionTitle3={database.ministries.Youth.descriptionTitle3} description3={database.ministries.Youth.description3}
          questions={<Questions questions={YouthQuestions}/>}
        />
      </div>
      <Footer/>
    </div>
  )
}
