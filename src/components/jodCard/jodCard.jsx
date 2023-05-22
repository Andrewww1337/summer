import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { ReactComponent as StarEmpty } from "../../img/StarEmpty.svg";
import { ReactComponent as StarFull } from "../../img/StarFull.svg";
import { ReactComponent as Dot } from "../../img/dot.svg";
import { ReactComponent as Location } from "../../img/location.svg";

import "./jobCard.css";

export const JobCard = ({
  setRefreshPosts,
  refreshPosts,
  isFavorite,
  getFavorites,
  bigCard,
  ...item
}) => {
  const { type } = useParams();
  const [favorite, setFavorite] = useState(false);
  const [cardSize, setCardSize] = useState("");

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("favorite"))?.some(
        (vacansy) => vacansy === item.id
      )
    ) {
      setFavorite(true);
    }
  }, [favorite, item.id]);

  useEffect(() => {
    if (bigCard) {
      setCardSize("-big");
    }
  }, [bigCard]);

  const getUpageFavorite = () => {
    if (isFavorite) {
      getFavorites();
    }
  };

  const onClickFavoriteButton = () => {
    setFavorite(!favorite);
    if (
      !JSON.parse(localStorage.getItem("favorite"))?.some(
        (vacansy) => vacansy === item.id
      )
    ) {
      const favoriteDate = JSON.parse(localStorage.getItem("favorite"));
      favoriteDate.push(item.id);
      localStorage.setItem("favorite", JSON.stringify(favoriteDate));
    } else {
      const vacancies = JSON.parse(localStorage.getItem("favorite"));
      const findRemovableVacansy = vacancies.findIndex(
        (vacansy) => vacansy === item.id
      );
      vacancies.splice(findRemovableVacansy, 1);
      localStorage.setItem("favorite", JSON.stringify(vacancies));
    }
  };
  return (
    <Link
      data-elem={`vacancy-${item.id}`}
      to={`/vacansy/${type}/${item.id}`}
      className="jobCard"
    >
      <div className="jobCardTopSection">
        <h3 className={`cardTitle${cardSize}`}>{item.profession}</h3>
        <button
          data-elem={`vacancy-${item.id}-shortlist-button`}
          onClick={(event) => {
            event.preventDefault();
            onClickFavoriteButton();
            getUpageFavorite();
          }}
          className="favoriteButton"
        >
          {favorite ? <StarFull /> : <StarEmpty className="star" />}
        </button>
      </div>
      <div className={`jobCardMiddleSection${cardSize}`}>
        <p className={`salary${cardSize}`}>
          з/п{" "}
          {item.payment_from > 0 && item.payment_to > 0 && (
            <span>
              {item.payment_from} - {item.payment_to}
            </span>
          )}
          {item.payment_from < 1 && item.payment_to < 1 && (
            <span>Договорная</span>
          )}
          {item.payment_from > 0 && item.payment_to < 1 && (
            <span>от {item.payment_from}</span>
          )}
          {item.payment_from < 1 && item.payment_to > 0 && (
            <span>{item.payment_to}</span>
          )}{" "}
          {item.payment_from > 0 ||
            (item.payment_to > 0 && <span> {item.currency}</span>)}
        </p>
        <Dot className="dot" />
        <p className={`schedule${cardSize}`}>{item?.type_of_work?.title}</p>
      </div>
      <div className={`jobCardBottomSection${cardSize}`}>
        <Location className="location" />
        <p className={`jobLocation${cardSize}`}>{item?.town?.title}</p>
      </div>
    </Link>
  );
};
