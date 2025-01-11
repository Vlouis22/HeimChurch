import React, { useEffect, useState } from 'react'
import EventHolder from './EventHolder';
import DefaultPicture from "../images/heimchurchlogo.JPG";
import { supabase } from '../utils/supabaseClient';

export default function EventsContainer() {

    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [RegularChurchServiceName, setRegularChurchServiceName] = useState();
    
    useEffect(() => {
      // gets all the upcoming events that are stored in the database
      async function getEvents() {
        let { data: HeimChurchEvents, error } = await supabase
          .from('HeimChurchEvents')
          .select('*');
    
        if (error) {
          console.error('Error fetching events:', error);
        } else {
          setEvents(HeimChurchEvents)
          setRegularChurchServiceName(HeimChurchEvents[0].eventName)
        }
      }
      getEvents();
    }, []);
    
    const upcomingEvents = events.map((obj, i) => {

      // let date = new Date(obj.eventDate);
      let date = new Date(Date.parse(obj.eventDate));

      let month = getMonth(date.getMonth());
      let day = date.getDate();

      // If the event is a regular church service, additional related events will be created as needed.
      if(obj.eventName == "Church Service" && events){
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
          date.setDate(date.getDate() + 7)

          // formatting the new date that will be sent to the database
          let month = date.getMonth()+1
          month = month <= 9 ? `0${month}` : month;
          let day = date.getDate();
          day = day <= 9 ? `0${day}`: day;
          let year = date.getFullYear();
          let nextSunday = `${month}/${day}/${year}`;

          // sends the new update to the database
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

    /*
    * when there is less than 4 upcoming events, 
    * this function is called to fill the events container with regular church services
    */

    function regularEvents (currentEvent, currentDate, numberOfEventsToGenerate){

      for(let i = 1; i < numberOfEventsToGenerate+1; i++){

        var date = new Date(currentDate);
        date.setDate(date.getDate() + (7 * i) )
        console.log(`current date test is : ${date}`)


        let month = date.getMonth()+1;
        month = month <= 9 ? `0${month}` : month
        let day = date.getDate();
        day = day <= 9 ? `0${day}` : day

        let year = date.getFullYear();

        const newEvent = {
            eventName: currentEvent.eventName,
            eventDescription: currentEvent.eventDescription,
            eventBackgroundPicture: currentEvent.eventBackgroundPicture,
            eventDate: `${year}/${month}/${day}`
        }
        setEvents(events => [...events, newEvent])
        setIsLoading(false);
        // console.log(events)
        // const sortedEvents = events.sort((event1, event2) => (new Date(event1.eventDate) - new Date(event2.eventDate)));
        // console.log(`sorted events: ${[...sortedEvents]}`)
      }      
    }

    // returns the month corresponding to the month number
    function getMonth(monthNumber){
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return months[monthNumber];
    }

    const loader = (
      <div className='loading-events'></div>   
    )

  useEffect(()=>{
      console.log([...events])
  }, [events] )

  return (
    <div 
      className='home-page-event-container light-grey-background rounded-border'
      style={{minHeight: '400px'}}
    >

        {!isLoading && events && upcomingEvents}    
        {isLoading && loader}

    </div>
  )
}
