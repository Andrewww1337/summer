import React from "react";

import { Pagination } from "@mantine/core";

import { SearchPanel } from "../searchPanel";
import { JobCard } from "../jodCard/jodCard";
import { BurgerButton } from "../burgerButton";
import { EmptyPage } from "../emtpyPage/emptyPage";

import "./mainSection.css";

export const MainSection = ({
  vacancies,
  setPamentFromValue,
  setPamentToValue,
  setCataloguesValue,
  cataloguesValue,
  pamentFromValue,
  pamentToValue,
  setKeyword,
  activePage,
  setPage,
  keyword,
  windowDimenion,
  getNewVacancies,
  catalogues,
}) => {
  return (
    <div className="mainSection">
      <div className="sortingPanel">
        {windowDimenion.winWidth < 769 && (
          <BurgerButton
            getNewVacancies={getNewVacancies}
            setPamentFromValue={setPamentFromValue}
            setPamentToValue={setPamentToValue}
            setCataloguesValue={setCataloguesValue}
            cataloguesValue={cataloguesValue}
            pamentFromValue={pamentFromValue}
            pamentToValue={pamentToValue}
            setKeyword={setKeyword}
            setPage={setPage}
            catalogues={catalogues}
          />
        )}
        <SearchPanel
          windowDimenion={windowDimenion}
          setKeyword={setKeyword}
          keyword={keyword}
          getNewVacancies={getNewVacancies}
          setPage={setPage}
        />
      </div>
      <div className="content">
        {vacancies?.objects?.map((item) => (
          <JobCard key={item.id} {...item} />
        ))}
        {!vacancies?.objects?.length && <EmptyPage mainPage={true} />}
      </div>
      {vacancies?.objects && (
        <Pagination
          boundaries={windowDimenion.winWidth > 768 ? 1 : 0}
          className="pagination"
          value={activePage}
          onChange={setPage}
          total={vacancies?.total > 500 ? 125 : Math.ceil(vacancies?.total / 4)}
        />
      )}
    </div>
  );
};
