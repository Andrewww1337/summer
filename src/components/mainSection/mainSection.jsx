import "./mainSection.css";
import React, { useEffect, useRef, useState, ReactElement } from "react";
import { ReactComponent as Logo } from "../../img/Logo.svg";
import { SearchPanel } from "../searchPanel";
import { JobCard } from "../jodCard/jodCard";

export const MainSection = () => {
  return (
    <div className="mainSection">
      <SearchPanel />
      <JobCard />
    </div>
  );
};
