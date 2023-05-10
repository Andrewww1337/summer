import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header";
import { SortingBar } from "./components/sortingBar";
import { SearchPanel } from "./components/searchPanel";
import { MainSection } from "./components/mainSection";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="test">
        <SortingBar /> <MainSection />
      </div>

      <SearchPanel />
    </div>
  );
}

export default App;
