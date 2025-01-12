import { useState } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./features/shared/components/Layout";
import Home from "./features/shared/components/Home";
import StateDashboard from "./features/state-dashboard/StateDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":state/" element={<StateDashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
