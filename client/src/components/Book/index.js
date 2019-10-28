import React from 'react';
import DeleteBtn from '../DeleteBtn';
import SaveBtn from '../SaveBtn';


function Book({id, title, authors, description, image, link, handleSaveBook, deleteBook}){
  return (
    <div className="Book container">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-8">
              <p>{title}</p>
            </div>
            <div className="col-4 d-flex flex-row-reverse">
              <a href={link} className="btn btn-primary ml-2" style={{height:'36px'}} target="_blank" rel="noopener noreferrer" >View</a>
              {id ? <DeleteBtn onClick={() => deleteBook(id)} /> :
                (<SaveBtn onClick={() => handleSaveBook(title, authors, description, image, link)} />)
            } 
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