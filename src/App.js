import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Home} from "./Components/home";
import {Col, Container, Navbar, Nav,Row} from "react-bootstrap";
import {Contact} from "./Components/contact";


function App() {
  return (
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">T-REDUX</Navbar.Brand>
            <Nav className='mr-4'>
                <Link to="/">Home</Link>
            </Nav>
            <Nav className='mr-4'>
                <Link to="/Contact">Contact</Link>
            </Nav>
        </Navbar>
        <Container fluid>
          <Row>
            <Col>
              <Switch>
                <Route component={Home} exact path="/"/>
                <Route component={Contact} exact path="/Contact"/>
              </Switch>
            </Col>
          </Row>
        </Container>

      </Router>
  );
}

export default App;
