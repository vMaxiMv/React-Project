import myPosts from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {
    const NewMyPostArray = props.MyPostArray.map(item => <Post message={item.message} likes={item.likes} />)
    return (
        <div>My posts
            <div>
                <textarea></textarea>
                <button>Add</button>
            </div>
            <div className={myPosts.posts}>
                {NewMyPostArray}
            </div>
        </div>
    )
}
export default MyPosts;