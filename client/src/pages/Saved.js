import React, { Component } from "react";
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

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadSavedBooks())
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div className='Saved'>
        {this.state.savedBooks.length ? (
          this.state.savedBooks.map(book => {
            console.log(book)
            return <Book id={book._id} key={book._id} title={book.title} authors={book.authors} image={book.image} description={book.description} link={book.link} deleteBook={this.deleteBook} />
          })

        ) : (
            <h3>No Results to Display</h3>
          )}
      </div>

    )

  }

}

export default Saved