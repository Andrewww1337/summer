import React from "react";
import { Button, Input } from "@mantine/core";

import { ReactComponent as Search } from "../../img/Search.svg";
import { getVacancies } from "../../Api/fetches";

import "./searchPanel.css";

export const SearchPanel = ({
  setKeyword,
  keyword,
  searchParams,
  setVacansies,
  setPage,
}) => {
  return (
    <div className="searchPanel">
      <Input
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        value={keyword ? keyword : ""}
        className="searchInput"
        icon={<Search size="1rem" />}
        placeholder="Введите название вакансии"
        rightSection={
          <div>
            <Button
              onClick={async () => {
                setVacansies(await getVacancies(searchParams));
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
