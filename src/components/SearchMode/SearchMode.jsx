import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import ItemList from "../ItemList/ItemList";
import LoadingButton from "@mui/lab/LoadingButton";
import { useFormik } from "formik";
import * as yup from "yup";
import Axios from "axios";

export default function SearchMode() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [foundedItems, setFoundedItems] = useState([]);

  const validationSchema = yup.object({
    search: yup
      .string("Buscar")
      .required("Campo vacío")
      .min(3, "Debe contener al menos 3 caracteres"),
  });

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      try {
        setLoading(true);
        Axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?query=${values.search}&apiKey=${process.env.REACT_APP_APIKEY}&number=6`
        ).then((response) => {
          setFoundedItems(response.data);
          setLoading(false);
        });
      } catch (err) {
        setError(err);
      }
    },
  });

  return (
    <div>
      <div className="search-box">
        <h3>¡Elige los platos que conformarán tu menú!</h3>
        <form className="search-input mt-3 mb-3" onSubmit={formik.handleSubmit}>
          <TextField
            id="search"
            name="search"
            value={formik.values.search}
            onChange={formik.handleChange}
            error={formik.touched.search && Boolean(formik.errors.search)}
            helperText={formik.touched.search && formik.errors.search}
            className="me-3"
            autoComplete="off"
            hiddenLabel
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <div className="row">
            <LoadingButton
              type="submit"
              variant="contained"
              size="small"
              endIcon={<SendIcon />}
              loading={loading}
            >
              Buscar
            </LoadingButton>
          </div>
        </form>
      </div>
      <hr />
      {!error ? (
        <ItemList items={foundedItems.results} />
      ) : (
        <p>Ha ocurrido un error en su solicitud.</p>
      )}
    </div>
  );
}
