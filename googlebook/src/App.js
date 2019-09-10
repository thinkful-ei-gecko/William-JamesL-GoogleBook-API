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

  
  // ?q=${bookSearch}
  fetchBooks (bookSearch) {
    fetch(`https://www.googleapis.com/books/v1/volumes/?q=harrypotter`)
    .then(res => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject('Something went wrong')
    })
    .then(data => {
      console.log(data);
      // this.setState({  
      //   books: data.items
      // })
    })
  }

  render() {
    return (
      <main className="App">
        <Header 
          handleSearchForm={this.fetchBooks}
        />
        <BookList books={this.state.books}/>
      </main>
    );
  }
}

export default App;
