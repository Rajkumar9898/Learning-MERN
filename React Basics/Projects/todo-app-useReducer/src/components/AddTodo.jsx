import React, { useContext, useRef } from 'react';
import { TodoItemContext } from '../../store/todo-items-store';


function AddTodo() {
  const { addNewItem } = useContext(TodoItemContext)
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value
    const dueDate = dueDateElement.current.value
    todoNameElement.current.value = ""
    dueDateElement.current.value = ""
    addNewItem(todoName, dueDate)
  }

  return (
    <div className="container">
      <div className="row kg-row justify-content-center">
        <div className="col-6">
          <input type="text" ref={todoNameElement}
            className="form-control" placeholder="Enter here" />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement}
            className="form-control" />
        </div>
        <div className="col-2">
          <button className="btn btn-success w-100"
            onClick={handleAddButtonClicked}>Add</button>
        </div>
      </div>
    </div>
  )
}

export default AddTodo