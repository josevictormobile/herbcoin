import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Usuario from './Usuario';
import Login from './Login';
import axios from 'axios';

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
			<Switch>
				<Route path="/" exact={true} component={Home} />
				<Route path="/usuario" component={Usuario} />
				<Route path="/login" component={Login} />
			</ Switch>
		</ BrowserRouter>
    );
  }
}

export default App;