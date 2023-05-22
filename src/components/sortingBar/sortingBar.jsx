import React, { useState } from "react";
import { ReactComponent as Cross } from "../../img/Cross.svg";
import { ReactComponent as ChevronDown } from "../../img/chevronDown.svg";
import { ReactComponent as ChevronUp } from "../../img/chevronUp.svg";

import { Select, NumberInput, Button } from "@mantine/core";

import "./sortingBar.css";

export const SortingBar = ({
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
  const [jodStateIsOpen, setJodStateIsOpen] = useState(false);

  return (
    <div className="sortingBar">
      <div className="sortingHeader">
        <h3 className="sortingTitle">Фильтры</h3>
        <button
          onClick={() => {
            setPamentFromValue("");
            setPamentToValue("");
            setKeyword("");
            setCataloguesValue("");
            setPage(1);
            getNewVacancies({
              keyword: "",
              payment_from: "",
              payment_to: "",
              catalogues: "",
              page: 0,
            });
          }}
          className="resetFilterButton"
        >
          <span>Сбросить все</span>
          <Cross className="crossButton" />
        </button>
      </div>
      {catalogues && (
        <div className="selectJob">
          <Select
            onChange={setCataloguesValue}
            label="Отрасль"
            value={cataloguesValue}
            placeholder="Выберете отрасль"
            rightSection={
              jodStateIsOpen ? (
                <ChevronUp className="chevron" size="1rem" />
              ) : (
                <ChevronDown className="chevron" size="1rem" />
              )
            }
            rightSectionWidth={30}
            styles={{ rightSection: { pointerEvents: "none", margin: "5px" } }}
            data={catalogues?.map((item) => ({
              label: `${item?.title_rus?.substr(0, 23)} ${
                item?.title_rus?.length > 23 ? "..." : ""
              }`,
              value: item?.key,
            }))}
            onDropdownClose={() => {
              setJodStateIsOpen(false);
            }}
            onDropdownOpen={() => {
              setJodStateIsOpen(true);
            }}
          />
        </div>
      )}
      <div className="selectSalary">
        <NumberInput
          styles={{ rightSection: { marginRight: "5px" } }}
          onChange={setPamentFromValue}
          value={pamentFromValue}
          placeholder="От"
          label="Оклад"
        />
        <NumberInput
          styles={{ rightSection: { marginRight: "5px" } }}
          value={pamentToValue}
          onChange={setPamentToValue}
          placeholder="До"
        />
      </div>
      <div>
        <Button
          onClick={() => {
            getNewVacancies();
            setPage(1);
          }}
          className="submitFilterButton"
        >
          Применить
        </Button>
      </div>
    </div>
  );
};
