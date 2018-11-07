import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Cadastro extends Component {
  constructor(){
  	super();
  	this.state={
  		nome:null,
  		herbcoin:null
  	}
  };

  setNome = event =>{
  	this.setState({nome:event.target.value});
  };

  setHerbcoin = event =>{
  	this.setState({herbcoin:event.target.value});
  }

  handleSubmit = event=>{
  	event.preventDefault();
  	const pessoa = this.state;

  	console.log(pessoa);
  	axios.post("http://localhost:8080/pessoa",pessoa).then(response=>{
  		console.log(response.status);
  		console.log(response.data);
  	});
  };

  render() {
    return (
    	<div className="container">
	      	<form className="form-signin" onSubmit={this.handleSubmit}>
		        <h2 className="form-signin-heading">Cadastrar</h2>
		        <label htmlFor="inputNome" className="sr-only">Nome</label>
		        <input type="text" id="inputNome" className="form-control" placeholder="Nome" required autofocus onChange={this.setNome} />
		        <label htmlFor="inputLogin" className="sr-only">Login</label>
		        <input type="text" id="inputLogin" className="form-control" placeholder="Login" required />
		        <label htmlFor="inputSenha" className="sr-only">Senha</label>
		        <input type="password" id="inputSenha" className="form-control" placeholder="Senha" required />
		        <label htmlFor="inputConfirmaSenha" className="sr-only">Confirma Senha</label>
		        <input type="password" id="inputConfirmaSenha" className="form-control" placeholder="Confirme a senha" required />
		        <button className="btn btn-lg btn-success btn-block" type="submit">Cadastrar</button>
	      	</form>
    	</div>
    );
  }
}

export default Cadastro;