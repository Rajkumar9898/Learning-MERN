import React, { createContext, useEffect, useReducer } from "react";

export const TodoItemContext = createContext({
    todoItems: [],
    addNewItem: () => { },
    deleteItem: () => { }
});

function todoReducer(state, action) {
    switch (action.type) {
        case 'LOAD':
            return action.payload || [];
        case 'ADD_ITEM':
            return [...state, { name: action.payload.name, dueDate: action.payload.dueDate }];
        case 'DELETE_ITEM':
            return state.filter(item => item.name !== action.payload.name);
        default:
            return state;
    }
};

const TodoItemsContextProvider = ({ children }) => {
    // 1. Load initial state from localStorage
    const [todoItems, dispatch] = useReducer(todoReducer, [], () => {
        const storedItems = localStorage.getItem("todoItems");
        return storedItems ? JSON.parse(storedItems) : [];
    });

    // 2. Save to localStorage whenever todoItems changes
    useEffect(() => {
        localStorage.setItem("todoItems", JSON.stringify(todoItems));
    }, [todoItems]);

    // Replace addNewItem function to dispatch action
    const addNewItem = (itemName, itemDueDate) => {
        dispatch({ type: 'ADD_ITEM', payload: { name: itemName, dueDate: itemDueDate } });
    };

    const deleteItem = (todoItemName) => {
        dispatch({ type: 'DELETE_ITEM', payload: { name: todoItemName } });
    }
    return (
        <TodoItemContext.Provider value={{
            todoItems,
            addNewItem,
            deleteItem
        }}>
            {children}
        </TodoItemContext.Provider>

    )
}

export default TodoItemsContextProvider;