function Todo({ todoText, isPending, onDoneClick, onDeleteClick }) {
  function handleToggleClick() {
    onDoneClick(todoText);
  }

  function handleDeleteClick() {
    onDeleteClick(todoText);
  }

  const classForPending = isPending ? "todo--pending" : "todo--done";

  return (
    <section className="todo-section">
      <button onClick={handleDeleteClick} className="delete-button">
        x
      </button>
      <p className="todoText-section">{todoText}</p>
      <button
        onClick={handleToggleClick}
        className={`done-button ${classForPending}`}
      >
        {isPending ? "Pending" : "Done"}
      </button>
    </section>
  );
}

export default Todo;
