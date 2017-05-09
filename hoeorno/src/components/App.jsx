import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
const App = () => (
  <Router>
   <div>
    <Route exact path = '/' component = { login } />
    <Route path ='/homepage' component = { homepage } />

  </div>


)
 export default App;
