import { useEffect, useRef } from "react";

import "./burgerMenu.css";
import { SortingBar } from "../sortingBar";

export const BurgerMenu = ({
  setPamentFromValue,
  setPamentToValue,
  setCataloguesValue,
  cataloguesValue,
  pamentFromValue,
  pamentToValue,
  catalogues,
  setKeyword,
  setPage,
  activ,
  setActive,
  getNewVacansies,
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
          getNewVacansies={getNewVacansies}
          setPamentFromValue={setPamentFromValue}
          setPamentToValue={setPamentToValue}
          setCataloguesValue={setCataloguesValue}
          cataloguesValue={cataloguesValue}
          pamentFromValue={pamentFromValue}
          pamentToValue={pamentToValue}
          catalogues={catalogues}
          setKeyword={setKeyword}
          setPage={setPage}
        />
      </div>
    </div>
  );
};
