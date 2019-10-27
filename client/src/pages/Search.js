import  React,{Component} from "react";
import Nav from '../components/Nav'
import Jumbotron from '../components/Jumbotron';
import SearchForm from '../components/SearchForm'
import Book from '../components/Book'

class Search extends Component {
  state={
    search:'',
    books:[],
    error:''
  }



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.search)
  };


render(){
  return(
  <div className="Search">
   <Nav/>
   <Jumbotron title ="(React) Google Book Search" description="Search Book and Save Books of Interest"/>
   <SearchForm handleInputChange={this.handleInputChange} />
   <Book/>
   </div>
   

  )
}
}

export default Search