import React from 'react'
import Ministry from '../components/Ministry';
import picture1 from "../images/groupe_dame.jpg";
import WomensQuestions from '../components/WomensQuestions';

export default function Womens() {
  return (
    <div>
        <Ministry name='Womens' picture1={picture1} descriptionTitle1='About Womens ministry' description1="HEIM Church's Women’s Ministry is a vibrant community where women grow in faith, build lasting relationships, and serve the church and community. Every 3rd Sunday, the women lead the service in worship and fellowship. The Ministry provides opportunities for spiritual enrichment and connection, supporting one another through life’s challenges and serving together. Join us as we grow in Christ and support one another in love and unity." questions={<WomensQuestions/>}/>
    </div>
  )
}
