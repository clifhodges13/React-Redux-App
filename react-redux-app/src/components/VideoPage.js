import React from 'react'
import { connect } from 'react-redux'
import Button from './Button'

function VideoPage({ currentVid }) {

  const videoId = `https://www.youtube.com/embed/${currentVid && currentVid.id.videoId}`
  
  return (
    <div>

      {currentVid.snippet && 
        <div className="video-page-container">
          <iframe title={currentVid.snippet.title} src={videoId} className="video-page-video" />
          <div className="video-page-text">
            <h1>{currentVid.snippet.title}</h1>
            <p>{currentVid.snippet.description}</p>
          </div>
        </div>
      }

      <Button />
      
    </div>
  )
}

function mapStateToProps(state) {
  return {
    currentVid: state.currentVid
  }
}

export default connect(mapStateToProps)(VideoPage)