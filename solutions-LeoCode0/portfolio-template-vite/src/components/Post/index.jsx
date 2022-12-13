import React from 'react'

import styles from "./styles.module.css"

export const Post = ({ title, date, content, img, liveUrl, repoUrl }) => {
  const handleClick = () => {
    throw new Error("Error fake")
  }

  return (
    <article className={styles.post} >
      <div className={styles.header} >
        <h2>{title}</h2>
        <p>{date}</p>
      </div>
      <div className={styles.content} >
        <p>{content}</p>
        <img src={img} alt={title} />
      </div>
      <div className={styles.buttons} >
        <a className={styles.button} href={liveUrl} target={"_blank"} >URL</a>
        <a className={styles.button} href={repoUrl} target={"_blank"}>Repo</a>
        <button className={styles.button} onClick={handleClick} >Like</button>
      </div>
    </article>
  )
}
