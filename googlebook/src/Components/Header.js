import React from 'react';
import Filter from './Filter';
import Search from './Search';


export default function Header(props) {
  return (
    <header>
      <h1>Google Book Search</h1>
      <Search 
        displaySearchForm={props.displaySearchForm}
        handleSearchTerm={props.handleSearchTerm}
        searchUpdate={props.searchUpdate}
        state={props.state}
      />
      <Filter 
        printFilter={props.printFilter}
      />
    </header>
  )
}