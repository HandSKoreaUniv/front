import React, { Component } from 'react';
import { Row, Col, Icon } from 'react-materialize';
import Navbar from './components/Navbar'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Row>
                <Navbar/>
                </Row>
                <Row>
                <Col s={3}>
                left placeholder
                </Col>
                <Col s={6}>
                center placeholder
                </Col>
                <Col s={3}>
                right placeholder
                </Col>
                </Row>
            </div>
        );
    }
}