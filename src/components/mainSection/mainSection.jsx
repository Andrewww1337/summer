import React from "react";

import { SearchPanel } from "../searchPanel";
import { JobCard } from "../jodCard/jodCard";

import "./mainSection.css";

export const MainSection = ({
  vacansies,
  setKeyword,
  setVacansies,
  searchParams,
  keyword,
}) => {
  return (
    <div className="mainSection">
      <SearchPanel
        setVacansies={setVacansies}
        searchParams={searchParams}
        setKeyword={setKeyword}
        keyword={keyword}
      />
      {vacansies?.data?.objects?.map((item) => (
        <JobCard key={item.id} {...item} />
      ))}
    </div>
  );
};
