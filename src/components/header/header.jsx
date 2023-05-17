import React from "react";
import { useParams, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/Logo.svg";

import "./header.css";

export const Header = () => {
  const { type } = useParams();
  return (
    <div className="header ">
      <div className="customHeader">
        <Logo className="logo" />
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
            Избранные
          </Link>
        </div>
      </div>
    </div>
  );
};
