import React from 'react'

import { FaSearch, FaTv, FaMusic } from "react-icons/fa"

import "./styles.css"

export const Layout = ({ children }) => {
  return (
    <div className='layout' >
      <header className='layout--header' >
        <nav className='layout--nav' >
          <ul className='layout--ul' >
            <li><span><FaTv /></span></li>
            <li>Siguiendo | Para ti</li>
            <li><span><FaSearch /></span></li>
          </ul>
        </nav>
      </header>
      <main className='layout--main' >
        {children}
      </main>
      <footer className='layout--footer' >
        <p>
          <span><FaMusic /></span>  Lorem, ipsum dolor sit amet consectetur
        </p>
      </footer>
    </div>
  )
}
