/* eslint-disable react/no-unescaped-entities */
import { ErrorMessage, Field, Formik } from "formik";
import { Link } from "react-router-dom";
import axiosInstance from "../../Api/axios";
import { useState } from "react";

function Signup() {
  const [error, setError] = useState("");

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleChange = () => {
    setError("");
  };

  function validation(values) {
    const password = values.password;
    console.log(password);
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const check = regex.test(password);
    console.log(check);
    console.log("hlo");
    return check;
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { resetForm }) => {
        try {
          if (validation(values)) {
            const response = await axiosInstance.post("/signup", values);
            resetForm();
            console.log(response);
          } else {
            setError("password must follow cyrtiria");
            console.log("password must follow cyrtiria");
          }
        } catch (error) {
          console.error("There was an error signing up!", error);
        }
      }}
    >
      {({values, handleChange: formikHandleChange, handleBlur, handleSubmit,}) => (
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-7/12 m-auto sm:flex sm:h-[400px] shadow-xl rounded-xl">
            <div className="sm:w-1/2 bg-blue-600 rounded-xl">
              <h1 className="text-center text-3xl text-white font-bold p-4">
                Looks like you're new here!
              </h1>
              <h1 className="p-4 text-gray-300 font-serif">
                "Welcome! The first step is often the hardest, but you've made
                it. We're here to support you every step of the way."
              </h1>
            </div>
            <form
              onSubmit={handleSubmit}
              className="relative sm:w-1/2 flex flex-col gap-5 p-5"
            >
              <h1 className="text-center text-2xl font-bold">SIGNUP</h1>
              <Field
                type="text"
                id="username"
                name="username"
                value={values.username}
                onChange={(e) => {
                  handleChange(e), formikHandleChange(e);
                }}
                onBlur={handleBlur}
                placeholder="Username"
                className="p-1 text-center rounded-md border-2"
              />
              <ErrorMessage name="username" component="div" className="error" />

              <Field
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={(e) => {
                  handleChange(e), formikHandleChange(e);
                }}
                onBlur={handleBlur}
                placeholder="Email"
                className="p-1 text-center rounded-md border-2"
              />
              <ErrorMessage name="email" component="div" className="error" />

              <Field
                type="password"
                id="password"
                name="password"
                value={values.password}
                onChange={(e) => {
                  handleChange(e), formikHandleChange(e);
                }}
                onBlur={handleBlur}
                placeholder="Password"
                className="p-1 text-center rounded-md border-2"
              />
              <ErrorMessage name="password" component="div" className="error" />

              <button
                type="submit"
                className="bg-blue-600 p-1 font-mono rounded-md"
              >
                Signup
              </button>
              <p className="text-red-500 text-center text-[12px]">{error}</p>
              <p className="text-[12px] text-center">
                If you already have an account, please
                <Link to={"/auth/login"}>
                  <span className="text-red-600 cursor-pointer"> Login</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default Signup;
