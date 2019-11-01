import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { openVideo } from '../actions'

// import VideoCardContent from './VideoCardContent'

function VideoCard(props) {

  const currentVid = props.item

  const handleClick = e => {
    e.preventDefault()
    props.openVideo(currentVid)
  }

  return (
    <div onClick={handleClick}>
      <Link to={`/${props.item.id.videoId}`}  style={{textDecoration: 'none', color: 'inherit'}}>
        <div className="youtube-card">
        <img className="video-thumbnail" src={props.item.snippet.thumbnails && props.item.snippet.thumbnails.default.url} alt={props.item.snippet.title} />
        <div className="video-text">
          <h3>{props.item.snippet.title}</h3>
          <p>{props.item.snippet.description.substring(0, 250)}</p>
        </div>
      </div>
      </Link>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    results: state.results
  }
}

const mapDispatchToProps = { openVideo }

export default connect(mapStateToProps, mapDispatchToProps)(VideoCard)