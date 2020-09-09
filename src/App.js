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


function App() {
  return (
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="Home">T-REDUX</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/">Home</Link>
          </Nav>
        </Navbar>
        <Container fluid>
          <Row>
            <Col>
              <Switch>
                <Route component={Home} exact path="/"/>
              </Switch>
            </Col>
          </Row>
        </Container>

      </Router>
  );
}

export default App;
