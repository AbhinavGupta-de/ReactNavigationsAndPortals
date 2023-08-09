import React from 'react';

const Contact = (props) => {
	console.log(props);
	return (
		<div
			className="ui raised very padded text container segment"
			style={{ marginTop: '80px' }}
		>
			<h1 className="ui header">Contact</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
				quibusdam.
			</p>
		</div>
	);
};

export default Contact;
