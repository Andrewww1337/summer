import React, { useEffect, useState } from "react";
import { Pagination } from "@mantine/core";

import { JobCard } from "../../components/jodCard/jodCard";
import { EmptyPage } from "../../components/emtpyPage/emptyPage";
import { getFavorite } from "../../Api/fetches";
import { Loader } from "../../components/loader";

import "./favoritePage.css";

export const FavoritePage = ({ windowDimenion, token }) => {
  const [favoritePosts, setFavoritePosts] = useState();
  const [refreshPosts, setRefreshPosts] = useState(true);
  const [activePage, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getFavorites = async () => {
    setLoading(true);
    const result = getFavorite();
    result.then((data) => {
      setLoading(false);

      setFavoritePosts(data);
    });
  };

  useEffect(() => {
    if (token) {
      if (
        JSON.parse(localStorage.getItem("favorite")).length > 0 &&
        !favoritePosts
      ) {
        getFavorites();
      }
    }
  }, [token, refreshPosts]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="favoritePage">
      {(!favoritePosts?.length ||
        JSON.parse(localStorage.getItem("favorite")).length < 1) && (
        <EmptyPage />
      )}
      <div>
        {!!favoritePosts?.length &&
          JSON.parse(localStorage.getItem("favorite")).length > 0 && (
            <div className="favoritePageVacancies">
              {favoritePosts
                ?.slice((activePage - 1) * 4, activePage * 4)
                .map((item) => (
                  <JobCard
                    getFavorites={getFavorites}
                    isFavorite={true}
                    setRefreshPosts={setRefreshPosts}
                    refreshPosts={refreshPosts}
                    key={item.id}
                    {...item}
                  />
                ))}
            </div>
          )}
      </div>
      {!!favoritePosts?.length &&
        JSON.parse(localStorage.getItem("favorite")).length > 0 && (
          <div className="pagination">
            <Pagination
              boundaries={windowDimenion.winWidth > 768 ? 1 : 0}
              value={activePage}
              onChange={setPage}
              total={Math.ceil(favoritePosts?.length / 4)}
            />
          </div>
        )}
    </div>
  );
};
