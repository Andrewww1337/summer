import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Man } from "../../img/man.svg";

import "./emptyPage.css";

export const EmptyPage = ({ mainPage }) => {
  return (
    <div className={`emptyPage ${mainPage ? "ForMain" : "ForFavorite"}`}>
      <Man />
      <h3 className="emptyTitle">{`${
        mainPage
          ? "Упс, поиск не дал результата!"
          : "Упс, здесь еще ничего нет!"
      }`}</h3>
      <Link
        to={`${mainPage ? "/vacansy/favorite/" : "/vacansy/search/"}`}
        className="linkOutEmptyPage"
      >
        {`${mainPage ? "Избранные" : "Поиск Вакансий"}`}
      </Link>
    </div>
  );
};
