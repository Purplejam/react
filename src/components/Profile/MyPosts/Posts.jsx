import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post.jsx';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';


const Posts = (props) => {

  let postsArray = props.profilePage.posts.map(post => <Post message={post.message} likeCount={post.likeCount}/>);
  let newPostElement = React.createRef();

  let addPostItem = (text) => {
    props.addPostItem(text);
  }

	return (
           <div className={classes.posts}>
               <h3>
                   My Posts
               </h3>
               <div>
                   <ProfilePostMessage addPostItem={addPostItem}/>
               </div>

               <div className={classes.allPosts}>
                   {postsArray}   
               </div>

           </div>
		);
}


const ProfilePostMessage = (props) => {

  const onSubmitHandler = (values, {setSubmitting}) => {
      console.log(values);
      props.addPostItem(values.textMessage);
      setSubmitting(false);
  }

  return (
    <Formik
      initialValues={{}}
      onSubmit={onSubmitHandler}>
      {({ isSubmitting }) => (
         <Form  name="profilePostForm">

          <Field component="textarea" name="textMessage" placeholder="add post"/>
            {/* <ErrorMessage name="textarea" component="div" /> */}
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