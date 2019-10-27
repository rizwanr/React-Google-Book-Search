import React from 'react';
import Book from '../Book'

function BookList ({books}){

return(
  <div className="Booklist">
  {books.map(book=>{
      let author = book.volumeInfo.authors;
      let title = book.volumeInfo.title;
      let imageSrc = book.volumeInfo.imageLinks.thumbnail;
      let description = book.volumeInfo.description;
      let link = book.volumeInfo.previewLink;
     return <Book title={title} author={title} image={imageSrc} description={description} link={link}/>
  })}
  
  </div>

)
}

export default BookList