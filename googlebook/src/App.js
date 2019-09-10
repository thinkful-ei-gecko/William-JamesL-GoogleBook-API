import React, { Component } from 'react';
import Header from './Components/Header';
import BookList from './Components/BookList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        books: [],
        searchTerm: '',
        printType: 'all',
        bookType:'No filter'
      }
  }

  // handleChange(event){
  //   this.setState({
  //     searchTerm: event.target.value
  //   })
  // }

  fetchBooks () {
    fetch(`https://www.googleapis.com/books/v1/volumes/?q=harrypotter`)
    .then(res => {
      if(res.ok){
        return res.json();
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
          handleSearchForm={this.fetchBooks}
          // changeSearchTerm={this.handleChange}
        />
        <BookList books={this.state.books}/>
      </main>
    );
  }
}

export default App;
