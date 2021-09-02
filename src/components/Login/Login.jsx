import React from 'react';
import style from './Login.module.css';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {login} from './../../redux/auth-reducer.js';
import {Redirect} from 'react-router-dom';


const Login = (props) => {
  if (props.isAuth) {
    return <Redirect to="/profile"/>
  }

	return (
    	<div>
         <h1>Login</h1>
         <FormLogin login={props.login} captcha={props.captcha}/>

     </div>
		);
}



const FormLogin = (props) => {

  return	<Formik
         initialValues={{ email: '', password: '', rememberMe: true, captcha: null }}
         validate={values => {
           const errors = {};
           return errors;
         }}
         onSubmit={(values, {setSubmitting, setStatus}) => {
             props.login(values.email, values.password, values.rememberMe, values.captcha, setStatus);
             setSubmitting(false); 

         }}
       >
         {({ isSubmitting, status, errors }) => (
           <Form>
           	<div>
              
              <div className={style.statusBox}>
                {status}
                
              </div>
              <Field type="email" name="email" placeholder="Email"/>
             	<ErrorMessage name="email" component="div" />
           	</div>

           	<div>
              <Field type="password" name="password" placeholder="Password"/>
             	<ErrorMessage name="password" component="div" />	
           	</div>

            <div>
              <Field type="checkbox" name="rememberMe" placeholder="Remember me" checked/>
              <span>Remember Me</span>
              <ErrorMessage name="password" component="div" />  
            </div>

            <div>
              {props.captcha && <img src={props.captcha} alt=""/>}
              {props.captcha && 

                <div><Field name="captcha"/></div>}
            </div>


             <button type="submit" disabled={isSubmitting}>
               Submit
             </button>
           </Form>
         )}
       </Formik>

}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
  }
}






export default connect(mapStateToProps, {login})(Login)