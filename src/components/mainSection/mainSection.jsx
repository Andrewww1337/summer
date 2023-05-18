import React from "react";
import { Pagination } from "@mantine/core";

import { SearchPanel } from "../searchPanel";
import { JobCard } from "../jodCard/jodCard";
import { BurgerButton } from "../burgerButton";

import "./mainSection.css";
import { EmptyPage } from "../emtpyPage/emptyPage";

export const MainSection = ({
  vacansies,
  setCatalogues,
  setPamentFromValue,
  setPamentToValue,
  setCataloguesValue,
  cataloguesValue,
  pamentFromValue,
  pamentToValue,
  catalogues,
  setVacansies,
  searchParams,
  setKeyword,
  activePage,
  setPage,
  keyword,
  windowDimenion,
}) => {
  return (
    <div className="mainSection">
      <div className="sortingPanel">
        {windowDimenion.winWidth < 769 && (
          <BurgerButton
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
        )}
        <SearchPanel
          setVacansies={setVacansies}
          searchParams={searchParams}
          setKeyword={setKeyword}
          keyword={keyword}
          setPage={setPage}
        />
      </div>
      <div className="content">
        {vacansies?.data?.objects?.map((item) => (
          <JobCard key={item.id} {...item} />
        ))}
        {!vacansies?.data?.objects?.length && <EmptyPage mainPage={true} />}
      </div>
      {vacansies && (
        <Pagination
          className="pagination"
          value={activePage}
          onChange={setPage}
          total={
            vacansies?.data?.total > 500
              ? 125
              : Math.ceil(vacansies?.data?.total / 4)
          }
        />
      )}
    </div>
  );
};
