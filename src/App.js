import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";

import { MainPage } from "./pages/mainPage/mainPage";

import "./App.css";
import { OneJobPage } from "./pages/oneJobPage/oneJobPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="/vacansy/search" />} />
          <Route path="vacansy/:type" element={<MainPage />} />
          <Route path="vacansy/:type/:id" element={<OneJobPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
