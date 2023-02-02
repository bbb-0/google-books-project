import BookList from '../../container/BookList';
import styles from './BookCard.module.scss';

const BookCard = ({ bookData }) => {
	return (
		<div className={styles.card}>
			<h2 className={styles.container__title}>{bookData.volumeInfo.title}</h2>
			<h3 className={styles.container__author}>
				{bookData.volumeInfo.authors}
			</h3>
			{bookData.volumeInfo.imageLinks && (
				<img
					src={bookData.volumeInfo.imageLinks.thumbnail}
					alt={bookData.volumeInfo.title}
				/>
			)}
			<h3 className={styles.container__description}>
				{bookData.volumeInfo.description}
			</h3>
		</div>
	);
};

export default BookCard;

// Need to use a place holder image when none availble ifrom the API.
// Give user feedback when no description available (adding some checks)
