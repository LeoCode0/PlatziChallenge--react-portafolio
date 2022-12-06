import React from 'react'
import { Post } from "../Post";

import styles from "./styles.module.css"

export const ListOfPosts = () => {
  return (
    <div >
      <Post 
        title={"Hey este es mi portafolio"} 
        date={new Date().toJSON().slice(0, 10)} 
        content="Texto de prueba" 
        img={"https://picsum.photos/800"} 
      />
      <Post 
        title={"Hey este es mi portafolio"} 
        date={new Date().toJSON().slice(0, 10)} 
        content="Texto de prueba" 
        img={"https://picsum.photos/801"} 
      />
      <Post 
        title={"Hey este es mi portafolio"} 
        date={new Date().toJSON().slice(0, 10)} 
        content="Texto de prueba" 
        img={"https://picsum.photos/802"} 
      />
      <Post 
        title={"Hey este es mi portafolio"} 
        date={new Date().toJSON().slice(0, 10)} 
        content="Hoy les voy a contar acerca de como hacer un portafolio con react y new relic " 
        img={"https://picsum.photos/803"} 
      />
      <Post 
        title={"Hey este es mi portafolio"} 
        date={new Date().toJSON().slice(0, 10)} 
        content="Texto de prueba" 
        img={"https://picsum.photos/804"} 
      />
    </div>
  )
}
