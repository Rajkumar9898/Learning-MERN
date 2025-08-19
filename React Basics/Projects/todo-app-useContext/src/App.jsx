import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItemList from "./components/TodoItemList";
import './App.css';
import React, { useState } from 'react';
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";



function App() {
  const [todoItems, setTodoItems] = useState([])

  const addNewItem = (todoName, todoDate) => {
    const newTodoItems = [...todoItems, { name: todoName, dueDate: todoDate }]
    setTodoItems(newTodoItems)
  }

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName)
    setTodoItems(newTodoItems)
  }

  return (
    <TodoItemsContext.Provider value = {{
      todoItems,
      addNewItem,
      deleteItem
    }}>
      <div className="todo-container text-center mt-5">
        <AppName/>
        <AddTodo/>
        <WelcomeMessage  />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <TodoItemList></TodoItemList>
            </div>
          </div>
        </div>
      </div>
    </TodoItemsContext.Provider>
  );
}


export default App;  