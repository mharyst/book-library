import React from 'react'
import { Link } from 'react-router'

const Header = ({ name }) => {
  return (
    <nav className="navbar navbar-full navbar-dark bg-inverse" style={{marginBottom: '15px'}}>
      <a className="navbar-brand" href="/">Book Library</a>
      <ul className="nav navbar-nav">
        <li className="nav-item"><Link className="nav-link" to='/books'>Books</Link></li>
        <li className="nav-item"><Link className="nav-link" to='/authors'>Authors</Link></li>
      </ul>
    </nav>
  )
}

export default Header