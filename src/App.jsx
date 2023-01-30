import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import BookList from './container/BookList';

function App() {
	return (
		<>
			<Header />
			<BookList />
		</>
	);
}

export default App;
