import React from 'react'
import myPosts from './MyPosts.module.css';
import Post from './Post/Post';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {newPostCreator} from "../../../redux/ProfilePageReducer";

const MyPosts = (props) => {
    const dispatch = useDispatch()

    const {register, handleSubmit, reset} = useForm()

    const newPostText = useSelector(state=>state.ProfilePage.newPostText)
    const onPostTextClick = (data)=>{
        dispatch(newPostCreator(data.text));
        reset()
    }


    const NewMyPostArray = props.ProfilePage.map(item => <Post message={item.message} likes={item.likes} />)
    return (
        <div>My posts
            <form onSubmit={handleSubmit(onPostTextClick)}>
                <div>
                    <input type="text" {...register('text')} defaultValue={newPostText} />
                    <button type="submit">Add</button>
                </div>
            </form>
            <div className={myPosts.posts}>
                {NewMyPostArray}
            </div>
        </div>
    )
}
export default MyPosts;