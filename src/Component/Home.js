import React, { Component } from 'react';
import MenuHome from './Microcomponent/MenuHome';
import axios from 'axios';

class Home extends Component {
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
    	<div>
    		<form onSubmit={this.handleSubmit}>
	    		<p><label>Nome:</label><input type="text" onChange={this.setNome}/></p>
	    		<p><label>Herbcoin:</label><input type="number" onChange={this.setHerbcoin}/></p>
	    		<p><button>Cadastrar</button></p>
	    	</form>
    	</div>
    );
  }
}

export default Home;