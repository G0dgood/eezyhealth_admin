import { Form, Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { EmployeeFormProps } from "../../interfaces/employee";
import InputField from "./InputField";

const Information = ({
  active,
  employee,
  setEmployee,
  setActive,
  bindSubmitForm
}: EmployeeFormProps) => {
  const validate = Yup.object().shape({});


  const handleSubmit = (values?: any) => {
    // console.log("Values", values);
    setEmployee({ ...employee, ...values });
    setActive(3);
  };
  return (
    <div className={active === 2 ? "EssentialsContainer" : "d-none"}>
      <Formik
        initialValues={{
          department: "",
          role: "",
          category: "",
          has_work_location_objection: "",
          employment_date: "",
          employment_duration: "",
          employment_type: "",
          employee_id: "",
          tally_number: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validate}
      >
        {({ values, submitForm, setFieldValue }) => {
          if (active === 2) {
            bindSubmitForm(submitForm);
          }
          return (
            <div id="my-form">
              <div className="testbox  ">
                <form>
                  <div className="row-item">
                    <InputField
                      label="FIRST NAME"
                      name="first_name"
                      placeholder="ENTER FIRST NAME"
                      className="input_label"
                    />
                    <InputField
                      label="FIRST NAME"
                      name="first_name"
                      placeholder="ENTER FIRST NAME"
                    />
                  </div>

                  <div className="row-item">
                    <InputField
                      label="FIRST NAME"
                      name="first_name"
                      placeholder="ENTER FIRST NAME"
                    />
                    <InputField
                      label="FIRST NAME"
                      name="first_name"
                      placeholder="ENTER FIRST NAME"
                    />
                  </div>

                  <div className="row-item">
                    <InputField
                      label="FIRST NAME"
                      name="first_name"
                      placeholder="ENTER FIRST NAME"
                    />

                    <InputField
                      label="FIRST NAME"
                      name="first_name"
                      placeholder="ENTER FIRST NAME"
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

export default Information;
