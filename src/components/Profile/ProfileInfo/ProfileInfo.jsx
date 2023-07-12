import Loading from "../../common/loading/loading"
import MyPosts from "../MyPosts/MyPosts"
import ProfileInfoStyle from "./ProfileInfo.module.css"
import {Navigate} from "react-router-dom";
import ProfileStatus from "./profileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Loading />
    }
    //let status = props.profile.aboutMe


    return (
        <div >
            {/* <div>
          <img src="https://adventures.com/media/6169/how-to-take-pictures-of-the-northern-lights-camera-tripod-4.jpg?anchor=center&mode=crop&width=970&height=645&rnd=132633097450000000&quality=80&format=jpg" />
        </div> */}
            <div>
                {/*<div>{status ? status : 'Ничего особенного'}</div>*/}
                {/*<img src={props.profile.photos.large} alt="image" />*/}
                <img src={props.profile.photos.large !==null ? props.profile.photos.large : "https://w7.pngwing.com/pngs/165/45/png-transparent-computer-icons-male-avatar-white-collar-miscellaneous-blue-text.png"} className={ProfileInfoStyle.img}/>
                <ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk}/>
            </div>
        </div>
    )
}
export default ProfileInfo