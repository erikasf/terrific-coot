import React, { Component } from 'react';
import { Form, FormGroup, Col, FormControl,Button, Checkbox,ControlLabel,Grid, Row,Jumbotron } from 'react-bootstrap';

class menu extends Component{

    constructor(props){
      super(props)
      this.state = {
        isToggleOn:false
      }
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
      this.setState(prevState =>({
        is ToggleOn:!prevState.isToggleOn
      }));
    }
  render(){
    return(
      <div>
       <button onClick={this.handleClick}>
       {this.state.isToggleOn ? 'OFF' : 'HOE!' }
      </div>
 )
}
 export default hoebutton;
