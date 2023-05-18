import { useEffect, useRef } from "react";

import "./burgerMenu.css";
import { SortingBar } from "../sortingBar";

export const BurgerMenu = ({
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
  keyword,
  setPage,
  activ,
  setActive,
}) => {
  return (
    <div
      onClick={(e) => {
        setActive(false);
      }}
      type="button"
      className={activ ? "burgerMenu active" : "burgerMenu"}
    >
      <div onClick={(e) => e.stopPropagation()} className="burgerContent">
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
      </div>
    </div>
  );
};
