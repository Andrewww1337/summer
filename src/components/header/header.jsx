import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/Logo.svg";
import { ReactComponent as LittleLogo } from "../../img/LittleLogo.svg";

import "./header.css";

export const Header = () => {
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
    <div className="header ">
      <div className="customHeader">
        <Link className="logo" to={"/vacansy/search"}>
          {windowDimenion.winWidth > 768 ? <Logo /> : <LittleLogo />}
        </Link>

        <div className="navigation">
          <Link
            to={"/vacansy/search"}
            className={` ${
              type === "search" ? "linkToPage_active" : "linkToPage"
            }`}
          >
            Поиск Вакансий
          </Link>
          <Link
            to={`/vacansy/favorite`}
            className={`${
              type === "favorite" ? "linkToPage_active" : "linkToPage"
            }`}
          >
            Избранное
          </Link>
        </div>
      </div>
    </div>
  );
};
