import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItemList from "./components/TodoItemList";
import './App.css';
import React, { useState } from 'react';
import WelcomeMessage from "./components/WelcomeMessage";



function App() {
  const [todoItems, setTodoItems] = useState([])

  const handleNewItem = (todoName, todoDate) => {
    const newTodoItems = [...todoItems, { name: todoName, dueDate: todoDate }]
    setTodoItems(newTodoItems)
  }

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName)
    setTodoItems(newTodoItems)
  }

  return (
    <div className="todo-container text-center mt-5">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <WelcomeMessage todoItems={todoItems} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <TodoItemList todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItemList>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;  