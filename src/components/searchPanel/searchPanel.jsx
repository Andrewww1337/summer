import "./searchPanel.css";
import React, { useEffect, useRef, useState, ReactElement } from "react";
import { ReactComponent as Search } from "../../img/Search.svg";
import { Select } from "@mantine/core";
import { NumberInput } from "@mantine/core";
import { Group, Button, rem } from "@mantine/core";
import { Input, Tooltip } from "@mantine/core";

export const SearchPanel = () => {
  return (
    <div className="searchPanel">
      <Input
        className="searchInput"
        icon={<Search size="1rem" />}
        placeholder="Введите название вакансии"
        rightSection={
          <div>
            <Button className="searchButton">Поиск</Button>
          </div>
        }
      />
    </div>
  );
};
