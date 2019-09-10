import React from 'react';

export default function Book (props) {
  const title = props.items.map(item => item.volumeInfo.title);
  const author = props.items.map(item => item.volumeInfo.authors);
  const price = props.items.map(item => item.saleInfo.retailPrice);
  const desc = props.items.map(item => item.volumeInfo.description);
  const img = props.items.map(item => item.volumeInfo.thumbnail);
  return (
      <li className="book">
        <img src={img} alt="book thumbnail" />
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{price}</p>
        <p>{desc}</p>
      </li>
    )
}