import React from 'react'

export default function BookType (props) {
    return (
        <div>
            <label htmlFor="book-type">Book Type: </label>
            <select name="book-type" id="book-type">
                <option value="">No Filter</option>
                {/* {bookOptions} */}
            </select>
        </div>
    )
}