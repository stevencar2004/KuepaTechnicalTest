import React from "react";
import { FilterBar } from "../filterbar/FilterBar";

export const DashBoard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <FilterBar />
      </div>

      <div className="dashboard__main">
        <section className="dashboard__info">
          <h2>Hola, User</h2>

          <div>Metrics</div>

          <div>Metal Grupal</div>
        </section>

        <section className="dashboard__tasks">
          <div>Conexiones </div>
          <div>Tu plan de hoy</div>
        </section>
      </div>
    </div>
  );
};
