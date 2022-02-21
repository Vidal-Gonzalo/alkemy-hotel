import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import ItemList from "../ItemList/ItemList";
import "./ContainerBox.css";
import Axios from "axios";

export default function ContainerBox() {
  const [searchQuery, setSearchQuery] = useState();
  const [foundedItems, setFoundedItems] = useState([]);
  const [menuMode, setMenuMode] = useState(false);

  const props = { foundedItems, menuMode, setMenuMode };

  const searchRecipe = (e) => {
    e.preventDefault();
    try {
      Axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&apiKey=39f22c62f0244c13a532e3162e00e7cc&number=5`
      ).then((response) => {
        setFoundedItems(response.data);
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="container container-box mt-3">
      <div className="search-box">
        <h3 className="">¡Elige los platos que conformarán tu menú!</h3>
        <form
          className="search-input mt-3 mb-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <TextField
            className="me-3"
            id="input-with-icon-textfield"
            hiddenLabel
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
            onChange={(event) => {
              setSearchQuery(event.target.value);
            }}
          />
          <Button
            size="medium"
            variant="contained"
            endIcon={<SendIcon />}
            onClick={searchRecipe}
          >
            Buscar
          </Button>
        </form>
      </div>
      <hr />
      <ItemList {...props} />
    </div>
  );
}
