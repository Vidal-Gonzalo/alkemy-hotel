import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ContainerBox from "../../components/ContainerBox/ContainerBox";
import Background from "../../assets/img/background-8.jpg";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  let token = localStorage.getItem("token");
  let navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
  }, [token, navigate]);

  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <ContainerBox />
    </section>
  );
}
