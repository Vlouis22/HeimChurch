import React, { useEffect, useState } from 'react'
import RegularButton from '../components/RegularButton';
import fakeData from './fakeData.js';
import Video from '../components/Video.jsx';
import Footer from '../components/Footer.jsx';
import HeimChurchLogo from '../images/heimchurchlogo.JPG'


export default function Watchlive() {

  const localStorageVideos= 'videoData';
  const localStorageLastAccessed = 'lastUpdated';

  let pageWidth = (document.documentElement.scrollWidth) * .6;
  let pageHeight = pageWidth * .61;

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

    if (videos != null){
      setData(videos)
      setisLoaded(true)
      console.log(`loaded video from local storage. Last hour accessed: ${lastAccessed}`)
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

  function displayVideos(videos){
    if(videos != null && videos && videos.length > 0){
      return videos.map((item, index) =>{
        return <div key={index}><Video title={item.snippet.title} videoId={item.snippet.resourceId.videoId} url={item.snippet.thumbnails.maxres.url}/></div>
      })
    }
  }

  return (
    <>
    <div  className='maximum-height'>
      <div className='live-and-upcominglive-container'>
      <iframe width={pageWidth} height={pageHeight} src={source} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <div className='upcominglive-container'>
          <div className='upcominglive-container-child'>
            <div className='inter bold'>Upcoming Live Streams</div>
            <RegularButton color='white' bgcolor='blue' text='VIEW CALENDAR' width={135} height={54} to='Calendar'/>
        </div>
        </div>
      </div>
        <div className='view-previous-lives'>
          <div className='inter bold'>View Recorded Live Events</div>
          {isLoaded && <div className='view-previous-lives-videos-container'>{displayVideos(data)}</div>}
          {!isLoaded && !anErrorOccured &&  <div className='loader'></div>}
          {!isLoaded && anErrorOccured &&  <div className=''>An unexpected error occured. Please try again later.</div>}
        </div>
    </div>
    <Footer/>
    </>
  )
}
