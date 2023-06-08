import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
//import myProfile from './Profile.module.css';


const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.ProfilePage.Posts}
        appPostFunc={props.appPostFunc}
        newPostText={props.ProfilePage.newPostText}
        updateNewPostText={props.updateNewPostText} />
    </div>
  )
}
export default Profile;