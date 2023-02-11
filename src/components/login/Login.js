import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin, setUserInformation } from "../../redux/slices/auth";
import "./Login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validationSchema = yup.object().shape({
    username: yup.string().required("is mandatory"),
    password: yup
      .string()
      .typeError("must be a string")
      .required("is mandatory"),
  });

  return (
    <>
      <div className="container">
        <h2 className="title">Sing App React</h2>
        <Formik
          initialValues={{ username: "admin", password: "12345" }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setFieldError }) => {
            const userInfo = {
              username: values.username,
              password: values.password
            };
            try {
              await dispatch(userLogin(userInfo));
              await dispatch(setUserInformation());
              navigate("/");
            } catch (error) {
              setFieldError("password", "Incorrect username or password");
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="username" />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />

              <button type="submit" >
                Submit
              </button>
            </Form>
          )}
        </Formik>
        <h3 className="login_footer">
          2023 © Sing App - React Admin Dashboard Template. By Flatlogic
        </h3>
      </div>
    </>
  );
};

export default Login;
