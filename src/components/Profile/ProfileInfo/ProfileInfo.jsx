import Loading from "../../common/loading/loading"
import MyPosts from "../MyPosts/MyPosts"
import ProfileInfoStyle from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Loading />
    }
    let status = props.profile.aboutMe
    return (
        <div >
            {/* <div>
          <img src="https://adventures.com/media/6169/how-to-take-pictures-of-the-northern-lights-camera-tripod-4.jpg?anchor=center&mode=crop&width=970&height=645&rnd=132633097450000000&quality=80&format=jpg" />
        </div> */}
            <div>
                <div>{status ? status: 'Ничего особенного'}</div>
                <img src={props.profile.photos.large} alt="image" />
            </div>
        </div>
    )
}
export default ProfileInfo