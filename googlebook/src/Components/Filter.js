import React from 'react';
import PrintType from './PrintType';
import BookType from './BookType';

export default function Filter(props){
  return (
    <div className ='filter'>
      <form className='filter'>
        <PrintType printFilter={props.printFilter}/>
        <BookType />
      </form>
    </div>
  )
}
