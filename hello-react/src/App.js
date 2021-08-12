import logo from './logo.svg'
import './App.css';
import React, { Component } from 'react';
import Header from './Comman/header';
import Footer from './Comman/footer';
import { Row, Col, Container } from 'react-bootstrap';
import Page1 from './Nav-pages/page1'
import Page2 from './Nav-pages/page2'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Subpage1 from './Nav-pages/page1/Subpage1';




function App() {
  return (
    <Router>
      <Switch>
        <React.Fragment>

          <header>
            <Header />
          </header>


          <main>
            <Container>
              <Row>
                <Col>
                  <div className="App">
                    <div className="App-header">
                      <div>

                        <Route exact path='/page1' component={Page1} />
                        {/* <Route exact path='/page1/subpage1' component={Subpage1} /> */}
                      
                        <Route exact path='/page2' component={Page2} />
                        <Route exact path='/' render={function () {
                          return (
                            <div>
                              <img src={logo} className="App-logo" alt="logo" />
                              <p>
                                Edit <code>src/App.js</code> and save to reload.
                             </p>
                              <a
                                className="App-link"
                                href="https:reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Learn React
           <strong>{React.version}</strong>
                              </a>
                            </div>
                          )
                        }} />



                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </main>

          <footer>
            <Footer />
          </footer>

        </React.Fragment>
      </Switch>
    </Router>

  );
}

export default App;
