import React, { useEffect, useState } from 'react'
import EventHolder from './EventHolder';
import { createClient } from "@supabase/supabase-js";
import DefaultPicture from "../images/heimchurchlogo.JPG";
import { supabase } from '../utils/supabaseClient';

export default function EventsContainer() {

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
    
    const upcomingEvents = events.map((obj, i) => {
        return <EventHolder eventMonth={obj.eventMonth} eventDay={obj.eventDay} eventName={obj.eventName} eventDescription={obj.eventDescription} eventBackground={obj.eventBackgroundPicture? obj.eventBackgroundPicture : DefaultPicture} key={i}/>
    })

  return (
    <div className='home-page-event-container light-grey-background rounded-border'>

        {events && upcomingEvents}    

    </div>
  )
}
