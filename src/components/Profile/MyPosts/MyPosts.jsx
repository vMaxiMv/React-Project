import myPosts from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>My posts
            <div>
                <textarea></textarea>
                <button>Add</button>
            </div>
            <div className={myPosts.posts}>
                <Post message='Hello' likes='5' />
                <Post message='Bye' likes='15' />
            </div>
        </div>
    )
}
export default MyPosts;