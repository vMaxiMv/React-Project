import React from 'react'
import myPosts from './MyPosts.module.css';
import Post from './Post/Post';

const addPostReact = React.createRef()


const MyPosts = (props) => {

    const addPost = () => {
        const text = addPostReact.current.value;
        props.appPostFunc(text)
    }

    const NewMyPostArray = props.MyPostArray.map(item => <Post message={item.message} likes={item.likes} />)
    return (
        <div>My posts
            <div>
                <textarea ref={addPostReact}></textarea>
                <button onClick={addPost}>Add</button>
            </div>
            <div className={myPosts.posts}>
                {NewMyPostArray}
            </div>
        </div>
    )
}
export default MyPosts;