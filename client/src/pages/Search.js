import  React,{Component} from "react";
import Nav from '../components/Nav';
import Jumbotron from '../components/Jumbotron';
import SearchForm from '../components/SearchForm';
import BookList from '../components/BookList'
import Book from '../components/Book';
import API from '../utils/API'


class Search extends Component {
  state={
    search:'',
    books:[],
    title:'',
    authors:'',
    image:'',
    description:'',
    link:'',
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
    this.setState({search:''})
  };

  handleSaveBook=title=>{
    console.log(`clicked ${title}`)
  }


render(){
  return(
  <div className="Search">
   <Nav/>
   <Jumbotron title ="(React) Google Book Search" description="Search Book and Save Books of Interest"/>
      <SearchForm handleInputChange={this.handleInputChange} handleSubmitButton={this.handleSubmitButton} />
      {this.state.books.length ? (
        this.state.books.map(book => {
          let author = book.volumeInfo.authors;
          let title = book.volumeInfo.title;
          let imageSrc = book.volumeInfo.imageLinks.thumbnail;
          let description = book.volumeInfo.description;
          let link = book.volumeInfo.previewLink;
          return <Book key={title} title={title} author={title} image={imageSrc} description={description} link={link} handleSaveBook={this.handleSaveBook} />
        })
   
      ) : (
          <h3>No Results to Display</h3>
        )}
   </div>
   

  )
}
}

export default Search