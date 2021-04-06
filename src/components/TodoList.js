import Todo from "./Todo";

function TodoList({ todos, onToggleDoneClick, onDeleteTodo }) {
  function renderTodos() {
    return todos.map((todo, index) => {
      return (
        <Todo
          key={todo.text}
          todoText={todo.text}
          isPending={todo.isPending}
          onDoneClick={onToggleDoneClick}
          onDeleteClick={onDeleteTodo}
        />
      );
    });
  }
  return <div>{renderTodos()}</div>;
}

export default TodoList;
