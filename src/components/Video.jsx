import React from 'react'

export default function Video({videoId, title, url}) {

    const youtubeLink =  'https://www.youtube.com/watch?v=';
    const fullLink = youtubeLink + videoId;


  return (
    <div className='video-container'>
        <a target='_blank' href={fullLink}>
            <img className='video-image' src={url}></img>
            <div className='video-title'>{title}</div>
        </a>
    </div>
  )
}
