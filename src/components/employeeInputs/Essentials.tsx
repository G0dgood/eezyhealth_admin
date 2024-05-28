import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { EmployeeFormProps } from "../../interfaces/employee";
import InputField from "./InputField";

const Essentials = ({
  active,
  employee,
  setEmployee,
  setActive,
  bindSubmitForm,
}: EmployeeFormProps) => {
  const validate = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    middle_name: Yup.string(),
    last_name: Yup.string().required("Last name is required"),
    phone: Yup.string().required("Phone number is required"),
  });




  const handleSubmit = (values?: any) => {
    // console.log("Values", values);
    setEmployee({ ...employee, ...values });
    setActive(2);
  };




  return (
    <div className={active === 1 ? "EssentialsContainer" : "d-none"}>
      <Formik
        enableReinitialize={true}
        initialValues={{
          first_name: "",
          middle_name: "",
          last_name: "",
          marital_status: "",
          personal_email: "",
          email: "",
          phone: "",
          gender: "",
          date_of_birth: "",
          disability: "",
          visa_type: "",
          is_expatriate: "",
          visa_duration: "",
          passport_number: "",
          institution_attended: "",
          nin: "",
          course_studied: "",
          qualification: "",
        }}
        onSubmit={handleSubmit}
      // validationSchema={validate}
      >
        {({ values, handleChange, setFieldValue, submitForm }) => {
          if (active === 1) {
            bindSubmitForm(submitForm);
          }
          return (
            <div>
              <div className="testbox">
                <form>
                  <div className="form-group">
                    <InputField
                      label="ENTER COMPANY NAME"
                      name="enter_company_name"
                      placeholder="ENTER COMPANY NAME"
                    />
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default Essentials;
