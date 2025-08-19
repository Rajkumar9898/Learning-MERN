import React, { useContext } from 'react'
import { TodoItemContext } from '../../store/todo-items-store'

function WelcomeMessage() {
    const { todoItems } = useContext(TodoItemContext)
    return todoItems.length === 0 && <p>Enjoy your day</p>
}

export default WelcomeMessage