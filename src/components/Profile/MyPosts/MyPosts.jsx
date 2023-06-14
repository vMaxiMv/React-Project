import React from 'react'
import myPosts from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/ProfilePageReducer';

const addPostReact = React.createRef()



const MyPosts = (props) => {
    const addPost = () => {
        //const text = addPostReact.current.value;
        props.dispatch(addPostActionCreator())
        //props.updateNewPostText('')

    }

    const onPostChange = () => {
        const text = addPostReact.current.value;
        props.dispatch(updatePostTextActionCreator(text))
    }

    const NewMyPostArray = props.posts.map(item => <Post message={item.message} likes={item.likes} />)
    return (
        <div>My posts
            <div>
                <textarea ref={addPostReact} value={props.newPostText} onChange={onPostChange} />
                <button onClick={addPost}>Add</button>
            </div>
            <div className={myPosts.posts}>
                {NewMyPostArray}
            </div>
        </div>
    )
}
export default MyPosts;