import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Spinner from "./Spinner";
// with username and password inputs and a submit button (design this however you would like).
// * The login function should save the returned token to localStorage.
// You can setup `isLoading` state in your Login component,
// and show a spinner on your form or in your button while the login request is happening.
// * When the request returns, save the token to `localStorage`,
// then use the history object in your Login component to navigate your user to your FriendsList route
export default function Login() {
  const history = useHistory();
  function login(user, resetForm) {
    axios
      .post("http://localhost:5000/api/login", user)
      .then(({ data }) => {
        window.localStorage.setItem("token", data.payload);
        resetForm();
        history.push("/friendslist");
      })
      .catch(err => {
        resetForm();
      });
  }

  function guest() {
    axios
      .post("http://localhost:5000/api/login", {
        username: "Lambda School",
        password: "i<3Lambd4"
      })
      .then(({ data }) => {
        window.localStorage.setItem("token", data.payload);
        history.push("/friendslist");
      });
  }

  return (
    <div className="login-form">
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={Yup.object({
          username: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          password: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required")
        })}
        onSubmit={(values, { resetForm }) => {
          login(values, resetForm);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="username">Username: </label>
            <Field
              id="username"
              type="text"
              name="username"
              placeholder="type username"
            />
            <ErrorMessage name="username" className="error" component="div" />
            <label htmlFor="password">password: </label>
            <Field
              id="password"
              type="password"
              name="password"
              placeholder="type password"
              autoComplete="off"
            />
            <ErrorMessage name="password" className="error" component="div" />
            {isSubmitting ? (
              <Spinner />
            ) : (
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            )}
            {isSubmitting ? (
              <Spinner />
            ) : (
              <button type="button" onClick={guest} disabled={isSubmitting}>
                GuestMode
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
