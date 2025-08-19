import { useRef } from 'react';


function AddTodo({ onNewItem }) {
  const todoNameElement = useRef()
  const todoDateElement = useRef()

  const handleAddButtonClicked = () => {
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = ""
    todoDateElement.current.value = ""
    onNewItem(todoName, todoDate)
  }

  return (
    <div className="container">
      <div className="row kg-row justify-content-center">
        <div className="col-6">
          <input type="text"
            ref={todoNameElement}
            className="form-control" placeholder="Enter here"
          />
        </div>
        <div className="col-4">
          <input type="date"
            ref={todoDateElement}
            className="form-control"
          />
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