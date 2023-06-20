import React from 'react'
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/ProfilePageReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


// const MyPostsContainer = (props) => {


//     // const NewMyPostArray = props.posts.map(item => <Post message={item.message} likes={item.likes} />)
//     return <StoreContext.Consumer>
//         {
//             (store) => {
//                 const state = store.getState();

//                 const onAddPost = () => {
//                     //const text = addPostReact.current.value;
//                     store.dispatch(addPostActionCreator())
//                     //props.updateNewPostText('')

//                 }

//                 const onPostChange = (text) => {
//                     store.dispatch(updatePostTextActionCreator(text))
//                 }

//                 return <MyPosts addPostCallBack={onAddPost} PostChangeCallBack={onPostChange} posts={state.ProfilePage.Posts} newPostText={state.ProfilePage.newPostText} />

//             }
//         }
//     </StoreContext.Consumer>
// }

const mapStateToProps = (state) => {
    return {
        ProfilePage: state.ProfilePage.Posts,
        newPostText: state.ProfilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPostCallBack: () => { dispatch(addPostActionCreator()) },
        PostChangeCallBack: (text) => { dispatch(updatePostTextActionCreator(text)) }
    }
}
// С помощью connect() получаем из контекста кусок state и ActionCreactor. А также она создает контейнерную компненту, которая хранит в себе процедурную MyPosts
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;