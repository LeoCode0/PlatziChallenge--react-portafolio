import styles from "./styles.module.css"
import React, { useState } from 'react'

import { FaHeart, FaRetweet, FaComment } from "react-icons/fa";

export const Tweet = ({ name, username, children }) => {
  const [likes, setLikes] = useState(0)
  const [rt, setRt] = useState(0)
  const [comments, setComments] = useState(0)
  return (
    <article className={styles.tweet}>
      <div className={styles.header}>
        <img src="https://picsum.photos/100" alt="Profile pic" />
        <div className={styles.container}>
          <span className={styles.name}>{name}</span>
          <span className={styles.gray} >@{username}</span>
          <span className={styles.gray}>20h</span>
          <button>...</button>
        </div>
      </div>
      <div className={styles.children} >
        {children}
      </div>
      <div className={styles.footer} >
        <ul className={styles.list} >
          <li><button onClick={() => setLikes(prevState => prevState + 1)} > <FaHeart /> </button>{likes}</li>
          <li><button onClick={() => setRt(rt + 1)}><FaRetweet /></button>{rt}</li>
          <li><button onClick={() => setComments(comments + 1)}><FaComment /></button>{comments}</li>
        </ul>
      </div>
    </article>
  )
}