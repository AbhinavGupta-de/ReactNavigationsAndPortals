import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Card from './Components/Card';

function App() {
	return (
		<BrowserRouter>
			<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path={'/card/:user'} element={<Card />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
