import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import myProfile from './Profile.module.css';


const Profile = (props) => {
  const newProps = props.MyPostArray;

  return (
    <div>
      <ProfileInfo />
      <MyPosts MyPostArray={newProps} />
    </div>
  )
}
export default Profile;