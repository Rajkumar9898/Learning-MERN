import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItemList from "./components/TodoItemList";
import './App.css';
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "../store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <div className="todo-container text-center mt-5">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <div className="container"> 
          <div className="row justify-content-center"> 
            <div className="col-12">
              <TodoItemList />
            </div>
          </div>
        </div>
      </div>
    </TodoItemsContextProvider>
  );
}
//

export default App;