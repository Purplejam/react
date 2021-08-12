import React from 'react';
import classes from './Login.module.css';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';


const Login = (props) => {

	return (
    	<div>
         <h1>Login</h1>
         <FormLogin />

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

           console.log(values);
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





export default Login