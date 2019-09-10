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
  fetchBooks(){
    fetch(`https://www.googleapis.com/books/v1/volumes/`)
    .then(res => {
      if(res.ok){
        return res.json();
      }
      Promise.reject('Something went wrong')
    })
    .then(data => {
      console.log(data);
      this.setState({
        books: data.items
      })
    })
  }

  render() {
    return (
      <main className="App">
        <Header />
        <BookList books={this.state.books}/>
      </main>
    );
  }
}

export default App;
