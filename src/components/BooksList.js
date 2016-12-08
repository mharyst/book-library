import React from 'react'
import { Link } from 'react-router'

const BooksList = ({ children, params }) => {

  let template

  if (params.bookName) {
    template = (
      <div className="container">
        {children}
      </div>
    )
  } else {
    template = (
      <div className="container">
        <h1>Hello. It is Book List Page.</h1>
        <h2>Goto <Link to='/books/book1'>Book #1</Link></h2>
      </div>
    )
  }

  return template
}

export default BooksList
