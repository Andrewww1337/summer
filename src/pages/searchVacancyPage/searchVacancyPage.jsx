import React, { useState, useEffect } from "react";

import { SortingBar } from "../../components/sortingBar";
import { MainSection } from "../../components/mainSection";
import { Loader } from "../../components/loader";

import { getCatalogues, getVacancies } from "../../Api/fetches";

import "./searchVacancyPage.css";

export const SearchVacancyPage = ({ windowDimenion, token }) => {
  const [cataloguesValue, setCataloguesValue] = useState("");
  const [pamentFromValue, setPamentFromValue] = useState("");
  const [pamentToValue, setPamentToValue] = useState("");
  const [keyword, setKeyword] = useState(null);
  const [catalogues, setCatalogues] = useState([]);
  const [vacancies, setVacancies] = useState([]);
  const [activePage, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const searchParams = {
    keyword: keyword && `${keyword}`,
    payment_from: pamentFromValue && `${pamentFromValue}`,
    payment_to: pamentToValue && `${pamentToValue}`,
    catalogues: cataloguesValue && `${cataloguesValue}`,
    page: `${activePage - 1}`,
  };

  const getData = async () => {
    const result = await getCatalogues();
    setCatalogues(result);
  };

  const getNewVacancies = async (defaultParams) => {
    setLoading(true);
    const result = getVacancies(defaultParams ? defaultParams : searchParams);
    result.then((data) => {
      setLoading(false);
      setVacancies(data);
    });
  };

  useEffect(() => {
    if (token) {
      getData();
      getNewVacancies();
    }
  }, [activePage, token]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="searchVacancyPage">
      <div className="searchVacancySection">
        {windowDimenion.winWidth > 768 && (
          <SortingBar
            getNewVacancies={getNewVacancies}
            setPamentFromValue={setPamentFromValue}
            setPamentToValue={setPamentToValue}
            setCataloguesValue={setCataloguesValue}
            cataloguesValue={cataloguesValue}
            pamentFromValue={pamentFromValue}
            pamentToValue={pamentToValue}
            catalogues={catalogues}
            setKeyword={setKeyword}
            setPage={setPage}
          />
        )}
        <MainSection
          getNewVacancies={getNewVacancies}
          windowDimenion={windowDimenion}
          setPamentFromValue={setPamentFromValue}
          setPamentToValue={setPamentToValue}
          setCataloguesValue={setCataloguesValue}
          cataloguesValue={cataloguesValue}
          pamentFromValue={pamentFromValue}
          pamentToValue={pamentToValue}
          keyword={keyword}
          setKeyword={setKeyword}
          activePage={activePage}
          setPage={setPage}
          vacancies={vacancies}
          catalogues={catalogues}
        />
      </div>
    </div>
  );
};
