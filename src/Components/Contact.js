import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Contact = (props) => {
	return (
		<div>
			<Modal />
			<div
				className="ui raised very padded text container segment"
				style={{ marginTop: '80px' }}
			>
				<Link to={'/card/Abhinav'} className="ui header">
					Abhinav
				</Link>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
					quibusdam.
				</p>
			</div>
			<div
				className="ui raised very padded text container segment"
				style={{ marginTop: '80px' }}
			>
				<Link to={'/card/Bot'} className="ui header">
					Bot
				</Link>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
					quibusdam.
				</p>
			</div>
		</div>
	);
};

export default Contact;
