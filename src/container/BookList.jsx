import { useEffect, useState } from 'react';
import styles from './BookList.module.scss';

const BookList = () => {
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
		<div className={styles.books}>
			<input
				className={styles.books__search}
				placeholder="Search for a book"
				type="text"
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button className={styles.button} onClick={() => setSearch('')}>
				Clear
			</button>
			<div className={styles.container}>
				{books.map((book) => (
					<div key={book.id} className={styles.books__card}>
						<h1 className={styles.container__title}>{book.volumeInfo.title}</h1>
						<h2 className={styles.container__author}>
							{book.volumeInfo.authors}
						</h2>
						{book.volumeInfo.imageLinks && (
							<img
								className={styles.image}
								src={book.volumeInfo.imageLinks.thumbnail}
								alt={book.volumeInfo.title}
							/>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

{
	/* <Modal show={show} item={bookItem} onClose={() => setShow(false)} /> */
}
{
	/* {books.map((book) => (
				return <BookList key={book.id} bookData={book} />;
			)} */
}
export default BookList;
