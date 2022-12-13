import React from 'react'

import { VideoGif } from "../VideoGif";

import "./styles.css"

export const VideoGrid = () => {
  return (
    <div className='videoGrid' >
      <ul className='videoGrid--list' >
        <li>
          <VideoGif />
        </li>
        <li>
          <VideoGif />
        </li>
        <li>
          <VideoGif />
        </li>
        <li>
          <VideoGif />
        </li>
        <li>
          <VideoGif />
        </li>
        <li>
          <VideoGif />
        </li>
        <li>
          <VideoGif />
        </li>
        <li>
          <VideoGif />
        </li>
        <li>
          <VideoGif />
        </li>
        <li>
          <VideoGif />
        </li>
      </ul>
    </div>
  )
}
