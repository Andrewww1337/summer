import React from "react";
import { Pagination } from "@mantine/core";

import { SearchPanel } from "../searchPanel";
import { JobCard } from "../jodCard/jodCard";
import { BurgerButton } from "../burgerButton";

import "./mainSection.css";
import { EmptyPage } from "../emtpyPage/emptyPage";

export const MainSection = ({
  vacansies,

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
  getNewVacansies,
}) => {
  return (
    <div className="mainSection">
      <div className="sortingPanel">
        {windowDimenion.winWidth < 769 && (
          <BurgerButton
            getNewVacansies={getNewVacansies}
            setPamentFromValue={setPamentFromValue}
            setPamentToValue={setPamentToValue}
            setCataloguesValue={setCataloguesValue}
            cataloguesValue={cataloguesValue}
            pamentFromValue={pamentFromValue}
            pamentToValue={pamentToValue}
            setKeyword={setKeyword}
            setPage={setPage}
          />
        )}
        <SearchPanel
          windowDimenion={windowDimenion}
          setKeyword={setKeyword}
          keyword={keyword}
          getNewVacansies={getNewVacansies}
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
          boundaries={windowDimenion.winWidth > 768 ? 1 : 0}
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
