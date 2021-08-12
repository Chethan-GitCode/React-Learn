import React, { Component } from 'react';
import './page1.css';
import './../../App.css';
import { Row, Col, Button } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Switch, Route, } from 'react-router-dom';


import SubPage1 from './../../Nav-pages/page1/Subpage1'
import Subpage2 from './../../Nav-pages/page1/Subpage2';



class page1 extends Component {
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

      <div>
        <Row bsPrefix="row bg-warning">
          <Col md={4} bsPrefix="bg-primary p-0 col" >
            Col-md-4
        </Col >
          <Col md={4}>
            <Button bsPrefix="m-0 text-white btn" variant="success">
              Super button
            </Button>
          </Col>
          <Col md={4}>
            Col-md-4
        </Col>
        </Row>
        <br />
        <Row >
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>

        </Row>
        <br />
        <Row xs={2} md={4} lg={6}>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row xs={1} md={2}>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
        <br />
        <Row xs={1} md={2} lg={3}>
          <Col >1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>


        </Row>
        <br />

        <Router >


          <Switch>
            <React.Fragment>

              <Row>
                <Col>


                  <Link to="/page1/subpage1">  Go to Subpage1</Link>


                </Col>
                <Col>
                  <Link to="/page1/subpage2">  Go to Subpage2</Link>
                </Col>


              </Row>

              <Row>
                <Col>

                 
                 
                  <Route exact path="/page1/subpage1" component={SubPage1} />
                  <Route exact path="/page1/subpage2" component={Subpage2} />


                </Col>
              </Row>

            </React.Fragment>
          </Switch>

        </Router>
      </div>


    );
  }
}

export default page1;