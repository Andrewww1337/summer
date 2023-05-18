import { useState } from "react";

import "./burgerButton.css";
import { BurgerMenu } from "../burgerMenu";

export const BurgerButton = ({
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
}) => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div
      type="button"
      className="burgerButton"
      onClick={(e) => e.stopPropagation()}
    >
      <div>
        <button
          type="button"
          className={
            menuActive
              ? "cmnToggleSwitchRot active cmnToggleSwitch"
              : "cmnToggleSwitch"
          }
          onClick={() => setMenuActive(!menuActive)}
        >
          <span>menu</span>
        </button>
      </div>

      <BurgerMenu
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
        activ={menuActive}
        setActive={setMenuActive}
      />
    </div>
  );
};
