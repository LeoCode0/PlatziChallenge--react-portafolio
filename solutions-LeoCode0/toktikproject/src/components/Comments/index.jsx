import React, { useContext } from 'react'
import { CommentsContext } from "../../context/CommentsContext";

import { Comment } from "../Comment";
import { MdClose } from "react-icons/md";


import "./styles.css"

export const Comments = ({ comments }) => {
  const { currentCommentsState, toggleComments } = useContext(CommentsContext)

  if(currentCommentsState){
    return (
      <ul className='comments' >
        <button onClick={() => toggleComments(prev => !prev)} ><MdClose  /></button>
        <Comment profilePic={"https://picsum.photos/50"} content="Hola!!!" likes="1" user="LeoCode0" date="Hace 2 horas" />
        <Comment profilePic={"https://picsum.photos/50"} content="Hola!!!" likes="1" user="LeoCode0" date="Hace 2 horas" />
        <Comment profilePic={"https://picsum.photos/50"} content="Hola!!!" likes="1" user="LeoCode0" date="Hace 2 horas" />
        <Comment profilePic={"https://picsum.photos/50"} content="Hola!!!" likes="1" user="LeoCode0" date="Hace 2 horas" />
        <Comment profilePic={"https://picsum.photos/50"} content="Hola!!!" likes="1" user="LeoCode0" date="Hace 2 horas" />
        <Comment profilePic={"https://picsum.photos/50"} content="Hola!!!" likes="1" user="LeoCode0" date="Hace 2 horas" />
        <Comment profilePic={"https://picsum.photos/50"} content="Hola!!!" likes="1" user="LeoCode0" date="Hace 2 horas" />
        <Comment profilePic={"https://picsum.photos/50"} content="Hola!!!" likes="1" user="LeoCode0" date="Hace 2 horas" />
        <Comment profilePic={"https://picsum.photos/50"} content="Hola!!!" likes="1" user="LeoCode0" date="Hace 2 horas" />
        <Comment profilePic={"https://picsum.photos/50"} content="Hola!!!" likes="1" user="LeoCode0" date="Hace 2 horas" />
        <Comment profilePic={"https://picsum.photos/50"} content="Hola!!!" likes="1" user="LeoCode0" date="Hace 2 horas" />
        <Comment profilePic={"https://picsum.photos/50"} content="Hola!!!" likes="1" user="LeoCode0" date="Hace 2 horas" />
        <Comment profilePic={"https://picsum.photos/50"} content="Hola!!!" likes="1" user="LeoCode0" date="Hace 2 horas" />
        <Comment profilePic={"https://picsum.photos/50"} content="Hola!!!" likes="1" user="LeoCode0" date="Hace 2 horas" />
        <Comment profilePic={"https://picsum.photos/50"} content="Hola!!!" likes="1" user="LeoCode0" date="Hace 2 horas" />
        <Comment profilePic={"https://picsum.photos/50"} content="Hola!!!" likes="1" user="LeoCode0" date="Hace 2 horas" />
        <Comment profilePic={"https://picsum.photos/50"} content="Hola!!!" likes="1" user="LeoCode0" date="Hace 2 horas" />
        <Comment profilePic={"https://picsum.photos/50"} content="Hola!!!" likes="1" user="LeoCode0" date="Hace 2 horas" />
        <Comment profilePic={"https://picsum.photos/50"} content="Hola!!!" likes="1" user="LeoCode0" date="Hace 2 horas" />
        <Comment profilePic={"https://picsum.photos/50"} content="Hola!!!" likes="1" user="LeoCode0" date="Hace 2 horas" />
        <Comment profilePic={"https://picsum.photos/50"} content="Hola!!!" likes="1" user="LeoCode0" date="Hace 2 horas" />
      </ul>
    )
  }

}
