import React from 'react'
import ReactPlayer from 'react-player'
import ReactAudioPlayer from 'react-audio-player';
import '../static/admincontent.css'

export const VideoTile = () => {
  return (
      <div className='pagebody'>
        <div className='container-vid'>
      <iframe
        src={'http://localhost:5000/fw/video_feed?autoplay=0&mute=1'}
        allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen width="1500" height="700" controls>
        </iframe>

        {/* <video width="750" height="500" controls>
          <source src={require("http://localhost:5000/fw/video_feed")} type="video/mp4"></source>
        </video> */}

      {/* <ReactAudioPlayer
        src="http://localhost:5000/fw/video_feed"
        autoPlay
        controls
      /> */}
      </div>
    </div>
  )
}
