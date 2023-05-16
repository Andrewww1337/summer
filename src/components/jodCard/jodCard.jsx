import React, { useEffect, useState } from "react";
import { ReactComponent as StarEmpty } from "../../img/StarEmpty.svg";
import { ReactComponent as StarFull } from "../../img/StarFull.svg";
import { ReactComponent as Dot } from "../../img/dot.svg";
import { ReactComponent as Location } from "../../img/location.svg";

import "./jobCard.css";

export const JobCard = ({ bigCard, ...item }) => {
  const [favorite, setFavorite] = useState(false);
  const [cardSize, setCardSize] = useState("");
  useEffect(() => {
    if (bigCard) {
      setCardSize("-big");
    }
  }, [bigCard]);

  const onClickFavoriteButton = () => {
    setFavorite(!favorite);
  };
  return (
    <div className="jobCard">
      <div className="jobCardTopSection">
        <h3 className={`cardTitle${cardSize}`}>{item.profession}</h3>
        <button onClick={onClickFavoriteButton} className="favoriteButton">
          {favorite ? <StarFull /> : <StarEmpty />}
        </button>
      </div>
      <div className={`jobCardMiddleSection${cardSize}`}>
        <p className={`salary${cardSize}`}>
          з/п <span>{item.payment_from}</span>-<span>{item.payment_to}</span>{" "}
          {item.currency}
        </p>
        <Dot className="dot" />
        <p className={`schedule${cardSize}`}>Полный рабочий день</p>
      </div>
      <div className={`jobCardBottomSection${cardSize}`}>
        <Location className="location" />
        <p className={`jobLocation${cardSize}`}>{item?.town?.title}</p>
      </div>
    </div>
  );
};
