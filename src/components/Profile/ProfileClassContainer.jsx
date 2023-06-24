import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import { selectProfileAC } from '../../redux/ProfilePageReducer';
import axios from 'axios'
//import myProfile from './Profile.module.css';


class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/8`)
            .then(response => {

                this.props.selectProfileCallBack(response.data)
            })

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
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