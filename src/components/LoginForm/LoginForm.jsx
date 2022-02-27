import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingButton from "@mui/lab/LoadingButton";
import "./LoginForm.css";

export default function LoginForm() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const notifySuccess = () =>
    toast.success("¡Bienvenido a Alkemy Hotel!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const notifyError = () =>
    toast.error("¡E-mail y/o contraseña incorrectos!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  return (
    <div className="container form-wrap">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Requerido";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "E-mail inválido";
          }
          if (!values.password) {
            errors.password = "Requerido";
          } else if (values.password.length <= 3) {
            errors.password = "¡Debe contener más de 3 caracteres!";
          }
          return errors;
        }}
        onSubmit={(values) => {
          setLoading(true);
          Axios.post(`${process.env.REACT_APP_AUTH_URL}`, {
            email: values.email,
            password: values.password,
          })
            .then((response) => {
              localStorage.setItem("token", response.data.token);
              notifySuccess();
              setLoading(false);
              navigate("/home");
            })
            .catch(() => {
              notifyError();
              setLoading(false);
            });
        }}
      >
        {() => (
          <div className="form">
            <Form>
              <h3 className="form-title"> Alkemy Hotel </h3>
              <div className="form-floating">
                <Field
                  className="form-control"
                  type="email"
                  name="email"
                  id="floatingInputEmail"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInputEmail">Correo electrónico</label>
                <div className="err-msg-wrap">
                  <ErrorMessage
                    className="text-danger err-msg"
                    name="email"
                    component="span"
                  />
                </div>
              </div>

              <div className="form-floating">
                <Field
                  className="form-control"
                  type="password"
                  autoComplete="off"
                  name="password"
                  id="floatingInputPassword"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInputPassword">Contraseña</label>
                <div className="err-msg-wrap">
                  <ErrorMessage
                    className="text-danger err-msg"
                    name="password"
                    component="span"
                  />
                </div>
              </div>

              <LoadingButton
                className=" w-100 mt-3"
                type="submit"
                variant="contained"
                loading={loading}
              >
                Iniciar sesión
              </LoadingButton>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
