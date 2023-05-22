import { SortingBar } from "../sortingBar";

import "./burgerMenu.css";

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
  getNewVacancies,
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
          getNewVacancies={getNewVacancies}
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
