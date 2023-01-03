import logo from "./logo.svg";
import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./components/TodosContainer";

function App() {
  return (
    <>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </>
  );
}

export default App;
