import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Cadastro from './Cadastro';
import Usuario from './Usuario';
import Login from './Login';
import axios from 'axios';

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
			<Switch>
				<Route path="/" exact={true} component={Login} />
				<Route path="/cadastro" component={Cadastro} />
				<Route path="/usuario" component={Usuario} />
			</ Switch>
		</ BrowserRouter>
    );
  }
}

export default App;