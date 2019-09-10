import React from 'react';

import './App.css';

class App extends Component {
  state = {
    titles,
    authors,
    price,
    desc,
    img: ''
  }

  fetchBooks(bookSearch){
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookSearch}`)
    .then(res => {
      if(res.ok){
        return res.json()
      }
      Promise.reject('Something went wrong')
    })
    .then(data => {
      const titles = data.items.map(item => item.volumeInfo.title);
      const authors = data.items.map(item => item.volumeInfo.authors);
      const price = data.items.map(item => item.saleInfo.retailPrice);
      const desc = data.items.map(item => item.volumeInfo.description);
      const img = data.items.map(item => item.volumeInfo.thumbnail);
      this.setState({
        titles,
        authors,
        price,
        desc,
        img
      })
    })
  }

  render(){
    return (
      <main className="App">

      </main>
    );
  }
}

export default App;
