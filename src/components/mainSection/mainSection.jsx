import React from "react";
import { Pagination } from "@mantine/core";

import { SearchPanel } from "../searchPanel";
import { JobCard } from "../jodCard/jodCard";

import "./mainSection.css";

export const MainSection = ({
  vacansies,
  setKeyword,
  setVacansies,
  searchParams,
  keyword,
  setPage,
  activePage,
}) => {
  return (
    <div className="mainSection">
      <SearchPanel
        setVacansies={setVacansies}
        searchParams={searchParams}
        setKeyword={setKeyword}
        keyword={keyword}
        setPage={setPage}
      />
      <div className="content">
        {vacansies?.data?.objects?.map((item) => (
          <JobCard key={item.id} {...item} />
        ))}
      </div>
      {vacansies && (
        <Pagination
          className="pagination"
          value={activePage}
          onChange={setPage}
          total={
            vacansies?.data?.total > 500
              ? 125
              : Math.ceil(vacansies?.data?.total / 4)
          }
        />
      )}
    </div>
  );
};
