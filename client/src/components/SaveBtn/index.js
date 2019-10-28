import React from 'react';

function SaveBtn(props) {
  return (
    <div className="DeleteBtn">
      <button type="button" className="btn btn-danger ml-2" {...props}>Save</button>
    </div>
  )
}

export default SaveBtn