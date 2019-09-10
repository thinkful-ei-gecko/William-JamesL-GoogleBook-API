import React from 'react';

export default function Search (props) {
    return (
        <div className="search-form">
            <form className="form-search" onSubmit={e => {
                e.preventDefault();
                props.handleSearchForm()
            }}>
                <label htmlFor="book-search">Search:</label>
                <input type="text" id="book-search" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}