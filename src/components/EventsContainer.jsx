import React, { useEffect, useState } from 'react'
import EventHolder from './EventHolder';
import { createClient } from "@supabase/supabase-js";
import DefaultPicture from "../images/heimchurchlogo.JPG";

export default function EventsContainer() {

    const supabaseUrl = 'https://umkmlqwttydutvwgvrwn.supabase.co'
    const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
    console.log("this is the supabase key: ", supabaseKey)
    const supabase = createClient(supabaseUrl, supabaseKey);

    const [events, setEvents] = useState([]);
    
    useEffect(() => {
      async function getEvents() {
        let { data: HeimChurchEvents, error } = await supabase
          .from('HeimChurchEvents')
          .select('*');
    
        if (error) {
          console.error('Error fetching events:', error);
        } else {
          setEvents(HeimChurchEvents)
        }
      }
      getEvents();
    }, []);
    
    const upcomingEvents = events.map((obj => {
        return <EventHolder eventMonth={obj.eventMonth} eventDay={obj.eventDay} eventName={obj.eventName} eventDescription={obj.eventDescription} eventBackground={obj.eventBackgroundPicture? obj.eventBackgroundPicture : DefaultPicture}/>
    }))

  return (
    <div className='home-page-event-container light-grey-background rounded-border'>

        {events && upcomingEvents}    

    </div>
  )
}
