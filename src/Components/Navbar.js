import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="ui raised very padded segment">
			<a className="ui teal inverted segment" href="/">
				Glorai
			</a>
			<div className="ui right floated header">
				<button className="ui button">
					<Link to="/">Home</Link>
				</button>
				<button className="ui button">
					<Link to="/About">About</Link>
				</button>
				<button className="ui button">
					<Link to="/Contact">Contact</Link>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
