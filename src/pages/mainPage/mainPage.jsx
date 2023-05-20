import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { SearchVacancyPage } from "../searchVacancyPage";
import { FavoritePage } from "../favoritePage";
import { getToken } from "../../Api/fetches";

import "./mainPage.css";

export const MainPage = () => {
  const { type } = useParams();
  const [tokenAvailable, setTokenAvailable] = useState(false);

  const getAvailableToken = async () => {
    setTokenAvailable(await getToken());
  };

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
    if (!localStorage.getItem("jwt")) {
      getAvailableToken();
    } else {
      setTokenAvailable(true);
    }
  }, []);

  if (!localStorage.getItem("favorite")) {
    localStorage.setItem("favorite", "[]");
  }
  return (
    <div className="mainPage">
      {type === "search" && (
        <SearchVacancyPage
          token={tokenAvailable}
          windowDimenion={windowDimenion}
        />
      )}
      {type === "favorite" && <FavoritePage windowDimenion={windowDimenion} />}
    </div>
  );
};
