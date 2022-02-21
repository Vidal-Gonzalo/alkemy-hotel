import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Navbar() {
  let navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <h2>Alkemy Hotel</h2>
        <div className="d-flex">
          <Button
            variant="contained"
            color="error"
            endIcon={<LogoutIcon />}
            onClick={logout}
          >
            Cerrar sesión
          </Button>
        </div>
      </div>
    </nav>
  );
}
