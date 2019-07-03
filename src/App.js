import React, { Component } from 'react';
import { Router } from '@reach/router'

import {
  Dashboard
} from './pages';

class App extends Component {
  render() {
    return (
      <Router>
        <Dashboard path="/"/>
      </Router>
    );
  }
}

export default App;
