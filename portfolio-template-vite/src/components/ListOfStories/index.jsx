import React from 'react'
import { Story } from "../Story";

import styles from "./styles.module.css"

export const ListOfStories = ({ stories }) => {
  return (
    <ul className={styles.list} >
      <Story img={"https://picsum.photos/805"} />
      <Story img={"https://picsum.photos/805"} />
      <Story img={"https://picsum.photos/805"} />
    </ul>
  )
}
