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
    searchTerm: null,
    printType: 'all',
    bookType:'No filter'
  }

  setSearchTerm = (userInput) => {
    this.setState ({
      searchTerm: userInput
    })
  }

  
  fetchBooks = (bookSearch) => {
    fetch(`https://www.googleapis.com/books/v1/volumes/?q=${bookSearch}`)
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

  render() {
    return (
      <main className="App">
        <Header 
          displaySearchForm={this.fetchBooks}
          handleSearchTerm={this.setSearchTerm}
        />
        <ul className="book-list">
          <BookList books={this.state.books}/>  
        </ul>
      </main>
    );
  }
}

export default App;