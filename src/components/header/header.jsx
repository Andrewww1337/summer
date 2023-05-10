import "./header.css";
import React, { useEffect, useRef, useState, ReactElement } from "react";
import { ReactComponent as Logo } from "../../img/Logo.svg";

export const Header = () => {
  return (
    <div className="header">
      <div className="customHeader">
        <Logo className="logo" />
        <div className="navigation">
          <h2 className="linkToPage">Поиск Вакансий</h2>
          <h2 className="linkToPage">Избранные</h2>
        </div>
      </div>
    </div>
  );
};
