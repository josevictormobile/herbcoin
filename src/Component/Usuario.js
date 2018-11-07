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
    	<div className="container">
    	<div className="panel panel-success">
	        <div class="panel-heading">
	            <h1 className="panel-title">Queyla</h1>
	        </div>
	        <div className="panel-body">
	        	Código: 001
	        </div>
	        <div className="panel-body">
	        	Herbcoins: <h1 className="h1-r"><label className="label label-success">H$ 500</label></h1>
	        </div>
	        <div className="btn-transferir">
	        	<button className="btn btn-lg btn-success btn-block">Transferir</button>
	        </div>
        </div>
        </div>
    );
  }
}

export default Usuario;
	