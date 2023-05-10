import "./jobCard.css";
import React, { useEffect, useRef, useState, ReactElement } from "react";
import { ReactComponent as StarEmpty } from "../../img/StarEmpty.svg";
import { ReactComponent as StarFull } from "../../img/StarFull.svg";
import { ReactComponent as Dot } from "../../img/dot.svg";
import { ReactComponent as Location } from "../../img/location.svg";

export const JobCard = () => {
  const [favorite, setFavorite] = useState(false);
  const onClickFavoriteButton = () => {
    setFavorite(!favorite);
  };
  return (
    <div className="jobCard">
      <div className="jobCardTopSection">
        <h3 className="cardTitle">Менеджер-дизайнер</h3>
        <button onClick={onClickFavoriteButton} className="favoriteButton">
          {favorite ? <StarFull /> : <StarEmpty />}
        </button>
      </div>
      <div className="jobCardMiddleSection">
        <p className="salary">
          з/п от <span>70000</span> rub
        </p>
        <Dot className="dot" />
        <p className="schedule">Полный рабочий день</p>
      </div>
      <div className="jobCardBottomSection">
        <Location className="location" />
        <p className="jobLocation">Новый уренгой</p>
      </div>
    </div>
  );
};
