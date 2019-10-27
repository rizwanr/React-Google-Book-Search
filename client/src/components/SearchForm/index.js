import React from 'react'

function SearchForm(props) {
  return (
      <div className="searchform container input-group mb-3">
      <input type="text" className="form-control" placeholder="Search book by title" onChange={props.handleInputChange} />
      <div className="input-group-append" >
        <button className="btn btn-outline-secondary" type="button" onClick={props.handleSubmitButton}>Search</button>
          </div>
        </div>
  );
}


export default SearchForm;