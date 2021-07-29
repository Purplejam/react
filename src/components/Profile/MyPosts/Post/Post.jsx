import classes from './Post.module.css';

const Post = (props) => {

    return(
        <div className={classes.item}>
        	<div className={classes.imgWrapper}>
             <img src="https://i.pravatar.cc/50"/>
             <span className={classes.itemMessage}>{props.message}</span>
        	</div>
            <div className={classes.likes}>
                <span>Likes {props.likeCount}</span>
            </div>
        </div>
        );

}







export default Post