import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Toggle from './components/Toggle';
import Portal from './components/Portal';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <Toggle>
                    {({ on, toggle }) => (
                        <>
                            <button onClick={toggle}>
                                Click to show the portal
                            </button>
                            {on && (
                                <Portal>
                                    <h1 className="portal">
                                        Helloooo, I'm in a portal
                                    </h1>
                                </Portal>
                            )}
                        </>
                    )}
                </Toggle>
            </div>
        );
    }
}

export default App;
