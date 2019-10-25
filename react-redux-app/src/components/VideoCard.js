import React from 'react'
import { Link } from 'react-router-dom'

export default function VideoCard({ item }) {
  const vidUrl = `/${item.id.videoId}`
  return (
    <Link to={vidUrl} style={{textDecoration: 'none'}}>
      <div className="youtube-card">
        <img className="video-thumbnail" src={item.snippet.thumbnails && item.snippet.thumbnails.default.url} alt={item.snippet.title} />
        <div className="video-text">
          <h3>{item.snippet.title}</h3>
          <p>{item.snippet.description.substring(0, 250)}</p>
        </div>
      </div>
    </Link>
  )
}
