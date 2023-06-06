import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
//import myProfile from './Profile.module.css';


const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts MyPostArray={props.MyPostArray} appPostFunc={props.appPostFunc} />
    </div>
  )
}
export default Profile;