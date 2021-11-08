import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HeaderTab from "./components/HeaderTab";
import SettingsModal from './components/SettingsModal';
import './index.css'

function render() {
    ReactDOM.render(<div className="App">
        <SettingsModal /> 
        <HeaderTab />
       
    </div>,
        document.querySelector('#approot'));
}

render();