import React from 'react'
import { connect } from 'react-redux';
import {
    FollowAC, followThunk, getUsersThunk,
    toggleFollowingDisableAC,
    UnFollowAC, unfollowThunk
} from '../../redux/UsersPageReducer';
import Users from './Users';
import Loading from '../common/loading/loading';





class UsersClassContainer extends React.Component {

    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        // this.props.SetIsFetchingCallBack(true)
        // getUsersObj.getUsersFunc(this.props.currentPage, this.props.usersOnPageCount)
        //     .then(data => {
        //
        //         this.props.SetUsersCallBack(data.items)
        //         this.props.SetTotalValueCallBack(data.totalCount)
        //         this.props.SetIsFetchingCallBack(false)
        //     })
        this.props.getUsersThunk(this.props.currentPage, this.props.usersOnPageCount)
    }
    pageChanged = (p) => {
        // this.props.SetIsFetchingCallBack(true)
        // this.props.SetPageCallBack(p)
        this.props.getUsersThunk(p, this.props.usersOnPageCount)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersOnPageCount}`,
        //     {withCredentials:true}
        //     )

        //     getUsersObj.getUsersFunc(p, this.props.usersOnPageCount)
        //     .then(data => {
        //         this.props.SetUsersCallBack(data.items)
        //         this.props.SetIsFetchingCallBack(false)
        //     })
    }


    render() {



        return <>
            {this.props.loadingStatus ? <Loading /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                users={this.props.users}
                usersOnPageCount={this.props.usersOnPageCount}
                currentPage={this.props.currentPage}
                pageChanged={this.pageChanged}
               // unfollowCallBack={this.props.unfollowCallBack}
               // followCallBack={this.props.followCallBack}
                   //toggleFollowingDisableCallBack={this.props.toggleFollowingDisableCallBack}
                followThunk = {this.props.followThunk}
                   unfollowThunk = {this.props.unfollowThunk}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        usersOnPageCount: state.UsersPage.usersOnPageCount,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        loadingStatus: state.UsersPage.loadingStatus,
        followingInProgress:state.UsersPage.followingInProgress
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // followCallBack: (userId) => dispatch(FollowAC(userId)),  //Диспатчим результат работы AC Т.е action,поскольку вызываем функцию
        // unfollowCallBack: (userId) => dispatch(UnFollowAC(userId)),
        // toggleFollowingDisableCallBack: (isFetching, userId) => dispatch(toggleFollowingDisableAC(isFetching, userId)),
        // getUsersThunkCallBack:(currentPage,usersOnPageCount) => dispatch(getUsersThunk(currentPage,usersOnPageCount))


    }
}



const UsersContainer = connect(mapStateToProps, {getUsersThunk, followThunk, unfollowThunk})(UsersClassContainer)

export default UsersContainer;