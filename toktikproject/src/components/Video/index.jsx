import React from 'react'
import { ActionBar } from "../ActionBar";
import { Description } from "../Description";

export const Video = ({ source }) => {
  return (
    <div className='container' >
      <img src={source} alt="video" />
      <ActionBar profileImg={"https://picsum.photos/200"} likesCount={10} commentsCount={2} sharesCount={1} />
      <Description />
    </div>
  )
}
