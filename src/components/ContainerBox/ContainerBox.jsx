import React, { useState } from "react";
import "./ContainerBox.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MenuMode from "../MenuMode/MenuMode";
import SearchMode from "../SearchMode/SearchMode";

export default function ContainerBox() {
  const [mode, setMode] = useState("menu");

  const handleChange = (event, newMode) => {
    setMode(newMode);
  };

  return (
    <div className="container container-box mt-3">
      <div className="wrap-switch mb-3">
        <ToggleButtonGroup
          color="info"
          value={mode}
          exclusive
          onChange={handleChange}
          size="small"
        >
          <ToggleButton value="menu">Mi menú</ToggleButton>
          <ToggleButton value="search">Buscador</ToggleButton>
        </ToggleButtonGroup>
      </div>
      {mode === "menu" ? <MenuMode /> : <SearchMode />}
    </div>
  );
}
