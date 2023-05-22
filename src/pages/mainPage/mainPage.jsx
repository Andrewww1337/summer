import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { SearchVacancyPage } from "../searchVacancyPage";
import { FavoritePage } from "../favoritePage";

import "./mainPage.css";

export const MainPage = ({ tokenAvailable }) => {
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

  return (
    <div className="mainPage">
      {type === "search" && (
        <SearchVacancyPage
          token={tokenAvailable}
          windowDimenion={windowDimenion}
        />
      )}
      {type === "favorite" && (
        <FavoritePage token={tokenAvailable} windowDimenion={windowDimenion} />
      )}
    </div>
  );
};
