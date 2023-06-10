import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
//import myProfile from './Profile.module.css';


const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.ProfilePage.Posts}
        dispatch={props.dispatch}
        newPostText={props.ProfilePage.newPostText}
      />
    </div>
  )
}
export default Profile;