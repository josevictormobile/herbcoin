import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Estilo/MenuHome.css';

class MenuHome extends Component {
  render() {
    return (
    	<nav className="menu-home">
			<ul>
				<Link to="/"><li>HOME</li></Link>
				<Link to="/solucoes"><li>SOLUÇÕES</li></Link>
				<Link to="/procedimentos"><li>PROCEDIMENTOS</li></Link>
				<Link to="/fechamento"><li>FECHAMENTO CHAMADO</li></Link>
			</ul>
		</nav>
    );
  }
}

export default MenuHome;
	