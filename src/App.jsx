import "./App.css";
import FormInput from "./components/FormInput";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <h1>ToDo list React</h1>

      <FormInput />
      <List />

      <div className="row">
        <label htmlFor="all">
          <input type="checkbox" name="all" id="all" />
          All
        </label>
        <p>You have 0 tasks to complete</p>
        <button id="delete">Delete</button>
      </div>
    </div>
  );
}

export default App;
