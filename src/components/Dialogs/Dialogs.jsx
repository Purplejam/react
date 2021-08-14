import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import {messageActionCreator, updateMessageActionCreator} from './../../redux/dialogs-reducer copy.js';
import {Redirect} from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';


const Dialogs = (props) => {

    let dialogsArray = props.messagesPage.dialogs.map(user => <DialogItem name={user.name} id={user.id}/>);
    let messagesArray = props.messagesPage.messages.map(message => <Message message={message.message} />);

    let textArea = React.createRef();

    const addUserMessage = () => { 
        props.addUserMessage();
    }

    if (props.isAuth === false) {
        return <Redirect to="/login"/>
    } 
	return (
        <div>
    	<div className={styles.dialogs}>
         <div className={styles.dialogsItems}>
            {dialogsArray}         	
         </div>
         <div className={styles.messages}>
            {messagesArray}
         </div>
         
     </div>
      <TextMessageArea addUserMessage={props.addUserMessage}/>
      </div>
		);
}


const TextMessageArea = (props) => {

    const onSubmit = (values, {setSubmitting}) => {
        console.log(values);
        props.addUserMessage(values.textMessage)
        setSubmitting(false);
    }

    const SignupSchema = Yup.object().shape({
        textMessage: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required')
    });
    return(
        <Formik
            initialValues={{'textMessage': ''}}
            onSubmit={onSubmit}
            validationSchema={SignupSchema}>

       {({ isSubmitting, errors, touched }) => (
         <Form  className={styles.dialogs} name="dialogsForm">

           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>

            <Field className={errors.textMessage && touched.textMessage ? styles.invalid : null} component="textarea" name="textMessage" placeholder="textarea"/>
            {(errors.textMessage && touched.textMessage) 
              ? <div className={styles.errorBox}>{errors.textMessage}</div>
              : null}
         </Form>
       )}
            

        </Formik>
        )
}

export default Dialogs