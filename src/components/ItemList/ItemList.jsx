import React from "react";
import Switch from "@mui/material/Switch";
import "./ItemList.css";
import { FormControlLabel, FormGroup } from "@mui/material";
import MenuMode from "../MenuMode/MenuMode";
import SearchMode from "../SearchMode/SearchMode";

export default function ItemList(props) {
  const handleChange = (event) => {
    props.setMenuMode(event.target.checked);
  };

  console.log(props.menuMode);

  return (
    <div className="container-fluid item-list">
      <div className="switch">
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={props.menuMode} onChange={handleChange} />
            }
            label="Menú"
          />
        </FormGroup>
      </div>
      <div className="box-item-list">
        {props.menuMode ? <MenuMode /> : <SearchMode />}
      </div>
    </div>
  );
}
