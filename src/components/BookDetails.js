import React, { Component } from 'react'
import { Link } from 'react-router'

const BooksList = ({ params }) => {

  return (
    <div>
      <h1>Book name: {params.bookName}</h1>
      <h2>Return to <Link to='/books'>Book List</Link></h2>
    </div>
  )

}

export default BooksList
