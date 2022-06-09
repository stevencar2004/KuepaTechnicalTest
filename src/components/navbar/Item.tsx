import React from "react";

interface PropsItem {
  icon: string;
  numItem: number;
}

export const Item = ({ icon, numItem }: PropsItem) => {
  return (
    <div className={`navbar__link mb-2 ${numItem === 1 && "navbar__link--active"}`}>
      <i className={`fa-solid ${icon}`}></i>
    </div>
  );
};
