import { useEffect, useState } from "react";
import BookCard from "../components/BookGrid/BookCard";
import styles from "./BookList.module.scss";

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");

    // Why do we use useEffect hook? -> To trigger effect at very specific times in the lifecycle of our React application

    // We do not want the fetch() to happen everytime the user inputs a new char.
    // So we need to keep track of the input seperatly from the search term
    // We need an extra state variable to keep track of the input (it will have an onChange function that is triggered every time the user clicks on a char)
    // We will add a search button. When that button is called (onClick={handleSearch})
    // handleSearch - update search to be the latest input + trigger API call + reset input to empty string

    // Abstract the API call in its own function (put it in a service folder and import where needed)

    const getBooks = async () => {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${search}`,
        );
        const data = await response.json();
        return data.items;
    };

    const handleSearch = async () => {
        const fetchedBooks = await getBooks();
        setBooks(fetchedBooks);
    };

    useEffect(() => {
        if (search === "") {
            return;
        }
        handleSearch();
    }, [search]);

    return (
        <div className={styles.books}>
            <input
                className={styles.books__search}
                placeholder="Search for a book"
                type="text"
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className={styles.button} onClick={() => setSearch("")}>
                Clear
            </button>
            <div className={styles.container}>
                {books.map((book) => (
                    <BookCard key={book.id} bookData={book} />
                ))}
            </div>
        </div>
    );
};

// Need to use a p[lace holder image when none availble ifrom the API.
// Give user feedback when no description available (adding some checks)

{
    /* <Modal show={show} item={bookItem} onClose={() => setShow(false)} /> */
}
{
    /* {books.map((book) => (
				return <BookList key={book.id} bookData={book} />;
			)} */
}
export default BookList;
