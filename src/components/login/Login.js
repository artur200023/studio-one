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
              password: values.password,
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
            <Form className="login_form">
              <h2 className="sign_in_text">Login to your Web App</h2>
              <h5 className="hint">Use your email to sign in</h5>
              <div className="art">
                <h5>
                  For user with "admin" role use"admmin@flatlogic.com /
                  password" to login
                </h5>
              </div>
              <Link to="" className="link">
                Forgot password?
              </Link>
              <div className="inps">
                <Field className="email_inp" type="text" name="username" />
                <Field
                  className="password_inp"
                  type="password"
                  name="password"
                />
                <button type="submit" className="login_btn">
                  Login
                </button>
                <h5 className="help_text">or sign in with</h5>
                <div className="halp_links">
                  <Link className="google_link" to="/news">
                    GOOGLE
                  </Link>
                  <Link className="microsoft_link" to="">
                    MICROSOFT
                  </Link>
                </div>
                <h5 className="info_text">
                  Don't have an account? Sign up now!
                </h5>
                <Link className="create_link" to="">
                  Create an Account
                </Link>
              </div>

              <ErrorMessage name="password" component="div" />
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
