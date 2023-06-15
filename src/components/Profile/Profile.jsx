
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
//import myProfile from './Profile.module.css';


const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
        // posts={props.ProfilePage.Posts}
        //   dispatch={props.dispatch}
        //   newPostText={props.ProfilePage.newPostText}
        store={props.store}
      />
    </div>
  )
}
export default Profile;