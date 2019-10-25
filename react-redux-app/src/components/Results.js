import React from 'react'

import VideoCard from './VideoCard'

import { connect } from 'react-redux'

function Results(props) {
  return (
    <div className="results-container">
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
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Results)