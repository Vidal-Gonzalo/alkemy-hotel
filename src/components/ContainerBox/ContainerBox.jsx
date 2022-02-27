import React, { useContext, useEffect, useState } from "react";
import "./ContainerBox.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MenuMode from "../MenuMode/MenuMode";
import SearchMode from "../SearchMode/SearchMode";
import { Menu } from "../../context/MenuContext";

export default function ContainerBox() {
  const { mode, setMode } = useContext(Menu);
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);
  const handleChange = (event, newMode) => {
    setMode(newMode);
  };

  if (!didMount) {
    return null;
  }

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
