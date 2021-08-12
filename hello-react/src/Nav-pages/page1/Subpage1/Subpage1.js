import React, { Component } from 'react';
import { Col, Form ,Button,FormLabel} from 'react-bootstrap';
import './Subpage1.css';
import { Formik } from "formik";
class Subpage1 extends Component {
  constructor(props){
  super(props);
  this.state = {};
 
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    const initialValues = {
      username: "",
      password: "",
      
    };
    const validate = (values) => {
      let errors = {};
      const regx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.username) {
        errors.username = " Username is required"
      }
      else if (values.username.length < 4) {
        errors.username = "To shoort Username"
      }
      if (!values.password) {
        errors.password = "Password is required"
      }
      else if (values.password.length < 8) {
        errors.password = "Password is Weak"
      }
      return errors;
    }
    const submitForm = (values) => {
      console.log(values);
    }
    return (

      <div>
        <h1>Using Formik Validating Form</h1>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={submitForm}
        >
          {(formik) => {
            const { values, handleChange, handleSubmit, errors, touched, handleBlur, isValid, dirty } = formik;
            return (
              <Form onSubmit={handleSubmit}>
                <Form.Row >
                  <Col>
                    <Form.Control type="text" placeholder="Username" name="username" value={values.username} onChange={handleChange} onBlur={handleBlur} className={
                      errors.username ? "border-danger" : ""
                    } />
                     {errors.username && errors.touched}<span className="input-error">
                    {errors.username}
                  </span>
                  </Col>
                 
                  <Col>
                    <Form.Control type="password" placeholder="password" name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      
                      className={
                        errors.password ?'border-danger':''
                      }
                     />
                        {errors.password && errors.touched}<span className="input-error" 
                      >
                    {errors.password}
                  </span>
                  </Col>
                
                </Form.Row>
                <Form.Row bsPrefix="m-4">
                {isValid ?
                <Button type="submit">Login</Button>:''}  
                </Form.Row>
                <Form.Row bsPrefix="m-2">
                  <FormLabel>
                    {values.username}
                  </FormLabel>
                  <FormLabel>
                    {values.password}
                  </FormLabel>
                </Form.Row>
              </Form>
            );
          }}

        </Formik>

      </div>
    );
  }
}

export default Subpage1;