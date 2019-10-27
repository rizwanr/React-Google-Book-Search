import React from 'react';


function Book(props){
  return (
    <div className="Book container">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-8">
              <p>title:Harry Potter</p>
            </div>
            <div className="col-4 d-flex flex-row-reverse">
              <button type="button" className="btn btn-primary ">Primary</button>
              <button type="button" className="btn btn-secondary ml-2">Secondary</button>
            </div>
          </div>
      </div>
        <div className="card-body">
          <blockquote className="blockquote">
      
            <p>Author:JK Rowling</p>
            <div className="row">
              <div className="col-3"><img /></div>
              <div className="col-8">Description</div>
            </div>
           
        
          </blockquote>
        </div>
      </div>
      
    </div>
  )
}

export default Book