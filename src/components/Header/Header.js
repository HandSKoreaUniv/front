import React, { Component } from 'react';
import {NavItem, Navbar} from 'react-materialize';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar brand='logo' right>
                    <NavItem href='get-started.html'>Getting started</NavItem>
                    <NavItem href='components.html'>Components</NavItem>
                </Navbar>
            </div>
        );
    }
}