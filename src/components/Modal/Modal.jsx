import styles from './Modal.module.scss';

const Modal = ({ show, item, onClose }) => {
	if (!show) {
		return null;
	}
	let thumbnail =
		item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
	return (
		<>
			<div className={styles.modal}>
				<div className={styles.modal__inner}>
					<button className={styles.modal__close} onClick={onClose}>
						Close
					</button>
					<div className={styles.modal__box}>
						<img src={thumbnail} alt="" />
						<div className={styles.info}>
							<h1>{item.volumeInfo.title}</h1>
							<h3>{item.volumeInfo.authors}</h3>
							<h4>
								{item.volumeInfo.publisher}
								<span>{item.volumeInfo.publishedDate}</span>
							</h4>
							<br />
						</div>
					</div>
					<h4 className={styles.description}>{item.volumeInfo.description}</h4>
				</div>
			</div>
		</>
	);
};
export default Modal;
