import React from 'react'
import styles from "./styles.module.css"

import { saveInLocalStorage } from "../../utilities/saveInLocalStorage.js";

import { FaImage } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md"

export const PublishTweet = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    const user = {
      tweet: content,
      username: "LeoCode0",
      name: "Leonardo Espinoza"
    }

    saveInLocalStorage("my-tweets", user)
  }
  return(
    <div className={styles.publishTweet} >
      <img src="https://picsum.photos/100" alt="Profile pic" className={`${styles.profilePic} img-default`} />
      <form className={styles.form} onSubmit={handleSubmit}  >
        <textarea cols="30" rows="10" placeholder='Escribe un tweet' name='content' >

        </textarea>
        <div className={styles.footer} >
          <ul className={styles.list} >
            <li>
              <button onClick={() => console.log("Agregando imagen...")} >
                <FaImage />
              </button>
            </li>
            <li>
              <button onClick={() => console.log("Agregando ubicacion...")} >
                <MdGpsFixed />
              </button>
            </li>
          </ul>
          <button type="submit" className={styles.submit} >Tweetear</button>
        </div>
      </form>
    </div>
  )
}
