import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoItemContext } from '../../store/todo-items-store';

function TodoItemList() {
  const {todoItems} = useContext(TodoItemContext)
  return (
    <>
      {todoItems.map((item, index) => (
        <TodoItem key={index} todoName={item.name} todoDate={item.dueDate}  />
      ))}
    </>
  );
}

export default TodoItemList;
