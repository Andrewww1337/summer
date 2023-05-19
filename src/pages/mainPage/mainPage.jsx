import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { SearchVacancyPage } from "../searchVacancyPage";
import { FavoritePage } from "../favoritePage";
import { getToken } from "../../Api/fetches";

import "./mainPage.css";

export const MainPage = () => {
  const { type } = useParams();

  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);

  useEffect(() => {
    getToken();
  }, []);
  if (!localStorage.getItem("favorite")) {
    localStorage.setItem("favorite", "[]");
  }
  return (
    <div className="mainPage">
      {type === "search" && (
        <SearchVacancyPage windowDimenion={windowDimenion} />
      )}
      {type === "favorite" && <FavoritePage windowDimenion={windowDimenion} />}
    </div>
  );
};
