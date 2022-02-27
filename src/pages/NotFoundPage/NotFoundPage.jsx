import React from "react";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Background from "../../assets/img/background-3.jpg";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <section
      id="not-found"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container not-found-box">
        <h3>Error 404</h3>
        <p>¡Woops! Página no encontrada.</p>
        {localStorage.getItem("token") ? (
          <Button
            variant="contained"
            color="error"
            onClick={() => navigate("/home")}
            startIcon={<ArrowBackIcon />}
          >
            Ir al inicio
          </Button>
        ) : (
          <Button
            variant="contained"
            color="error"
            onClick={() => navigate("/")}
            startIcon={<ArrowBackIcon />}
          >
            Ir al inicio
          </Button>
        )}
      </div>
    </section>
  );
}
