import React from 'react';

export default function Book (props) {
  const title = props.book.volumeInfo.title;
  const desc = props.book.volumeInfo.description;
  const img = props.book.volumeInfo.imageLinks.thumbnail;
  let price = 0;
  if(props.book.saleInfo.retailPrice) {
    price = props.book.saleInfo.retailPrice.amount;
  }
  let author = "";
  if(props.book.volumeInfo.authors) {
    author=props.book.volumeInfo.authors.join(', ');
  }

  // console.log(title, author, price, desc, img);

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