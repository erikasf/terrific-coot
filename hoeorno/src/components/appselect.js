import React, { Component } from 'react';
import { Form, FormGroup, Col, FormControl,Button, Checkbox,ControlLabel,Grid, Row,Jumbotron } from 'react-bootstrap';

class appselect extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: fetch from api...
    }
  }
  render(){
    return(
      <h2>Hi {props.name}</h2>
      <ControlLabel>Select</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="Tinder">Tinder</option>
        <option value="Jacked">Jacked</option>
      </FormControl>
    )
  }
}
 export default appselect;
