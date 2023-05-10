import "./sortingBar.css";
import React, { useState } from "react";
import { ReactComponent as Cross } from "../../img/Cross.svg";
import { ReactComponent as ChevronDown } from "../../img/chevronDown.svg";
import { ReactComponent as ChevronUp } from "../../img/chevronUp.svg";
import { Select } from "@mantine/core";
import { NumberInput } from "@mantine/core";
import { Group, Button, rem } from "@mantine/core";

export const SortingBar = () => {
  const [jodStateIsOpen, setJodStateIsOpen] = useState(false);
  return (
    <div className="sortingBar">
      <div className="sortingHeader">
        <h3 className="sortingTitle">Фильтры</h3>
        <button className="resetFilterButton">
          <span>Сбросить все</span>
          <Cross className="crossButton" />
        </button>
      </div>
      <div className="selectJob">
        <Select
          label="Отрасль"
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
          data={["React", "Angular", "Svelte", "Vue"]}
          onDropdownClose={() => {
            setJodStateIsOpen(false);
          }}
          onDropdownOpen={() => {
            setJodStateIsOpen(true);
          }}
        />
      </div>
      <div className="selectSalary">
        <NumberInput placeholder="От" label="Оклад" />
        <NumberInput placeholder="До" />
      </div>
      <div>
        <Button className="submitFilterButton">Применить</Button>
      </div>
    </div>
  );
};
