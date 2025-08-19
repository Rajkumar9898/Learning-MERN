import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItemList() {
  const {todoItems} = useContext(TodoItemsContext)
  return (
    <div className="container mt-4">
      {todoItems.map((item, index) => (
        <TodoItem key={index} todoName={item.name} todoDate={item.dueDate}/>
      ))}
    </div>
  );
}

export default TodoItemList;
