// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import WorldMap from "./WorldMap";
import CountryPage from "./CountryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WorldMap />} />
      <Route path="/country/:countryCode" element={<CountryPage />} />
    </Routes>
  );
}

export default App;
