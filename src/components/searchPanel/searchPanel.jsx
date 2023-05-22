import React from "react";
import { Button, Input } from "@mantine/core";

import { ReactComponent as Search } from "../../img/Search.svg";

import "./searchPanel.css";

export const SearchPanel = ({
  setKeyword,
  keyword,
  setPage,
  windowDimenion,
  getNewVacancies,
}) => {
  return (
    <div className="searchPanel">
      <Input
        data-elem="search-input"
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        value={keyword ? keyword : ""}
        className="searchInput"
        icon={<Search size="1rem" />}
        placeholder={
          windowDimenion.winWidth > 500 ? "Введите название вакансии" : "Поиск"
        }
        styles={{ rightSection: { marginRight: "12px", width: "83px" } }}
        rightSection={
          <div>
            <Button
              data-elem="search-button"
              onClick={async () => {
                getNewVacancies();
                setPage(1);
              }}
              className="searchButton"
            >
              Поиск
            </Button>
          </div>
        }
      />
    </div>
  );
};
