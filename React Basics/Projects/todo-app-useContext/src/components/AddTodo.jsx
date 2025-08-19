import React, { useContext, useState } from 'react';
import { TodoItemsContext } from '../store/todo-items-store';


function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext)
  const [todoName, setTodoName] = useState("")
  const [dueDate, setdueDate] = useState("")
  const handleNameChange = (event) => {
    setTodoName(event.target.value)
  }
  const handleDateChange = (event) => {
    setdueDate(event.target.value)
  }
  const handleAddButtonClicked = () => {
    addNewItem(todoName, dueDate)
    setdueDate("")
    setTodoName("")
  }

  return (
    <div className="container">
      <div className="row kg-row justify-content-center">
        <div className="col-6">
          <input type="text" className="form-control" 
          placeholder="Enter here"
          value={todoName}
            onChange={handleNameChange} />
        </div>
        <div className="col-4">
          <input type="date" className="form-control"
          value={dueDate} 
            onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button className="btn btn-success w-100"
            onClick={handleAddButtonClicked}>Add</button>
        </div>
      </div>
    </div>
  )
}

export default AddTodo;