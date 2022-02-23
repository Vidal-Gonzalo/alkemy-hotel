import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import ItemList from "../ItemList/ItemList";
import LoadingButton from "@mui/lab/LoadingButton";
import Axios from "axios";

export default function SearchMode() {
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState();
  const [foundedItems, setFoundedItems] = useState([]);

  const searchRecipe = (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      Axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&apiKey=39f22c62f0244c13a532e3162e00e7cc&number=15`
      ).then((response) => {
        setFoundedItems(response.data);
        setLoading(false);
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <div className="search-box">
        <h3 className="">¡Elige los platos que conformarán tu menú!</h3>
        <form
          className="search-input mt-3 mb-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <TextField
            className="me-3"
            autoComplete="off"
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
          <LoadingButton
            onClick={searchRecipe}
            type="submit"
            variant="contained"
            size="small"
            endIcon={<SendIcon />}
            loading={loading}
          >
            Buscar
          </LoadingButton>
        </form>
      </div>
      <hr />
      <ItemList foundedItems={foundedItems} />
    </div>
  );
}
