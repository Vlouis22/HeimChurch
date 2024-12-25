import Ministry from "../components/Ministry";
import YouthPicture1 from "../images/heim_youth_pic_1.JPG";
import YouthPicture2 from "../images/heim_youth_pic_3.jpg";
import YouthPicture3 from "../images/heim_youth_bible_study.jpg";
import YouthLeaders from "../images/youth_leaders.jpeg";
import YouthQuestions from "../components/YouthQuestions";

import React from 'react'

export default function Youth() {
  return (
    <div>
        <Ministry name='Youth' picture1={YouthPicture1} picture2={YouthPicture2} picture3={YouthPicture3} picture4={YouthLeaders}
        descriptionTitle1='About HEIM Youth' description1="Welcome to the Youth Page of HEIM Church! This is where our youth can come together to grow in faith, share experiences, and build lifelong friendships. Our mission is to create a space where young people can deepen their relationship with God, develop meaningful friendships, and make a difference in the world.
We have plenty of events, Bible studies, and service opportunities, so check back often to see what’s coming up next!"
        descriptionTitle2='Our Goals' description2='Our goal is to help and encourage each other as we grow together in faith. We desire to serve the Lord daily. Anyone between the age of 14 to 29 can join our youth. We plan many spiritual and social activities every month and lead the church morning service every second Sunday of the month.'
        descriptionTitle3='Bible Study' description3='Our Young Adults group gathers every Wednesday from 6:30 PM to 8:00 PM for an engaging time of fellowship and spiritual growth. Each Bible Study night includes a devotional centered on a portion of the reading plan, led by Sadrac Danjoint or one of our group members. Join us for meaningful discussions and encouragement!'
        questions={<YouthQuestions/>}
        />
    </div>
  )
}
