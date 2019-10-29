import React, { Component } from "react";
import SearchForm from '../components/SearchForm';
import Book from '../components/Book';
import API from '../utils/API'


class Search extends Component {
  state = {
    search: '',
    books: [],
    error: ''
  }



  loadBooks = () => {
    API.getBookByTitle(this.state.search)
      .then(res =>
        this.setState({ books: res.data.items })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({
      search: value
    });

  };



  handleSubmitButton = event => {
    event.preventDefault();
    this.loadBooks()
    this.setState({ search: '' })
  };

  handleSaveBook = (title, authors, description, image, link) => {
    console.log(title);
    console.log(authors)
    console.log(description)

    console.log(image)
    console.log(link)
    API.saveBook({
      title,
      authors,
      description,
      image,
      link,
    })
      .catch(err => console.log(err));

  }


  render() {
    return (
      <div className="Search">
        <SearchForm handleInputChange={this.handleInputChange} handleSubmitButton={this.handleSubmitButton} />
        {this.state.books.length ? (
          this.state.books.map(book => {
            console.log(book)
            let authors = book.volumeInfo.authors.join(', ');
            let title = book.volumeInfo.title;
            let imageSrc = book.volumeInfo.imageLinks.thumbnail;
            let description = book.volumeInfo.description;
            let link = book.volumeInfo.previewLink;
            return <Book key={title} title={title} authors={authors} image={imageSrc} description={description} link={link} handleSaveBook={this.handleSaveBook} />
          })

        ) : (
            <h3>No Results to Display</h3>
          )}
      </div>
    )
  }
}

export default Search