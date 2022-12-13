import React from 'react'
import styles from "./styles.module.css"

export const Story = ({ img, description }) => {
  return (
    <div className={styles.story} >
      <img src={img} alt="" />
    </div>
  )
}
