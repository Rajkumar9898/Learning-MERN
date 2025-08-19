import React from "react";
import TodoItem from "./TodoItem";

function TodoItemList({ todoItems, onDeleteClick }) {
  return (
    <div className="container mt-4">
      {todoItems.map((item, index) => (
        <TodoItem key={index} todoName={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick} />
      ))}
    </div>
  );
}

export default TodoItemList;
