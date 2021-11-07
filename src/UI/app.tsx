import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HeaderTab from "./components/HeaderTab";
import SideBar from './components/SideBar';
import './index.css'

function render() {
    ReactDOM.render(<div className="App">
        <SideBar />
    </div>,
        document.querySelector('#approot'));
}

render();