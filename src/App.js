import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header";
import { SortingBar } from "./components/sortingBar";

function App() {
  return (
    <div className="App">
      <Header />
      <SortingBar />
    </div>
  );
}

export default App;
