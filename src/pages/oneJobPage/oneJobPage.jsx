import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { useParams } from "react-router-dom";

import { getVacancy } from "../../Api/fetches";
import { JobCard } from "../../components/jodCard/jodCard";
import { Loader } from "../../components/loader";

import "./oneJobPage.css";

export const OneJobPage = ({ tokenAvailable }) => {
  const { id } = useParams();
  const [vacansy, setVacansy] = useState([]);
  const [loading, setLoading] = useState(false);

  const getNewVacansy = async () => {
    setLoading(true);
    const result = getVacancy(id);
    result.then((data) => {
      setLoading(false);

      setVacansy(data);
    });
  };

  useEffect(() => {
    if (tokenAvailable) {
      getNewVacansy();
    }
  }, [tokenAvailable]);
  if (loading) {
    return <Loader />;
  }
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
