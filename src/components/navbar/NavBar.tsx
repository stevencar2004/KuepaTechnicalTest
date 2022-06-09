import React from "react";
import { Item } from "./Item";

const ITEMS_BAR = ["fa-house", "fa-note-sticky", "fa-list-ul"];

export const NavBar = () => {
  return (
    <div className="navbar d-flex flex-column py-3 position-fixed">
      <div>
        <div className="navbar__header mb-5 text-center">
          <p className="navbar__logo mb-0">
            <span className="highLight--text">K</span>et
          </p>
          <p className="navbar__sublogo">
            <span className="highLight--text"> Kuepa</span> EduTech
          </p>
        </div>

        <div className="navbar__content ">
          {ITEMS_BAR.map((item, i) => {
            return <Item icon={item} numItem={i} key={item} />;
          })}
        </div>
      </div>

      <div className="navbar__footer flex-end text-center">
        <i className="fa-solid fa-message mb-3"></i>

        <div className="navbar__user">
          <img src="" />
        </div>
      </div>
    </div>
  );
};
