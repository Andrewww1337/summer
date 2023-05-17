import React, { useState } from "react";

import { SortingBar } from "../../components/sortingBar";
import { MainSection } from "../../components/mainSection";
import { Pagination } from "@mantine/core";

import "./searchVacancyPage.css";

export const SearchVacancyPage = () => {
  const [cataloguesValue, setCataloguesValue] = useState("");
  const [pamentFromValue, setPamentFromValue] = useState("");
  const [pamentToValue, setPamentToValue] = useState("");
  const [keyword, setKeyword] = useState(null);
  const [catalogues, setCatalogues] = useState([]);
  const [vacansies, setVacansies] = useState([]);
  const [activePage, setPage] = useState(1);
  const searchParams = {
    keyword: keyword && `${keyword}`,
    payment_from: pamentFromValue && `${pamentFromValue}`,
    payment_to: pamentToValue && `${pamentToValue}`,
    catalogues: cataloguesValue && `${cataloguesValue}`,
    page: `${activePage - 1}`,
  };
  return (
    <div className="searchVacancyPage">
      <div className="searchVacancySection">
        <SortingBar
          setCatalogues={setCatalogues}
          setPamentFromValue={setPamentFromValue}
          setPamentToValue={setPamentToValue}
          setCataloguesValue={setCataloguesValue}
          cataloguesValue={cataloguesValue}
          pamentFromValue={pamentFromValue}
          pamentToValue={pamentToValue}
          catalogues={catalogues}
          setVacansies={setVacansies}
          keyword={keyword}
          searchParams={searchParams}
          setKeyword={setKeyword}
          activePage={activePage}
          setPage={setPage}
        />
        <MainSection
          setVacansies={setVacansies}
          searchParams={searchParams}
          setKeyword={setKeyword}
          vacansies={vacansies}
          keyword={keyword}
          activePage={activePage}
          setPage={setPage}
        />
      </div>
    </div>
  );
};
