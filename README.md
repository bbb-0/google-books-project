# Google Books API Search Engine

## Outline

This project will require you to use both DOM manipulation and Asynchronous programming.
The aim is for the user to be able to search for a book inside the Google Books database and to be able to get more details about a certain title.

## MVP

Create a page that allows users to search for books
Page should include the following:

-   Header section introducing the page
-   Form containing a text input and a submit / search button

-   A grid of books
    Instructions:

-   When the submit button is clicked you need the request books from the Google books API using the input value as your query string xxx
-   The books that you receive should be rendered in the books grid.
-   Each book in the grid should have an image, author, title and description xxx
-   The grid should be responsive on different screen sizes
-   You should use async / await for your request code, NOT .then

Styling (required):

This application should look good, take some time to pick a palette and plan out your design. You can use tools like Figma or wireframe pro to plan what your application is going to look like.
Styling must use BEM, and each block should have its own SCSS file Your palette should use variables

Application Design (required):

-   You should separate DOM functions and non-DOM functions in different modules.
-   Write as many non-DOM functions as you can Functions should do 1 thing, and should be as pure and reusable as possible
-   Always use iterators over loops
-   Always parametrize and abstract large pieces of duplicate code.

## Bonus (optional, but highly recommended):

-   Give feedback to the user when no book results can be found for the query.
-   When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.

## Useful Resources:

-   [Google Books API no Auth link](https://developers.google.com/books/docs/v1/using#WorkingVolumes)
-   [Using Async Await](https://dmitripavlutin.com/javascript-fetch-async-await/)
-   [Using Postman to Test APIs](https://www.blazemeter.com/blog/how-use-postman-test-apis)
-   [Download Postman](https://www.postman.com/downloads/)

## Project Breakdown (REACT JS)

-   Create a Vite React App Template
-   Components:

    -   App
        -   Header
        -   SearchBar
        -   BookGrid
            -   BookCard

-   Functionality:
    -   We need a function that fetches data from the Google Books API
    -   If `queryTerm` is a stateVariable in App, handling updates of queryTerm will require to pass a function as prop to Searchbar (handler) so it then can be passed to BookGrid for the API call
    -   We need to render that data inside the BookGrid container
        -   trigger API call when app mounts
        -   map through data to rend a BookCard for each book inside of data

```js
useEffect(() => {
    getData(queryTerm),
}, []) // Empty watchlist will trigger useEffect when component mounts
```

-   Add styling components using SCSS
