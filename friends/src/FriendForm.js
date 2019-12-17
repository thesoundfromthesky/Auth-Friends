import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Spinner from "./Spinner";

// {
//     id: 1
//     name: 'Joe',
//     age: 24,
//     email: 'joe@lambdaschool.com',
// }
export default function FriendForm({post}) {

  return (
    <div>
      <Formik
        initialValues={{ name: "", age: "", email: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          age: Yup.number()
            .min(0, "Must be 0 or more")
            .required("Required"),
          email: Yup.string()
            .email()
            .required("Required")
        })}
        onSubmit={(values, { resetForm }) => {
            post(values, resetForm);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="name">name: </label>
            <Field id="name" type="text" name="name" placeholder="type name" />
            <ErrorMessage name="name" component="div" />
            <label htmlFor="age">age: </label>
            <Field
              id="age"
              type="age"
              name="age"
              placeholder="type age"
            />
            <ErrorMessage name="age" component="div" />
            <label htmlFor="email">age: </label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="type email"
            />
            <ErrorMessage name="email" component="div" />
            {isSubmitting ? (
              <Spinner />
            ) : (
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
