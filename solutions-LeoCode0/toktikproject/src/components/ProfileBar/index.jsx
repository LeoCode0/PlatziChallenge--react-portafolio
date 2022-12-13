import React from 'react'

import "./styles.css"

export const ProfileBar = ({ name, img, followers, likes, following }) => {
  return (
    <div className='profileBar' >
      <img src="https://picsum.photos/50" alt="Profile pic" />
      <ul className='profileBar--list' >
        <li>
          <p className='profileBar--paragraph__semibold' >100</p>
          <p className='profileBar--paragraph__bold' >Followers</p>
        </li>
        <li>
          <p className='profileBar--paragraph__semibold' >300</p>
          <p className='profileBar--paragraph__bold' > Following</p>
        </li>
        <li>
          <p className='profileBar--paragraph__semibold' >50</p>
          <p className='profileBar--paragraph__bold'>Likes</p>
        </li>
      </ul>
    </div>
  )
}
