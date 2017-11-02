import React, { Component } from 'react';
import './App.css';
import { Col, Grid, Jumbotron, MenuItem, Nav, Navbar, NavDropdown, NavItem, Row } from "react-bootstrap";

import PostsIndex from './components/PostsIndex';
import { BrowserRouter, Route } from "react-router-dom";
import PostsNew from "./components/PostsNew";

class App extends Component {
  render() {
    return (
        <div>
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#nav">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#nav">Link</NavItem>
                        <NavItem eventKey={2} href="#nav">Link</NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#nav">Link Right</NavItem>
                        <NavItem eventKey={2} href="#nav">Link Right</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Grid>
                <Row>
                    <Col md={12}>
                        <Jumbotron>
                            <h1>Redux Blog</h1>
                        </Jumbotron>
                    </Col>
                    <Col md={12}>
                        <BrowserRouter>
                            <div>
                                <Route path="/" component={PostsIndex}/>
                                <Route path="/posts/new" component={PostsNew}/>
                            </div>
                        </BrowserRouter>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
  }
}

export default App;
