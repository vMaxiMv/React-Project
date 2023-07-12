
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {updateStatusThunk} from "../../redux/ProfilePageReducer";
//import myProfile from './Profile.module.css';


const Profile = (props) => {

  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk}/>
      <MyPostsContainer
      />
    </div>
  )
}
export default Profile;