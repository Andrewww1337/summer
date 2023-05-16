import React, { useEffect, useState } from "react";

import { getCatalogues, getToken } from "../../Api/fetches";
import { JobCard } from "../../components/jodCard/jodCard";

import "./oneJobPage.css";

export const OneJobPage = () => {
  const [catalog, setCatalog] = useState(null);
  useEffect(() => {
    console.log(catalog);
    getToken();
  }, [catalog]);

  return (
    <div className="oneJobPage">
      <div className="jobPageMainSection">
        <JobCard bigCard={true} />
        <div
          onClick={async () => setCatalog(await getCatalogues())}
          className="jobDescription"
        >
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
          латинице с начала XVI века. В то время некий безымянный печатник
          создал большую коллекцию размеров и форм шрифтов, используя Lorem
          Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
          без заметных изменений пять веков, но и перешагнул в электронный
          дизайн. Его популяризации в новое время послужили публикация листов
          Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее
          время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах
          которых используется Lorem Ipsum.
        </div>
      </div>
      {catalog?.map((item) => (
        <p>{item.title_rus}</p>
      ))}
    </div>
  );
};
