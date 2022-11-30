import React from 'react'

import { Comment } from "../comment";

import "./styles.css"

export const Comments = ({ comments }) => {
  return (
    <ul className='comments' >
      <Comment profilePic={"https://picsum.photos/50"} content="Hola!!!" likes="1" user="LeoCode0" date="Hace 2 horas" />
      <Comment profilePic={"https://picsum.photos/50"} content="Hola!!!" likes="1" user="LeoCode0" date="Hace 2 horas" />
      <Comment profilePic={"https://picsum.photos/50"} content="Hola!!!" likes="1" user="LeoCode0" date="Hace 2 horas" />
    </ul>
  )
}
