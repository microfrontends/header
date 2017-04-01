import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

class Header extends HTMLElement {
  attachedCallback() {
    ReactDOM.render(<App />, this.createShadowRoot());
  }
}
document.registerElement('microfrontends-header', Header);
