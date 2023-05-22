import { useState } from "react";
import { BurgerMenu } from "../burgerMenu";

import "./burgerButton.css";

export const BurgerButton = ({
  setPamentFromValue,
  setPamentToValue,
  setCataloguesValue,
  cataloguesValue,
  pamentFromValue,
  pamentToValue,
  catalogues,
  setKeyword,
  setPage,
  getNewVacancies,
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
        activ={menuActive}
        setActive={setMenuActive}
      />
    </div>
  );
};
