import { useEffect, useState } from 'react';

const Books = () => {
	const [books, setBooks] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		if (search === '') {
			return;
		}
		async function getBooks() {
			const response = await fetch(
				`https://www.googleapis.com/books/v1/volumes?q=${search}`
			);
			const data = await response.json();
			setBooks(data.items);
		}
		getBooks();
	}, [search]);

	return (
		<div className="books">
			<input type="text" onChange={(e) => setSearch(e.target.value)} />
			<button onClick={() => setSearch('')}>Clear</button>
			{books.map((book) => (
				<div key={book.id} className="book-card">
					<h1>{book.volumeInfo.title}</h1>
					<h2>{book.volumeInfo.authors}</h2>
					<img
						src={book.volumeInfo.imageLinks.thumbnail}
						alt={book.volumeInfo.title}
					/>
				</div>
			))}
		</div>
	);
};

export default Books;
