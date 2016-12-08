import React from 'react'

const Header = ({ name }) => {
  return (
    <nav className="navbar navbar-full navbar-dark bg-inverse" style={{marginBottom: '15px'}}>
      <div className="container text-xs-center">
        <a className="navbar-brand" href="/">Book Library</a>
      </div>
    </nav>
  )
}

export default Header