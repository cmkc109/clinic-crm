import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <nav>
        <div className="nav-wrapper">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/user">My page</a></li>
            <li><a href="/form">Form</a></li>
          </ul>
        </div>

    </nav>
  )
}

export default Nav