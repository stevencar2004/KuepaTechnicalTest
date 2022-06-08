import React from "react";
import { Item } from "./Item";

const ITEMS_BAR = ["fa-house", "fa-note-sticky", "fa-list-ul"];

export const NavBar = () => {
  return (
    <div className="navbar d-flex flex-column w-10">
      <div>
        <div className="navbar__header">
          <p className="navbar__logo">
            <span className="highLight--text">K</span>et
          </p>
          <p className="navbar__sublogo">
            <span className="highLight--text"> Kuepa</span> EduTech
          </p>
        </div>

        <div className="navbar__content">
          {ITEMS_BAR.map((item) => {
            return <Item icon={item} key={item} />;
          })}
        </div>
      </div>

      <div className="navbar__footer flex-end">
        <i className="fa-solid fa-message"></i>

        <div className="navbar__user"></div>
      </div>
    </div>
  );
};
