import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Formik } from "formik";
import Auth from "api/Auth";
import SubmitButton from "components/SubmitButton";
import { toast } from "react-toastify";
import { ApolloError } from "@apollo/client";

const Service = () => {
  let navigate = useNavigate();

  const [error, setError] = React.useState("");

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        banAddress: "",
        serviceName: "",
        serviceWebsite: ""
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "This field is required.";
        }

        if (!values.password) {
          errors.password = "This field is required.";
        }

        if (!values.serviceName) {
          errors.serviceName = "This field is required.";
        }

        if (!values.serviceWebsite) {
          errors.serviceWebsite = "This field is required.";
        }

        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const resp = await Auth.register({
            type: "REQUESTER",
            email: values.email,
            password: values.password,
            serviceName: values.serviceName,
            serviceWebsite: values.serviceWebsite
          });
          if (resp.id) {
            toast.success(
              "You have successfully registered. Please check your email for a confirmation link. Once you have verified your email, you will be reviewed by an admin before you may start using the service."
            );
          }
          navigate("/dashboard");
        } catch (e) {
          if (e instanceof ApolloError) {
            setError(e.message.charAt(0).toUpperCase() + e.message.slice(1));
          } else {
            setError("Unknown error occured, try again later");
          }
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <div className="text-gray-300">Email</div>
            <input
              className="bg-banano-gray p-2 rounded-md text-gray-200 w-full placeholder:text-sm"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="email"
              placeholder="Email"
              type="email"
              id="email"
            />
            {errors.email && touched.email && (
              <div className="text-red-500 text-xs flex items-center">
                {errors.email}
              </div>
            )}
          </div>
          <div className="mb-4">
            <div className="text-gray-300">Password</div>

            <input
              className="bg-banano-gray p-2 rounded-md text-gray-200 w-full placeholder:text-sm"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="password"
              placeholder="Password"
              type="password"
              id="password"
            />
            {errors.password && touched.password && (
              <div className="text-red-500 text-xs flex items-center">
                {errors.password}
              </div>
            )}
          </div>
          <div className="mb-4">
            <div className="text-gray-300">Service Name</div>
            <input
              className="bg-banano-gray p-2 rounded-md text-gray-200 w-full placeholder:text-sm"
              value={values.serviceName}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
              placeholder="Service Name"
              id="serviceName"
            />
            {errors.serviceName && touched.serviceName && (
              <div className="text-red-500 text-xs flex items-center">
                {errors.serviceName}
              </div>
            )}
          </div>
          <div className="mb-8">
            <div className="text-gray-300">Service Website</div>
            <input
              className="bg-banano-gray p-2 rounded-md text-gray-200 w-full placeholder:text-sm"
              value={values.serviceWebsite}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
              placeholder="Service Website"
              id="serviceWebsite"
            />
            {errors.serviceWebsite && touched.serviceWebsite && (
              <div className="text-red-500 text-xs flex items-center">
                {errors.serviceWebsite}
              </div>
            )}
          </div>

          {error && (
            <div className="text-red-500 text-xs flex items-center">
              {error}
            </div>
          )}
          <SubmitButton disabled={isSubmitting} text="Register Service" />
        </form>
      )}
    </Formik>
  );
};

export default Service;
