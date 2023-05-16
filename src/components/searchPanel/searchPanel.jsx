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
}) => {
  return (
    <div className="searchPanel">
      <Input
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        value={keyword}
        className="searchInput"
        icon={<Search size="1rem" />}
        placeholder="Введите название вакансии"
        rightSection={
          <div>
            <Button
              onClick={async () => {
                setVacansies(await getVacancies(searchParams));
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
