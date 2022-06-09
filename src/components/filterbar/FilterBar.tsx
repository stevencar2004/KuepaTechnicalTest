import React from "react";

export const FilterBar = () => {
  return (
    <div className="filterbar d-flex justify-content-between align-items-baseline">
      <div className="filterbar__search">
        <form>
          <div className="filterbar__box d-flex align-items-center">
            <label htmlFor="search-field">
              <i className="fa-solid fa-magnifying-glass filterbar__icon filterbar__icon--dark"></i>
            </label>
            <input
              type="text"
              name="searchField"
              id="search-field"
              placeholder="Search..."
              className="filterbar__input"
            />
            <label htmlFor="search-field">
              <i className="fa-solid fa-filter filterbar__icon"></i>
            </label>
          </div>
        </form>
      </div>

      <div className="filterbar__date d-flex align-items-baseline">
        <p className="me-2 fs-md-4">Wed, 20 May</p>
        <i className="fa-solid fa-angle-down filterbar__icon filterbar__icon--dark"></i>
      </div>
    </div>
  );
};
