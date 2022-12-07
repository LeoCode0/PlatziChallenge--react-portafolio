import React from 'react'
import "./styles.css"

export const Description = ({ description, profile, sound, date}) => {
  return (
    <div className='description' >
      <p className='description--profile' >@Profile</p>
      <p className='description--text' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi veritatis rerum eius natus ut voluptates illo, distinctio hic enim exercitationem minima recusandae nesciunt voluptatem fugiat odio aliquam temporibus. Necessitatibus, provident?</p>
      <p className='description--date' >Hace 20 horas</p>
    </div>
  )
}
