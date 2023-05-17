import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { SearchVacancyPage } from "../searchVacancyPage";
import { FavoritePage } from "../favoritePage";
import { getToken } from "../../Api/fetches";

import "./mainPage.css";

export const MainPage = () => {
  const { type } = useParams();
  useEffect(() => {
    getToken();
  }, []);
  if (!localStorage.getItem("favorite")) {
    localStorage.setItem("favorite", "[]");
  }
  return (
    <div className="mainPage">
      {type === "search" && <SearchVacancyPage />}
      {type === "favorite" && <FavoritePage />}
    </div>
  );
};
