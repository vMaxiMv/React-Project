import React, {useEffect} from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import {getStatusThunk, profileThunk, selectProfileAC, updateStatusThunk} from '../../redux/ProfilePageReducer';
import axios from 'axios'
import {Navigate, useParams} from "react-router-dom";
import {UsersApiObj} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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
        userId = props.loginnedUserId;
    }
    useEffect(()=>{
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)

        // UsersApiObj.profileFunc(userId)
        //      .then(response => {
        //         props.selectProfileCallBack(response.data)
        //      })
        props.profileThunk(userId)
        props.getStatusThunk(userId)

    }, [userId])

    // if(!props.isAuth) return <Navigate to='/Login' />

    return (
        <div>  <Profile {...props} profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk} /></div>
    )
}
// let redirectComponent = withAuthRedirect(ProfileContainer) // HOC
const mapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.profile,
        isAuth: state.Auth.isAuth,
        status: state.ProfilePage.status,
        loginnedUserId: state.Auth.userId
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         selectProfileCallBack: (profile) => dispatch(selectProfileAC(profile))
//     }
// }


export default compose(
    connect(mapStateToProps, {profileThunk, getStatusThunk, updateStatusThunk}),
    withAuthRedirect
)
(ProfileContainer)