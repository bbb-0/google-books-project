import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import Books from './Components/BookGrid/Books';
import Header from './components/Header/Header';
import Searchbar from './components/SearchBar/SearchBar';

function App() {
	return (
		<>
			<Header />
			<Books />
		</>
	);
}

export default App;
