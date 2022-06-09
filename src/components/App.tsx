import React from "react";
import { CallsBar } from "./callsbar/CallsBar";
import { DashBoard } from "./dashboard/DashBoard";
import { NavBar } from "./navbar/NavBar";

import "../style/navbar.css";
import "../style/callsbar.css";
import "../style/dashboard.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="row">
        <DashBoard />
        <CallsBar />
      </main>
    </div>
  );
}

export default App;
