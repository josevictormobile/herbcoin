import React, { Component } from 'react';
import axios from 'axios';

class Usuario extends Component {
  constructor(){
  	super();
  	this.state={
  		code:1,
  		nome:null,
  		herbcoin:null
  	};
  };

  componentDidMount(){
  	const code = this.state.code;
  	axios.get("http://localhost:8080/pessoa"+"/"+code).then(response=>{
  		console.log(response.status);
  		console.log(response.data);
  		this.setState(response.data);
  	});
  }

  render() {
    return (
    	<div>
    		<p><label>Code: </label>{this.state.code}</p>
    		<p><label>Nome: </label>{this.state.nome}</p>
    		<p><label>Herbcoins: </label>{this.state.herbcoin}</p>
    	</div>
    );
  }
}

export default Usuario;
	