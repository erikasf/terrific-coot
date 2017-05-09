import React, { Component } from 'react';
import { Form, FormGroup, Col, FormControl,Button, Checkbox,ControlLabel,Grid, Row,Jumbotron } from 'react-bootstrap';

class App extends Component {
  render(){
  return(
  <div className='App'>
  <Jumbotron>
      <h1>Hoe or No ?</h1>
      <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>

    </Jumbotron>
    { isCurrentlyLoggedIn ? <appselect /> : <login /> }

 </div>
);

  }
}
 export default App;
