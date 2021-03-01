import "./App.css";
import DataProvider from "./components/DataProvider";
import FormInput from "./components/FormInput";
import Info from "./components/Info";
import List from "./components/List";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>ToDo list React</h1>

        <FormInput />
        <List />
        <Info />
      </div>
    </DataProvider>
  );
}

export default App;
