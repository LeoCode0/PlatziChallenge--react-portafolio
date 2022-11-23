import React from 'react'
import styles from "./styles.module.css"

import { PublishTweet } from "../PublishTweet";
import { Tweet } from "../Tweet";

export const Timeline = () => {
  return (
    <div className={styles.timeline} >
      <PublishTweet />
      <Tweet username="JuanDC" name="Juan David">
        <p>Adios mundo</p>
        <img src="https://picsum.photos/540" alt="Img" />
      </Tweet>
      <Tweet username="LeoCode0" name="Leonardo Espinoza">
        <p>Hola Mundo</p>
        <img src="https://picsum.photos/400" alt="Img" />
      </Tweet>
      <Tweet username="CelisMX" name="ricardo celis">
        <p>Final tuit 👀</p>
        <img src="https://picsum.photos/920" alt="img" />
      </Tweet>
    </div>
  )
}
