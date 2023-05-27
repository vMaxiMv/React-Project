import myPost from './Post.module.css';

const Post = (props) => {

    return (
        <div className={myPost.main_block}>
            <img src="https://cdn.icon-icons.com/icons2/582/PNG/512/boy_icon-icons.com_55048.png" />
            <div className={myPost.item}>{props.message}</div>
            <span>{props.likes} likes</span>
        </div>
    )
}
export default Post;