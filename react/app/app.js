'use strict';

import React, { Component } from 'react';
import Title from './Title.jsx';
import Simple from './Simple.jsx';
import Temperature from './Temperature.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <Title />
                <Simple />
                <Temperature />
            </div>
        );
    }
}

export default App;
