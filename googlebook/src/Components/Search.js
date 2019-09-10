import React from 'react';

export default function Search (props) {
    return (
        <div className="search-form">
            <form className="form-search" onSubmit={e => {
                e.preventDefault();
                props.displaySearchForm(/* TODO: provide a search term */)
            }}>
                <label htmlFor="book-search">Search:</label>
                <input type="text" id="book-search" onChange={e => {
                    props.handleSearchTerm(e.target.value)
                 }} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}