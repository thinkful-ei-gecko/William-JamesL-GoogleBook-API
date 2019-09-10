import React from 'react';
import Book from './Book';

export default function BookList (props) {
    return (
        <ul className="book-list">
            <Book />
        </ul>
    )
}