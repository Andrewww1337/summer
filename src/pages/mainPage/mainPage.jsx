import React from "react";
import { useParams } from "react-router-dom";

import { SearchVacancyPage } from "../searchVacancyPage";
import { FavoritePage } from "../favoritePage";

import "./mainPage.css";

export const MainPage = () => {
  const { type } = useParams();
  return (
    <div className="mainPage">
      {type === "search" && <SearchVacancyPage />}
      {type === "favorite" && <FavoritePage />}
    </div>
  );
};
