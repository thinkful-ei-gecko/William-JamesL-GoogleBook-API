import React from 'react';

export default function Search (props) {
    return (
        <div className="search-form">
            <form className="form-search">
                <label htmlFor="book-search">Search:</label>
                <input type="text" id="book-search" />
                <button type="button">Search</button>
            </form>
        </div>
    )
}