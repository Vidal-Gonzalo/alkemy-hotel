import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginPage.css";
import Background from "../../assets/img/background-1.jpg";

export default function LoginPage() {
  return (
    <section
      id="login"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <LoginForm />
    </section>
  );
}
