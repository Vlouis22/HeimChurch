import React, { useEffect, useState } from 'react'
import RegularButton from '../components/RegularButton';
import Video from '../components/Video.jsx';
import Footer from '../components/Footer.jsx';
import HeimChurchLogo from '../images/heimchurchlogo.JPG';
import { LuMessageSquare } from "react-icons/lu";
import {supabase} from '../utils/supabaseClient.js';
import { database } from '../data/ChurchDatabase.js';


export default function Watchlive() {

  let language = database
  
  const [isLive, setIsLive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const localStorageVideos= 'videoData';
  const localStorageLastAccessed = 'lastUpdated';

  let pageWidth = (document.documentElement.scrollWidth) * .6;
  let pageHeight = pageWidth * .562;

  const [isLoaded, setisLoaded] = useState(false);
  const [anErrorOccured, setAnErrorOccurred] = useState(false);
  const [data, setData] = useState({});

  let url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=${process.env.REACT_APP_church_uploads_id}&key=${process.env.REACT_APP_test_api_key}`;
  let source = `https://www.youtube.com/embed/live_stream?channel=${process.env.REACT_APP_church_channelId}`;
 
  useEffect(() => {

    let videos = JSON.parse(localStorage.getItem(localStorageVideos));
    let lastAccessed = JSON.parse(localStorage.getItem(localStorageLastAccessed));

    const date = new Date();
    let currentTime = date.getHours();

    // if found video in local storage that is not outdated, no need to get new videos
    if (videos != null){
      setData(videos)
      setisLoaded(true)
      // console.log(`loaded video from local storage. Last hour accessed: ${lastAccessed}`)
    }

    async function getRecordedVideos() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        const resultString = JSON.stringify(result.items);
        setData(result.items);
        setisLoaded(true);
        localStorage.setItem(localStorageVideos, resultString)
        localStorage.setItem(localStorageLastAccessed, JSON.stringify(currentTime));        
      } catch (error) {
        console.error('Error fetching data:', error);
        setAnErrorOccurred(true);
      }
    }

    if(lastAccessed == null || Math.abs(currentTime - lastAccessed) > 3 || videos == null){
      console.log('fetching latest videos available');
      getRecordedVideos();
    }
  }, []);

  // after receiving data for the videos, this function will be be used to render the videos 
  function displayVideos(videos){
    if(videos != null && videos && videos.length > 0){
      return videos.map((item, index) =>{
        return <div key={index}>
            <Video title={item.snippet.title} videoId={item.snippet.resourceId.videoId} url={item.snippet.thumbnails.maxres.url}/>
          </div>
      })
    }
  }

  function isSundayServiceHours(){
    const currentTime = new Date();
    let day = currentTime.getDay()

    if(day == 0){
      let timeOfDay = currentTime.getHours()
      if (timeOfDay >= 11 && timeOfDay <= 14){
        return true
      }
    }
    return false;
  }

  useEffect(() => {

    let isChurchLive = false;
    let lastupdated;

    const currentTime = new Date();

    if(isSundayServiceHours()){
      setIsLive(true)
      updateLiveStatusToDatabase(true)
    }

    async function getStatus(){

      let { data: churchLiveStatus, error } = await supabase
      .from('churchLiveStatus')
      .select('*')
      setIsLive(churchLiveStatus[0]);

      isChurchLive = churchLiveStatus[0].isLive;
      lastupdated = new Date(churchLiveStatus[0].lastUpdated);

      if (isChurchLive) {
        const fifteenMinutesInMilliseconds = 15 * 60 * 1000;
        if((currentTime - lastupdated) > fifteenMinutesInMilliseconds){
          // fetch for new status
          setIsLive(true);
          checkForLive();
        }
        else{
          // show the live
          setIsLive(true);
        }
      }
      else {
        const fiveMinutesInMilliseconds = 5 * 60 * 1000;
        if ((currentTime - lastupdated) > fiveMinutesInMilliseconds) {
          // need to check live status again
          setIsLive(false);
          checkForLive();
        }
        else {
          // show no live status 
          setIsLive(false);
          console.log("There are currently no live events")
        }
      }
    }
    if(!isSundayServiceHours()){
      getStatus();
    }

  }, []);

  async function checkForLive() {
    const apiKey = process.env.REACT_APP_test_api_key;
    const channelId = process.env.REACT_APP_church_channelId;

    // URL to fetch live broadcasts
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&eventType=live&key=${apiKey}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.items && data.items.length > 0) {
          updateLiveStatusToDatabase(true);
          setIsLive(true);
        } else {
          updateLiveStatusToDatabase(false);
          setIsLive(false);
        }
      })
      .catch(error => {
        console.error("Error fetching YouTube live status:", error);
        // setting is live to true if unable to fetch for new live status
        setIsLive(true);
      });
  }

  async function updateLiveStatusToDatabase(isLive) {
    const currentTime = new Date();
    const { data, error } = await supabase
    .from('churchLiveStatus')
    .update({ isLive: isLive, lastUpdated: currentTime})
    .eq('id', 1)
    .select()
  }

  const loader = (
    <div className='notLoading-container' style={{backgroundColor: 'black', height:pageHeight, width:pageWidth, display: "flex", justifyContent:'center', alignItems:'center'}}>
    <div className="loader--3">
    </div>
    </div>
  );

  function TurnNoLiveLoadingOff(){
    setIsLoading(false)
  }

  return (
    <>
    <div className='maximum-height'>
      <div className='live-and-upcominglive-container'>

      {!isLive && 
      (
        <>
        {isLoading ? loader : null}
        { 
          <div className={isLoading ? 'not-live-container notLoading' : 'not-live-container'}>
          <img
            src={HeimChurchLogo} 
            width={pageWidth} 
            height={pageHeight} 
            alt='HEIM Church logo'
            onLoad={() => TurnNoLiveLoadingOff()}
            onError={() => TurnNoLiveLoadingOff()} 
          />
        <div className='not-live-container-text'>
          <RegularButton text={<span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <LuMessageSquare style={{paddingLeft: '3px'}}/> {language.watchlive['prayer-button']}</span>} color="white" bgcolor="blue" width="150px" height="50px" to='Prayer'/>
        </div>
        </div>
        }
        
        </>
      )}
      
      {isLive && 
        (
        <>
          {isLoading ? loader : null}
          {
            <div className={isLoading ? 'notLoading' : ''}>
              <iframe 
              className='full-size-smaller-screen' 
              width={pageWidth} 
              height={pageHeight} 
              src={source} title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              onLoad={() => TurnNoLiveLoadingOff()}
              onError={() => TurnNoLiveLoadingOff()} 
              >
              </iframe>
            </div>
          }
        </>
        )
      }

      <div className='upcominglive-container'>
        <div className='upcominglive-container-child'>
          <div className='inter bold'>{language.watchlive.upcoming.title}</div>
          <RegularButton color='white' bgcolor='blue' text={language.watchlive.upcoming['button-text']} width={135} height={54} to='Calendar'/>
        </div>
      </div>
      </div>

      <div className='view-previous-lives'>
        <div className='inter bold'>{language.watchlive.pastEvents.title}</div>
        {isLoaded && <div className='view-previous-lives-videos-container'>{displayVideos(data)}</div>}
        {!isLoaded && !anErrorOccured &&  <div className='loader'></div>}
        {!isLoaded && anErrorOccured &&  <div className=''>{language.watchlive.pastEvents.errorMessage}</div>}
      </div>
      
    </div>
    <Footer/>
    </>
  )
}
