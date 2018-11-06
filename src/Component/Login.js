import React, { Component } from 'react';
import './Estilo/Login.css';

class Login extends Component {
  render() {
    return (
    	<div className="container">
	      	<form className="form-signin">
		        <h2 className="form-signin-heading">Entrar</h2>
		        <label for="inputEmail" className="sr-only">Login</label>
		        <input type="email" id="inputEmail" className="form-control" placeholder="Login" required autofocus />
		        <label for="inputPassword" className="sr-only">Senha</label>
		        <input type="password" id="inputPassword" className="form-control" placeholder="Senha" required />
		        <div className="checkbox">
		          <label for="inputRemember">Lembre-me</label><input type="checkbox" value="remember-me" id="inputRemember" /> 
		        </div>
		        <button className="btn btn-lg btn-success btn-block" type="submit">Entrar</button>
	      	</form>
    	</div>
    );
  }
}

export default Login;
	