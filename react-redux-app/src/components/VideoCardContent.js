import React from 'react'

export default function VideoCardContent(props) {

  const handleClick = e => {
    e.preventDefault()
    props.openVideo(props.currentVid)
  }

  return (
    <div className="youtube-card" onClick={handleClick}>
      <img className="video-thumbnail" src={props.item.snippet.thumbnails && props.item.snippet.thumbnails.default.url} alt={props.item.snippet.title} />
      <div className="video-text">
        <h3>{props.item.snippet.title}</h3>
        <p>{props.item.snippet.description.substring(0, 250)}</p>
      </div>
    </div>
  )
}
