import React from 'react'

export default function VideoCard({ item }) {
  return (
    <div className="youtube-card">
      <img className="video-thumbnail" src={item.snippet.thumbnails && item.snippet.thumbnails.default.url} alt={item.snippet.title} />
      <div className="video-text">
        <h3>{item.snippet.title}</h3>
        <p>{item.snippet.description.substring(0, 250)}</p>
      </div>
    </div>
  )
}
