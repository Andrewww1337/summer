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
  activePage,
  setPage,
}) => {
  const [jodStateIsOpen, setJodStateIsOpen] = useState(false);

  const getData = async () => {
    setCatalogues(await getCatalogues());
  };

  const getNewVacansies = async () => {
    setVacansies(await getVacancies(searchParams));
  };

  useEffect(() => {
    getData();
    getNewVacansies();
  }, []);

  useEffect(() => {
    getNewVacansies();
  }, [activePage]);

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
            getNewVacansies();
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
