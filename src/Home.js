import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Header from './components/Header.js';
import LeftMenu from './components/LeftMenu.js';
import RightMenu from './components/RightMenu.js';

class Home extends Component {
  render() {
    return (
        <div>
        <Grid>
            <Row>
                <Header />
            </Row>
            <Row>
                <Col xs={12} md={9}>
                    <LeftMenu/>
                </Col>
                <Col xs={12} md={3}>
                    <RightMenu/>
                </Col>
            </Row>
        </Grid>
        </div>
    );
  }
}
export default Home;