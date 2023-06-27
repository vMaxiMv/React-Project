import React, {useEffect} from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import { selectProfileAC } from '../../redux/ProfilePageReducer';
import axios from 'axios'
import {useParams} from "react-router-dom";
//import myProfile from './Profile.module.css';


// class ProfileContainer extends React.Component {
//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/8`)
//             .then(response => {
//
//                 this.props.selectProfileCallBack(response.data)
//             })
//
//     }

//     render() {
//         return (
//             <Profile {...this.props} profile={this.props.profile} />
//         )
//     }
// }



function ProfileContainer(props){
    let {userId} = useParams()
    if(!userId){
        userId = 2;
    }
    useEffect(()=>{
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
             .then(response => {
                props.selectProfileCallBack(response.data)
             })

    }, [userId])
    return (
        <div>  <Profile {...props} profile={props.profile}  /></div>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.profile
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        selectProfileCallBack: (profile) => dispatch(selectProfileAC(profile))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);