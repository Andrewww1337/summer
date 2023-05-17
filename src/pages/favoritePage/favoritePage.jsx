import React, { useEffect, useState } from "react";
import { Pagination } from "@mantine/core";

import "./favoritePage.css";
import { JobCard } from "../../components/jodCard/jodCard";

export const FavoritePage = () => {
  const [favoritePosts, setFavoritePosts] = useState();
  const [refreshPosts, setRefreshPosts] = useState(true);
  const [activePage, setPage] = useState(1);
  useEffect(() => {
    setFavoritePosts(JSON.parse(localStorage.getItem("favorite")));
    console.log("wew");
  }, [refreshPosts]);
  return (
    <div className="favoritePage">
      <div>
        <div className="favoritePageVacancies">
          {favoritePosts
            ?.slice((activePage - 1) * 4, activePage * 4)
            .map((item) => (
              <JobCard
                isFavorite={true}
                setRefreshPosts={setRefreshPosts}
                refreshPosts={refreshPosts}
                key={item.id}
                {...item}
              />
            ))}
        </div>
      </div>
      <div className="pagination">
        <Pagination
          value={activePage}
          onChange={setPage}
          total={Math.ceil(favoritePosts?.length / 4)}
        />
      </div>
    </div>
  );
};
