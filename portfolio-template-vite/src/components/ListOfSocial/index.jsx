import React from 'react'

import { Social } from "../Social";
import styles from "./styles.module.css";

export const ListOfSocial = () => {
  return (
    <ul className={styles.list} >
      <Social img={"https://picsum.photos/809"} name={"twitter"} username={"LeoCode0"} link="https://twitter.com" />
      <Social img={"https://picsum.photos/812"} name={"Instagram"} username={"LeoCode0"} link="https://twitter.com" />
      <Social img={"https://picsum.photos/833"} name={"Github"} username={"LeoCode0"} link="https://twitter.com" />
      <Social img={"https://picsum.photos/887"} name={"Linkedin"} username={"LeoCode0"} link="https://twitter.com" />
    </ul>
  )
}
