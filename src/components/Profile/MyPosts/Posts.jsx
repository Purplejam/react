import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post.jsx';


const Posts = (props) => {

  let postsArray = props.posts.map(post => <Post message={post.message} likeCount={post.likeCount}/>);
  let newPostElement = React.createRef();

  let addPostItem = () => {
    props.addPostItem();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.onPostChange(text);
  }

	return (
           <div className={classes.posts}>
               <h3>
                   My Posts
               </h3>
               <div>
                   <div>
                       <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}></textarea>   
                   </div>

                   <div>
                       <button onClick={addPostItem}>Add Post</button>
                   </div>
               </div>

               <div className={classes.allPosts}>
                   {postsArray}   
               </div>

           </div>
		);
}







export default Posts