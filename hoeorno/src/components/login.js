import React, { Component } from 'react';
import { Form, FormGroup, Col, FormControl,Button, Checkbox,ControlLabel,Grid, Row,Jumbotron } from 'react-bootstrap';

class login extends Component{
  render(){
    return(
      <div className='App'>
        <div className='title'>
          <h1>Hoe or No ?</h1>
      <Grid>
      <Row className='show-grid'>
      <Col xs={6} md={4}></Col>
      <Col xs={6} md={4}>
        < Form horizontal >
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">
                Sign in
              </Button>
            </Col>
          </FormGroup>
        </Form>
        </Col>
      <Col xs={6} md={4}></Col>
      </Row>
      </Grid>
    )
  }
}
 export default login;
