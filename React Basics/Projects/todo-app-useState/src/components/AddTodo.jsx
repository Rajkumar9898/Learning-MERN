import React, { useState } from 'react';


function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("")
  const [dueDate, setdueDate] = useState("")
  const handleNameChange = (event) => {
    setTodoName(event.target.value)
  }
  const handleDateChange = (event) => {
    setdueDate(event.target.value)
  }
  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate)
    setdueDate("")
    setTodoName("")
  }

  return (
    <div className="container">
      <div className="row kg-row justify-content-center">
        <div className="col-6">
          <input type="text" className="form-control" placeholder="Enter here"
            onChange={handleNameChange} />
        </div>
        <div className="col-4">
          <input type="date" className="form-control"
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