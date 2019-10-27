import React from 'react'

function SearchForm(props) {
  return (
      <div className="searchform container input-group mb-3">
      <input type="text" className="form-control" placeholder="Search book by title" />
      <div className="input-group-append" onChange={props.handleInputChange}>
        <button className="btn btn-outline-secondary" type="button">Search</button>
          </div>
        </div>
  );
}


export default SearchForm;