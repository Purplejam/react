import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post.jsx';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';


const Posts = (props) => {

  let postsArray = props.profilePage.posts.map(post => <Post message={post.message} likeCount={post.likeCount}/>);
  let newPostElement = React.createRef();

  let addPostItem = (text) => {
    props.addPostItem(text);
  }

	return (
           <div className={styles.posts}>
               <h3>
                   My Posts
               </h3>
               <div>
                   <ProfilePostMessage addPostItem={addPostItem}/>
               </div>

               <div className={styles.allPosts}>
                   {postsArray}   
               </div>

           </div>
		);
}


const ProfilePostMessage = (props) => {

  const onSubmitHandler = (values, {setSubmitting}) => {
      props.addPostItem(values.textMessage);
      setSubmitting(false);
  }

  const SignupSchema = Yup.object().shape({
   textMessage: Yup.string()
     .min(2, 'Too Short!')
     .max(100, 'Too Long!')
     .required('Required')
 });

  return (
    <Formik
      initialValues={{}}
      onSubmit={onSubmitHandler}
      validationSchema={SignupSchema}>
      {({ isSubmitting, errors, touched  }) => (
         <Form  name="profilePostForm">

          <Field className={errors.textMessage && touched.textMessage ? styles.invalid : null} component="textarea" name="textMessage" placeholder="add post"/>

            {(errors.textMessage && touched.textMessage) 
              ? <div className={styles.errorBox}>{errors.textMessage}</div>
              : null}

            <div></div>

          <button type="submit" disabled={isSubmitting}>
             Add Post
          </button>


         </Form>
       )} 
    </Formik>
    )
}








export default Posts