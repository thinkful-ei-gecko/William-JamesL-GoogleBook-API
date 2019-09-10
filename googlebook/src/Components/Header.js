import React from 'react';
import Filter from './Filter';
import Search from './Search';


export default function Header() {
  return (
    <header>
      <h1>Google Book Search</h1>
      <Search />
      <Filter />
    </header>

    
  )
}