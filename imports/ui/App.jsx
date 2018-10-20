import React, { Fragment } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Login from './accounts/Login'
import Register from './accounts/Register'
import CreatePost from './posts/Posts'

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Route path='/' component={CreatePost} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Fragment>
  </BrowserRouter>
)

export default App;
