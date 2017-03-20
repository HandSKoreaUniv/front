import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Header from '../../components/Header/Header.js';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Row>
                <Header />
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