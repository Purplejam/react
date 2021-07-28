import classes from './Post.module.css';

const Post = (props) => {

    return(
        <div className={classes.item}>
            <img src="https://i.pravatar.cc/50"/>
            {props.message}
            <div>
                <span>Likes {props.likeCount}</span>
            </div>
        </div>
        );

}







export default Post