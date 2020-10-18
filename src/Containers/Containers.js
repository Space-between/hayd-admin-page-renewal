import React, { Component } from 'react';
import Header from './Header';
import LeftMenu from './LeftMenu';

export default class Containers extends Component {
    render() {
        return (
            <div>
                <Header />
                <LeftMenu />
            </div>
        )
    }
}
