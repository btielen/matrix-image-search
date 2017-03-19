import React, { Component } from 'react'
import VerticalFields from './containers/VerticalFields'
import HorizontalFields from './containers/HorizontalFields'
import QueryButton from './containers/QueryButton'
import Queries from './containers/Queries'

class App extends Component {
    render() {
        return (
            <div>
                <QueryButton />
                <VerticalFields />
                <HorizontalFields />
                <Queries />
            </div>
        );
    }
}

export default App;
