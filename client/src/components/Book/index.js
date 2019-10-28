import React from 'react';


function Book({ title, authors, description, image, link, handleSaveBook}){
  return (
    <div className="Book container">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-8">
              <p>{title}</p>
            </div>
            <div className="col-4 d-flex flex-row-reverse">
              <button type="button" className="btn btn-primary ">View</button>
              <button type="button" className="btn btn-secondary ml-2" onClick={() => handleSaveBook(title, authors, description, image, link)}>Save</button>
            </div>
          </div>
      </div>
        <div className="card-body">
          <blockquote className="blockquote">
      
            <p>{authors}</p>
            <div className="row">
              <div className="col-3"><img src={image} alt={title} /></div>
              <div className="col-8">{description}</div>
            </div>
           
        
          </blockquote>
        </div>
      </div>
      
    </div>
  )
}

export default Book