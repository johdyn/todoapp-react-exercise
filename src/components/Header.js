function Header({ onAddTodo }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    onAddTodo(form.todo.value);
    form.reset();
  }
  return (
    <header className="Header">
      <h1>The Todo App!</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="input-box"
          type="text"
          id="todo"
          name="todo"
          placeholder="Type a todo..."
          required
        />
        <button type="submit">Add</button>
      </form>
    </header>
  );
}

export default Header;
