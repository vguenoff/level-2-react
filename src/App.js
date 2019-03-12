import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Toggle from './components/Toggle';
import ToggleRPC from './components/ToggleRPC';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Toggle
                        render={({ on, toggle }) => (
                            <>
                                {on && <h1>Hello Scott</h1>}
                                <button onClick={toggle}>Show/hide</button>
                            </>
                        )}
                    />
                    <ToggleRPC>
                        {({ on, toggle }) => (
                            <>
                                {on && <h1>Render Props Children</h1>}
                                <button onClick={toggle}>Show/hide</button>
                            </>
                        )}
                    </ToggleRPC>
                </header>
            </div>
        );
    }
}

export default App;
