import React, { Component } from "react";
import Jumbotron from '../components/Jumbotron';
import SearchForm from '../components/SearchForm';
import Book from '../components/Book';
import API from '../utils/API'


class Saved extends Component {
  state = {
    savedBooks: '',
    error: ''
  }

  componentDidMount() {
    this.loadSavedBooks();
  }

  loadSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({ savedBooks: res.data })
      )
      .catch(err => console.log(err));
  };


  render() {
    return (
    <div className='Saved'>
        {this.state.savedBooks.length ? (
          this.state.savedBooks.map(book => {
            return <Book key={book.id} title={book.title} authors={book.authors} image={book.image} description={book.description} link={book.link}  />
          })

        ) : (
            <h3>No Results to Display</h3>
          )}
    </div>

    )

}

}

export default Saved