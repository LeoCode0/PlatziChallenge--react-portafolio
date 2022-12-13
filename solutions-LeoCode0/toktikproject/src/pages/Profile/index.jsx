import React from 'react'

import { ProfileBar } from "../../components/ProfileBar";
import { ProfileNavbar } from "../../components/ProfileNavbar";
import { VideoGrid } from "../../components/VideoGrid";

import "./styles.css"

export const Profile = () => {
  return (
    <div className='profile' >
      <ProfileBar />
      <ProfileNavbar />
      <VideoGrid />
    </div>
  )
}
