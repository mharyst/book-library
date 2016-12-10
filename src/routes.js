import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import App from './containers/App'
import BooksList from './components/BooksList'
import BookDetails from './components/BookDetails'
import AuthorsList from './components/AuthorsList'
import Author from './components/Author'
import Genre from './components/Genre'
import NotFound from './components/NotFound'

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRedirect to='/books' />
      <Route path='/books' component={BooksList}>
        <Route path='/books/:bookName' component={BookDetails} />
      </Route>
      <Route path='/authors' component={AuthorsList}>
        <Route path='/authors/:author' component={Author} />
      </Route>
      <Route path='/genre/:genre' component={Genre} />
      <Route path='*' component={NotFound} />
    </Route>
  </div>
)