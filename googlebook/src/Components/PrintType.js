import React from 'react';

export default function PrintType(props) {
    return (
        <div>
            <label htmlFor="print-type">Print Type: </label>
            <select name="print-type" id="print-type">
                <option value="">All</option>
                {/* {printOptions} */}
            </select>
        </div>
    )
}