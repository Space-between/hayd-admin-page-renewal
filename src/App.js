import React, { Component } from 'react';
import GlobalStyles from "Components/GlobalStyles";
import Router from "./Router";


class App extends Component {
    render() {
        return (
            <>
                <Router />
                <GlobalStyles />
            </>
        );
    }
}

export default App;