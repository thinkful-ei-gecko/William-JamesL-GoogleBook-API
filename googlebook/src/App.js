import React, { Component } from 'react';
import Header from './Components/Header';
import BookList from './Components/BookList';

import './App.css';

class App extends Component {
  state = {
    books: [
    //   {
    //   title,
    //   author,
    //   price,
    //   desc,
    //   img
    // }
  ],
    searchTerm: '',
    printType: '',
    bookType:'No filter'
  }

  // setSearchTerm = (userInput) => {
  //   this.setState ({
  //     searchTerm: userInput
  //   })
  // }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  
  fetchBooks = (bookSearch) => {
    fetch(`https://www.googleapis.com/books/v1/volumes/?q=${this.state.searchTerm}`)
    .then(res => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject('Something went wrong')
    })
    .then(data => {
      console.log(data.items);
      this.setState({  
        books: data.items
      })
    })
  }

  handlePrintFilter = (e) => {
    this.setState({
      printType: e.target.value
    })
    fetch(`https://www.googleapis.com/books/v1/volumes/?q=${this.state.searchTerm}?printType=${this.state.printType}`)
    .then(res=>{
      if(res.ok){
        return res.json()
      }
      return Promise.reject('Something went wrong')
    })
    .then(data => {
      this.setState({
        books: data.items
      })
    })
  }

  render() {
    return (
      <main className="App">
        <Header 
          displaySearchForm={this.fetchBooks}
          handleSearchTerm={this.setSearchTerm}
          searchUpdate={this.handleChange}
          state={this.state}
          printFilter={this.handlePrintFilter}
        />
       
        <ul className="book-list">
          <BookList books={this.state.books}/>  
        </ul>
      </main>
    );
  }
}

export default App;