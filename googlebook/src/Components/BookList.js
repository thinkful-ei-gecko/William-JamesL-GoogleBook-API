import React from 'react';
import Book from './Book';

export default function BookList (props) {
    const bookResults = props.books.map((item, index) => <Book book={item} key={index}/>)

    return bookResults;
}