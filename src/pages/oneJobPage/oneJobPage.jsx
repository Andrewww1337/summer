import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { useParams } from "react-router-dom";

import { getCatalogues, getToken, getVacancy } from "../../Api/fetches";
import { JobCard } from "../../components/jodCard/jodCard";

import "./oneJobPage.css";

export const OneJobPage = () => {
  const { id } = useParams();
  const [catalog, setCatalog] = useState(null);
  const [vacansy, setVacansy] = useState([]);

  const getNewVacansy = async () => {
    setVacansy(await getVacancy(id));
  };

  useEffect(() => {
    getNewVacansy();
    console.log(vacansy);
  }, []);

  return (
    <div className="oneJobPage">
      <div className="jobPageMainSection">
        <JobCard {...vacansy} bigCard={true} />
        <div className="jobDescription">
          {ReactHtmlParser(vacansy.vacancyRichText)}
        </div>
      </div>
    </div>
  );
};
