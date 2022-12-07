import React from 'react'

import styles from "./styles.module.css"

export const Social = ({ img, name, username, link}) => {
  return (
    <li className={styles.item} >
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>@{username}</p>
        <a href={link} target="_blank" >Visitar</a>
      </div>
    </li>
  )
}
