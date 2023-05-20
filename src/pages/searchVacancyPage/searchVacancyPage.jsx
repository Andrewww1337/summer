import React, { useState, useEffect } from "react";

import { SortingBar } from "../../components/sortingBar";
import { MainSection } from "../../components/mainSection";
import { getCatalogues, getVacancies } from "../../Api/fetches";

import "./searchVacancyPage.css";

export const SearchVacancyPage = ({ windowDimenion, token }) => {
  const [cataloguesValue, setCataloguesValue] = useState("");
  const [pamentFromValue, setPamentFromValue] = useState("");
  const [pamentToValue, setPamentToValue] = useState("");
  const [keyword, setKeyword] = useState(null);
  const [catalogues, setCatalogues] = useState([]);
  const [vacansies, setVacansies] = useState([]);
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
    setCatalogues(await getCatalogues());
  };

  const getNewVacansies = async () => {
    setLoading(true);
    const result = getVacancies(searchParams);
    result.then((data) => {
      setLoading(false);
      //TODO: передавать data.data.objects
      setVacansies(data);
    });
  };

  useEffect(() => {
    if (token) {
      getData();
      getNewVacansies();
    }
  }, [activePage, token]);

  if (loading) {
    return <div>Loading.....</div>;
  }

  return (
    <div className="searchVacancyPage">
      <div className="searchVacancySection">
        {windowDimenion.winWidth > 768 && (
          <SortingBar
            getNewVacansies={getNewVacansies}
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
          getNewVacansies={getNewVacansies}
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
          vacansies={vacansies}
        />
      </div>
    </div>
  );
};
