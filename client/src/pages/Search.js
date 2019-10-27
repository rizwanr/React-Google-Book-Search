import  React,{Component} from "react";
import Nav from '../components/Nav';
import Jumbotron from '../components/Jumbotron';
import SearchForm from '../components/SearchForm';
import BookList from '../components/BookList'
import Book from '../components/Book';
import API from '../utils/googleBookAPI'


class Search extends Component {
  state={
    search:'',
    books:[],
    error:''
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBookByTitle(this.state.search)
      .then(res =>
        this.setState({ books: res.data.items})
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      search: value
    });
  };

  handleSubmitButton = event => {
    console.log('clicked')
    event.preventDefault();
    this.loadBooks()
  };


render(){
  return(
  <div className="Search">
   <Nav/>
   <Jumbotron title ="(React) Google Book Search" description="Search Book and Save Books of Interest"/>
      <SearchForm handleInputChange={this.handleInputChange} handleSubmitButton={this.handleSubmitButton} />
      {this.state.books.length ? (
      <BookList books ={this.state.books}/>
      ) : (
          <h3>No Results to Display</h3>
        )}
   <Book/>
   </div>
   

  )
}
}

export default Search