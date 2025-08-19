import React, { useContext } from 'react';

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <>
      <div className="item-container" >
        <div className="row kg-row justify-content-center">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger"
              onClick={() => onDeleteClick(todoName)}
            >Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
