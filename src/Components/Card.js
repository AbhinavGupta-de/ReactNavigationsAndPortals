// import React, { Component } from 'react';
// import useParams from 'react-router-dom';

// export default class Card extends Component {
// 	state = { user: '' };

// 	componentDidMount() {
// 		// let user = this.props.match.params.user;
// 		// this.setState({ user: user });

// 		const { user } = useParams();
// 		console.log(this.props);
// 	}
// 	render() {
// 		const { user } = this.state;
// 		return (
// 			<div
// 				className="ui raised very padded text container segment"
// 				style={{ marginTop: '80px' }}
// 			>
// 				<h1 className="ui header">Contact {user}</h1>
// 				<p>
// 					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
// 					quibusdam.
// 				</p>
// 			</div>
// 		);
// 	}
// }

import React from 'react';
import { useParams } from 'react-router-dom';

const Card = (props) => {
	const { user } = useParams();
	return (
		<div
			className="ui raised very padded text container segment"
			style={{ marginTop: '80px' }}
		>
			<h1 className="ui header">Hello {user}</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
				quibusdam.
			</p>
		</div>
	);
};

export default Card;
