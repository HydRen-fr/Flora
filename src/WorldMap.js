// WorldMap.js
import React from "react";
import World from "@react-map/world";
import { useNavigate } from "react-router-dom";

const WorldMap = () => {
  const navigate = useNavigate();

  const handleCountrySelect = (countryCode) => {
    navigate(`/country/${countryCode}`);
  };

  return (
    <div>
      <World
        onSelect={handleCountrySelect}
        type="select-single"
        size={900}
        mapColor="lightgrey"
        strokeColor="black"
        strokeWidth={1.5}
        hoverColor="lightgreen"
        selectColor="orange"
        hints={true}
        hintTextColor="white"
        hintBackgroundColor="black"
        hintPadding="5px"
        hintBorderRadius="10px"
      />
    </div>
  );
};

export default WorldMap;
