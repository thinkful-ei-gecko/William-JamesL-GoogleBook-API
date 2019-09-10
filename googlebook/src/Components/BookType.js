import React from 'react'

export default function BookType (props) {
    return (
        <div>
            <label htmlFor="book-type">Book Type: </label>
            <select onChange={props.bookFilter} name="book-type" id="book-type">
                <option value="">No filter</option>
                <option value="partial">partial</option>
                <option value="full">full</option>
                <option value="free-ebooks">free ebooks</option>
                <option value="paid-ebooks">paid ebooks</option>
                <option value="ebooks">ebooks</option>
            </select>
        </div>
    )
}