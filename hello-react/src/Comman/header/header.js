import React, { Component } from 'react';
import './header.css';
import { Row, Col, Alert, Container, Nav, Navbar, NavItem, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import linechart from './../../assets/logo192.png';
import { Switch, Route, Link,Router } from 'react-router-dom';
import Page1 from './../../Nav-pages/page1'
import Page2 from './../../Nav-pages/page2'
import App from '../../App';
class header extends React.Component {

  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {

    return (
      <Container fluid>
        <Row>
          <Col >
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
              <Navbar.Brand href="#home">
                {/* To load from Public folder */}
                {/* src={process.env.PUBLIC_URL + '/assets/logo192.png'} */}
                <img
                  src={linechart}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  
                  <NavItem>
                    <Link className="nav-link" to="/page1">Home</Link>
                
                  {/* <Switch>
                  <Route exact path='/page1' component={Page1} />
            <Route exact path='/page2' component={Page2} />
            </Switch>
             */}
                  </NavItem>
                  <NavItem><Link className="nav-link" to="/page2">Page2</Link></NavItem>

                  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item ><Link  to="/page1">Page1</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">More deets</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                  </Nav.Link>
                  <Form inline>
                    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                    <Button type="submit">Submit</Button>
                  </Form>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            
         
          </Col>
        </Row>
      </Container>

    );
  }
}


export default header;