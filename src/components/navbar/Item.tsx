import React from "react";

interface PropsItem {
  icon: string;
}

export const Item = ({ icon }: PropsItem) => {
  return (
    <div className="navbar__link">
      <i className={`fa-solid ${icon}`}></i>
    </div>
  );
};
