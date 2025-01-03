import React from 'react'
import Ministry from '../components/Ministry'
import KidsRoomPic1 from "../images/kids_room_1.jpeg"
import KidsRoomPic2 from "../images/kids_room_2.jpeg"
import KidsRoomPic3 from "../images/kids_room_3.jpeg"


export default function Kids() {
  return (
    <div>
        <Ministry name='Kids'
        picture1={KidsRoomPic1}
        picture2={KidsRoomPic2}
        picture4={KidsRoomPic3}
        descriptionTitle1='About Kids Ministry'
        description1='At HEIM Church, we are committed to helping children grow in their faith in a fun and safe environment. We offer a special service just for kids aged 13 and under, led by caring and experienced instructors. This allows parents to focus on the regular service while their children enjoy a program designed just for them.' 
        descriptionTitle2='Our Goals' 
        description2='Our Kids Ministry is all about helping children learn about God in a way that makes sense to them. We want them to build strong friendships, discover how to read and explore the Bible, and learn songs that help them praise God. To make their time enjoyable, we’ve created a welcoming space filled with books, games, iPads, and plenty of fun activities. At HEIM Church, we’re here to help every child grow in their love for God while having a great time doing it.'/>
    </div>
  )
}
