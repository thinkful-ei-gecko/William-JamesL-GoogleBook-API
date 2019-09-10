import React from 'react';
import Book from './Book';

export default function BookList (props) {
    console.log(props);
    return (
        <ul className="book-list">
            <Book books={props.books}/>
        </ul>
    )
}