import React from 'react'

import styles from "./styles.module.css"

export const Post = ({ title, date, content, img }) => {
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
    </article>
  )
}
