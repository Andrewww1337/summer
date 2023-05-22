import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "./components/layout";
import { MainPage } from "./pages/mainPage/mainPage";
import { OneJobPage } from "./pages/oneJobPage/oneJobPage";

import { getToken } from "./Api/fetches";

import "./App.css";

function App() {
  const [tokenAvailable, setTokenAvailable] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      getAvailableToken();
    } else {
      setTokenAvailable(true);
    }
    if (!localStorage.getItem("favorite")) {
      localStorage.setItem("favorite", "[]");
    }
  }, []);

  const getAvailableToken = async () => {
    setTokenAvailable(await getToken());
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="/vacansy/search" />} />
          <Route
            path="vacansy/:type"
            element={<MainPage tokenAvailable={tokenAvailable} />}
          />
          <Route
            path="vacansy/:type/:id"
            element={<OneJobPage tokenAvailable={tokenAvailable} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
