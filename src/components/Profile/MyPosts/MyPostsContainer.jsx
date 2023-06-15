import React from 'react'
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/ProfilePageReducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
    const state = props.store.getState();

    const onAddPost = () => {
        //const text = addPostReact.current.value;
        props.store.dispatch(addPostActionCreator())
        //props.updateNewPostText('')

    }

    const onPostChange = (text) => {
        props.store.dispatch(updatePostTextActionCreator(text))
    }

    // const NewMyPostArray = props.posts.map(item => <Post message={item.message} likes={item.likes} />)
    return (
        <MyPosts addPostCallBack={onAddPost} PostChangeCallBack={onPostChange} posts={state.ProfilePage.Posts} newPostText={state.ProfilePage.newPostText} />
    )
}
export default MyPostsContainer;