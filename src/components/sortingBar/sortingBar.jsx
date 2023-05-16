import React, { useEffect, useState } from "react";
import { ReactComponent as Cross } from "../../img/Cross.svg";
import { ReactComponent as ChevronDown } from "../../img/chevronDown.svg";
import { ReactComponent as ChevronUp } from "../../img/chevronUp.svg";

import { Select, NumberInput, Button } from "@mantine/core";
import { getCatalogues, getVacancies, getVacancy } from "../../Api/fetches";

import "./sortingBar.css";

export const SortingBar = ({
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
}) => {
  const [jodStateIsOpen, setJodStateIsOpen] = useState(false);

  const getData = async () => {
    setCatalogues(await getCatalogues());
  };
  useEffect(() => {
    getData();
    getVacancy(35276608);
    console.log(catalogues);
  }, []);

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
          }}
          className="resetFilterButton"
        >
          <span>Сбросить все</span>
          <Cross className="crossButton" />
        </button>
      </div>
      <div className="selectJob">
        <Select
          onChange={setCataloguesValue}
          label="Отрасль"
          value={cataloguesValue}
          placeholder="Выберете отрасль"
          rightSection={
            jodStateIsOpen ? (
              <ChevronUp size="1rem" />
            ) : (
              <ChevronDown size="1rem" />
            )
          }
          rightSectionWidth={30}
          styles={{ rightSection: { pointerEvents: "none" } }}
          data={catalogues?.map((item) => ({
            label: item.title_rus,
            value: item.key,
          }))}
          onDropdownClose={() => {
            setJodStateIsOpen(false);
          }}
          onDropdownOpen={() => {
            setJodStateIsOpen(true);
          }}
        />
      </div>
      <div className="selectSalary">
        <NumberInput
          onChange={setPamentFromValue}
          value={pamentFromValue}
          placeholder="От"
          label="Оклад"
        />
        <NumberInput
          value={pamentToValue}
          onChange={setPamentToValue}
          placeholder="До"
        />
      </div>
      <div>
        <Button
          onClick={async () => setVacansies(await getVacancies(searchParams))}
          className="submitFilterButton"
        >
          Применить
        </Button>
        <p>{cataloguesValue}</p>
      </div>
    </div>
  );
};
