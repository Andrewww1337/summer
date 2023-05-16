import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";

import { MainPage } from "./pages/mainPage/mainPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="/vacansy/search" />} />
          <Route path="vacansy/:type" element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
