import React from 'react'

import styles from "./styles.module.css"

export const Profile = () => {
  const handleClick = () => {
    console.log("Inflando metricas...")
    alert("Metricas recolectadas")
  }
  return (
    <div className={styles.profile} >
      <div className={styles["img-container"]} >
        <img src="https://picsum.photos/200" alt="" />
      </div>
      <ul className={styles.list} >
        <li>
          <p>MX</p>
          <p className={styles.bold} >Pais</p>
        </li>
        <li>
          <p>Frontend</p>
          <p className={styles.bold}>Rol</p>
        </li>
      </ul>
      <div className={styles.description} >
        <p>Hola soy un frontend</p>
        <p>🌊</p>
      </div>
      <button onClick={handleClick} >Recoleta metricas gratis!!</button>
    </div>
  )
}
