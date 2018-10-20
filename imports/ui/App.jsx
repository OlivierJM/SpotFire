import React, { Fragment } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Login from './accounts/Login'
import Register from './accounts/Register'

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Route path='/' render={ () => <Link to='login'>Hello I am Home</Link>} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Fragment>
  </BrowserRouter>
)

export default App;
