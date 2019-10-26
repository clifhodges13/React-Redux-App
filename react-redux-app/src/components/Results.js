import React from 'react'

import VideoCard from './VideoCard'

import { connect } from 'react-redux'
import { CircleSpinner } from 'react-spinners-kit'

function Results(props) {

  if(props.isLoading) {
    return (
      <div 
        style={{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          height: '90vh'
          }}>
          <CircleSpinner 
            size={80}
            color='#f4837d'
        />
      </div>
    )
  }

  return (
    <div className="results-container">
      <img src="https://www.videoconversionexperts.com/images/film-reel.png" alt="Film Reel" className={props.results ? "display-none" : "home-image"} />
      {props.results && 
        props.results.map((item, index) => {
          return <VideoCard item={item} key={index} />
        }) 
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    results: state.results,
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps)(Results)