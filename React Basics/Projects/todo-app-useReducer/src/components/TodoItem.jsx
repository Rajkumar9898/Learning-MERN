import React, { useContext } from 'react';
import { TodoItemContext } from '../../store/todo-items-store';

function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemContext)
  return (
    <>
      <div className="item-container" >
        <div className="row kg-row justify-content-center">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger"
              onClick={() => deleteItem(todoName)}
            >Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
