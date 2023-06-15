import React from 'react'
import myPosts from './MyPosts.module.css';
import Post from './Post/Post';

const addPostReact = React.createRef()



const MyPosts = (props) => {
    const onAddPost = () => {
        //const text = addPostReact.current.value;

        props.addPostCallBack()
        //props.updateNewPostText('')

    }

    const onPostChange = () => {
        const text = addPostReact.current.value;
        props.PostChangeCallBack(text)
    }
    const NewMyPostArray = props.posts.map(item => <Post message={item.message} likes={item.likes} />)
    return (
        <div>My posts
            <div>
                <textarea ref={addPostReact} value={props.newPostText} onChange={onPostChange} />
                <button onClick={onAddPost}>Add</button>
            </div>
            <div className={myPosts.posts}>
                {NewMyPostArray}
            </div>
        </div>
    )
}
export default MyPosts;