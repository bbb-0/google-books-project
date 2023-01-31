import BookList from "../../container/BookList";
import styles from "./BookCard.module.scss";

const BookCard = ({ bookData }) => {
    return (
        <div className={styles.BookList}>
            <h2>{bookData.volumeInfo.title}</h2>
            <h3>{bookData.volumeInfo.authors}</h3>
            {bookData.volumeInfo.imageLinks && (
                <img
                    src={bookData.volumeInfo.imageLinks.thumbnail}
                    alt={bookData.volumeInfo.title}
                />
            )}
        </div>
    );
};

export default BookCard;

// import { useEffect, useState } from 'react';
// import Modal from '../Modal/Modal';
// import styles from './BookCard.module.scss';

// const Books = () => {
// 	const [books, setBooks] = useState([]);
// 	const [search, setSearch] = useState('');

// 	useEffect(() => {
// 		if (search === '') {
// 			return;
// 		}
// 		async function getBooks() {
// 			const response = await fetch(
// 				`https://www.googleapis.com/books/v1/volumes?q=${search}`
// 			);
// 			const data = await response.json();
// 			setBooks(data.items);
// 		}
// 		getBooks();
// 	}, [search]);

// 	return (
// 		<div className={styles.books}>
// 			<input
// 				className={styles.books__search}
// 				placeholder="Search for a book"
// 				type="text"
// 				onChange={(e) => setSearch(e.target.value)}
// 			/>
// 			<button onClick={() => setSearch('')}>Clear</button>

// 			{books.map((book) => (
// 				<div key={book.id} className={styles.bookCard}>
// 					<h1 className={styles.title}>{book.volumeInfo.title}</h1>
// 					<h2>{book.volumeInfo.authors}</h2>
// 					{book.volumeInfo.imageLinks && (
// 						<img
// 							src={book.volumeInfo.imageLinks.thumbnail}
// 							alt={book.volumeInfo.title}
// 						/>
// 					)}
// 					{/* {books.map((book) => (
// 						return <BookList key={book.id} bookData={book} />;
// 					)} */}
// 				</div>
// 			))}
// 			{/* <Modal show={show} item={bookItem} onClose={() => setShow(false)} /> */}
// 		</div>
// 	);
// };

// export default Books;
