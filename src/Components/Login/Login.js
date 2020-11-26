import React from 'react';
import '../../App.css';
import { Formik } from "formik";
import InfoLabel from "../InfoLabel"

const initialValues = {
    email: "",
    password: ""
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password too short";
    }
    return errors;
  };

  const submitForm = (values) => {
    console.log(values);
  };

export default function Login() {
    return (
        <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
      className='container'
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty
        } = formik;
        return (
            <div className="container">
              <h1>Login</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email ? 
                    "input-error" : null}
                  />
                  {errors.email && touched.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>

                <div className="form-row">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password ? 
                     "input-error" : null}
                  />
                  {errors.password && touched.password && (
                    <span className="error">{errors.password}</span>
                  )}
                </div>

                <div className="btn-wrapper">
                  <button
                    type="submit"
                    className="btn"
                    disabled={!(dirty && isValid)}>
                    Login
                  </button>
                </div>
               <InfoLabel route={"register"}/>
              </form>
            </div>
        );
      }}
    </Formik>
    )
}