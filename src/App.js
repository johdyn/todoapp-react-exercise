import React from "react";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [todoArray, setTodoArray] = useState([]);

  function handleAddTodo(todoText) {
    const newTodoArray = [
      ...todoArray,
      {
        text: todoText,
        isPending: true,
      },
    ];
    setTodoArray(newTodoArray);
    console.log(newTodoArray);
  }
  function handleToggleDone(text) {
    const newTodoArray = todoArray.map((todo) => {
      if (todo.text === text) {
        return {
          ...todo,
          isPending: !todo.isPending,
        };
      } else {
        return todo;
      }
    });
    setTodoArray(newTodoArray);
  }

  function handleDeleteTodo(todoText) {
    const newTodoArray = todoArray.filter((todo) => todo.text !== todoText);
    setTodoArray(newTodoArray);
  }

  return (
    <div className="App">
      <Header onAddTodo={handleAddTodo} />
      <main className="main-content">
        <TodoList
          todos={todoArray}
          onToggleDoneClick={handleToggleDone}
          onDeleteTodo={handleDeleteTodo}
        />
      </main>
      <footer className="footer-section"></footer>
    </div>
  );
}

export default App;
