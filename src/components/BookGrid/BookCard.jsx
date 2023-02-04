import BookList from '../../container/BookList';
import styles from './BookCard.module.scss';

const BookCard = ({ bookData }) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.container__title}>{bookData.volumeInfo.title}</h2>
			<h3 className={styles.container__author}>
				{bookData.volumeInfo.authors && bookData.volumeInfo.authors.length >= 1
					? bookData.volumeInfo.authors.join(', ')
					: 'No author available'}
			</h3>
			{bookData.volumeInfo.imageLinks && (
				<img
					src={
						bookData.volumeInfo.imageLinks.thumbnail ||
						'https://via.placeholder.com/150'
					}
					alt={bookData.volumeInfo.title}
				/>
			)}
			<h3 className={styles.container__description}>
				{bookData.volumeInfo.description &&
				bookData.volumeInfo.description.length > 100
					? `${bookData.volumeInfo.description.substring(0, 200)}...`
					: 'No description available'}
			</h3>
		</div>
	);
};

export default BookCard;
