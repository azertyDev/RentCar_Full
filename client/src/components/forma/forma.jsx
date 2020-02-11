import React,{useState} from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "antd";
import CrudButton from '../crudButton/crudButton';
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Password Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email Required")
});

export const Forma = props => {
 const [num, setNum] = useState(0);
 const handleChange=(e)=>{
  if(e.target.name === 'role'){
    setNum(parseInt(e.target.value))
  }
 }
  return (
    <div>
   {!props.user._id?<h2>Add User</h2>:<h2>Edit User</h2>}
      <Formik
        initialValues={{
          name: props.user.name || "",
          password: "",
          email: props.user.email || "",
          role: props.user.role || 0
        }}
        enableReinitialize
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log("values", values.role);
          if (!props.user._id) {
            return props.add(values);
          }
          props.edit(props.user._id, values);
        }}
      >
        {({ errors, touched }) => (
          <Form onChange={e=>handleChange(e)}>
            <div className="form_element">
              <label htmlFor="name">Name: </label>
              <Field name="name" />
              {errors.name && touched.name ? (
                <div className="error_message">{errors.name}</div>
              ) : null}
            </div>
            <div className="form_element">
              <label htmlFor="password">Password: </label>
              <Field name="password" />
              {errors.password && touched.password ? (
                <div className="error_message">{errors.password}</div>
              ) : null}
            </div>
            <div className="form_element">
              <label htmlFor="email">Email: </label>
              <Field name="email" type="email" />
              {errors.email && touched.email ? (
                <div className="error_message">{errors.email}</div>
              ) : null}
            </div>
            <div className="form_element">
              <label htmlFor="Role">Role: </label>
              <div>
                <Field as="select" name="role">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Field>
              </div>
              <CrudButton num={num}/>
            </div>
            {!props.addPending && !props.editPending ? (
              <button type="submit">Submit</button>
            ) : (
              <Button loading={true} style={{width:'100%'}}></Button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Forma;
