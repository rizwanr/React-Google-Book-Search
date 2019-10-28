import React from 'react';

function DeleteBtn(props){
return (
  <div className="DeleteBtn">
    <button type="button" className="btn btn-danger ml-2" {...props}>Delete</button>
  </div>
)
}

export default DeleteBtn