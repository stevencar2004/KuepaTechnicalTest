import React from "react";

export const FilterBar = () => {
  return (
    <div className="filterbar">
      <div className="filterbar__search">
        <form>
          <div className="filterbar__box">
            <i className="fa-solid fa-filter filterbar__icon"></i>
            <input
              type="text"
              name="searchField"
              id="search-field"
              placeholder="Search..."
              className="filterbar__input"
            />
            <i className="fa-solid fa-magnifying-glass filterbar__icon filterbar__icon--dark"></i>
          </div>
        </form>
      </div>

      <div className="filterbar__date">
        <p>Wed, 20 May</p>
        <i className="fa-solid fa-angle-down filterbar__icon filterbar__icon--dark"></i>
      </div>
    </div>
  );
};
