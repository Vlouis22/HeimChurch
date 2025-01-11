import React, { useEffect, useState } from 'react'
import EventHolder from './EventHolder';
import DefaultPicture from "../images/heimchurchlogo.JPG";
import { supabase } from '../utils/supabaseClient';

export default function EventsContainer() {

    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
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

      let date = new Date(obj.eventDate);
      let month = getMonth(date.getMonth());
      let day = date.getDate();

      if(obj.eventName == "Church Service" && events){
        console.log(obj)
        const eventsLength = events.length;
        const eventsNeeded = 4 - eventsLength > 0 ? 4 - eventsLength : 0;
        const currentDate = new Date(obj.eventDate)
        updateDateToDatabase(obj, currentDate);
        regularEvents(events[i], currentDate, eventsNeeded)
      }
      return <EventHolder eventMonth={month} eventDay={day} eventName={obj.eventName} eventDescription={obj.eventDescription} eventBackground={obj.eventBackgroundPicture? obj.eventBackgroundPicture : DefaultPicture} key={i}/>
    
    })

    async function updateDateToDatabase(currentEvent, eventDate){
      
      if(currentEvent){

        const currentDate = new Date();

        if (currentDate > eventDate) {

          var date = new Date(eventDate);
          date.setDate(date.getDate() + 7 )

          let month = date.getMonth()+1
          month = month <= 9 ? `0${month}` : month;
          let day = date.getDate();
          day = day <= 9 ? `0${day}`: day;
          let year = date.getFullYear();
          let nextSunday = `${month}-${day}-${year}`            

          const { data, error } = await supabase
          .from('HeimChurchEvents')
          .update({eventDate: nextSunday})
          .order('id', { ascending: true })
          .limit(1)
          .select()

          if (error) {
            console.error('Error updating HeimChurchEvents:', error.message);
        } else {
            console.log('Update successful:', data);
        }        
        }
      }
    }

    function regularEvents (currentEvent, currentDate, numberOfEventsToGenerate){
      
      for(let i = 1; i < numberOfEventsToGenerate+1; i++){

        var date = new Date(currentDate);
        date.setDate(date.getDate() + (7 * i) )

        let month = getMonth(date.getMonth());
        let day = date.getDate();
        let year = date.getFullYear();

        const newEvent = {
            eventName: currentEvent.eventName,
            eventDescription: currentEvent.eventDescription,
            eventBackgroundPicture: currentEvent.eventBackgroundPicture,
            eventDate: `${month}-${day}-${year}`
        }
        setEvents(events => [...events, newEvent])
        setIsLoading(false);
        console.log(events)
        const sortedEvents = events.sort((event1, event2) => (new Date(event1.eventDate) - new Date(event2.eventDate)));
        console.log(`sorted events: ${[...sortedEvents]}`)
        console.log(events)
      }      
    }

    function getMonth(monthNumber){
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return months[monthNumber];
    }

  return (
    <div className='home-page-event-container light-grey-background rounded-border'>

        {events && upcomingEvents}    

    </div>
  )
}
