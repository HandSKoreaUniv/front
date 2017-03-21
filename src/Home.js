import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Header from './components/Header.js';

class Home extends Component {
  render() {
    return (
        <div>
        <Grid>
            <Row>
                <Header />
            </Row>
            <Row>
                <Col xs={12} md={3}>left placeholder</Col>
                <Col xs={12} md={6}>center placeholder</Col>
                <Col xs={12} md={3}>right placeholder</Col>
            </Row>
        </Grid>
        </div>
    );
  }
}
export default Home;