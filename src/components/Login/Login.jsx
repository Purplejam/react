import React from 'react';
import classes from './Login.module.css';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {login} from './../../redux/auth-reducer.js';


const Login = (props) => {

	return (
    	<div>
         <h1>Login</h1>
         <FormLogin login={props.login}/>

     </div>
		);
}



const FormLogin = (props) => {

return	<Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {

           props.login(values.email, values.password)
           setSubmitting(false);

       }}
     >
       {({ isSubmitting }) => (
         <Form>
         	<div>
            <Field type="email" name="email" placeholder="Email"/>
           	<ErrorMessage name="email" component="div" />
         	</div>

         	<div>
            <Field type="password" name="password" placeholder="Password"/>
           	<ErrorMessage name="password" component="div" />	
         	</div>


           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>

}








export default connect(null, {login})(Login)