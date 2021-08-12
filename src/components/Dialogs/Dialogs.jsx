import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import {messageActionCreator, updateMessageActionCreator} from './../../redux/dialogs-reducer copy.js';
import {Redirect} from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';


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
    	<div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
            {dialogsArray}         	
         </div>
         <div className={classes.messages}>
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
    return(
        <Formik
            initialValues={{'textMessage': ''}}
            onSubmit={onSubmit}>

       {({ isSubmitting }) => (
         <Form  className={classes.dialogs} name="dialogsForm">

           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>

            <Field component="textarea" name="textMessage" placeholder="textarea"/>
            {/* <ErrorMessage name="textarea" component="div" /> */}
         </Form>
       )}
            

        </Formik>
        )
}

export default Dialogs