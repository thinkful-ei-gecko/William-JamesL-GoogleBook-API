import React from 'react';

export default function PrintType(props) {
    return (
        <div>
            <label htmlFor="print-type">Print Type: </label>
            <select onChange={props.printFilter} name="print-type" id="print-type">
                <option value="">All</option>
                <option value="books">Books</option>
                <option value="magazines">Magazines</option>
            </select>
        </div>
    )
}