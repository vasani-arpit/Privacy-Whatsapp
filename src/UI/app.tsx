import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HeaderTab from "./components/HeaderTab";
import './index.css'

function render() {
    ReactDOM.render(<div className="App">
        <HeaderTab />
    </div>,
        document.querySelector('#approot'));
}

render();