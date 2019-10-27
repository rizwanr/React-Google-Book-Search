import axios from 'axios';

export default{
  getBookByTitle(title){
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`);
  },

  saveBook(bookData){
    return axios.post('/api/books', bookData )
    
  }
}