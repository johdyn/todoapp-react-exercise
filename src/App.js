import "./App.css";
// import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <header className="Header">
        <form>
          <input type="text" placeholder="Type a todo..." />
          <button
            type="submit" //onClick={addToDoClick}
          >
            Add
          </button>
        </form>
      </header>
      <ul>
        <li>Go with dog</li>
        <li>make coffee</li>
        <li>study react</li>
        <li>relax</li>
      </ul>
    </div>
  );
}

export default App;

/* <header className="header-class"></header>
</header> */
