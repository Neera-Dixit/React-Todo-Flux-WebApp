import React from 'react';
import ReactDOM from 'react-dom';
import {Link,IndexLink} from 'react-router';
export class Header extends React.Component{

	render(){

		let styleObj={
			listStyle:"none",
			textDecoration:"none"
		}

		return (
			   <div className="navig-bar">
				<div className="container-fluid" style={styleObj}>
				  <Link to="/" className="navbar-brand">
				  	<img src="images/react.png" width="60" height="50" />
				  </Link>
				  <ul className="nav navbar-nav">
				  	<li className="nav-item"><IndexLink to="/" className="nav-link" activeClassName="activeLink">Todos</IndexLink></li>
				  	<li className="nav-item"><Link to="/archives" className="nav-link" activeClassName="activeLink">Favourites</Link></li>
				  	<li className="nav-item"><Link to="/settings" className="nav-link" activeClassName="activeLink">Settings</Link></li>
				  </ul>
				</div>
			   </div>
		
		);
	}
}
