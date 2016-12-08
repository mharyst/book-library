import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router';

import App from './containers/App';
import BooksList from './components/BooksList';
import BookDetails from './components/BookDetails';
import './styles/main.scss';
import configureStore from './store/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/books" />
        <Route path="books" component={BooksList}>
          <Route path="(:bookName)" component={BookDetails} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.react-view')
);
