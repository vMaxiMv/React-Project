import React from 'react'
import { connect } from 'react-redux';
import { FollowAC, SetPageAC, SetTotalValueAC, SetUsersAC, UnFollowAC } from '../../redux/UsersPageReducer';
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        usersOnPageCount: state.UsersPage.usersOnPageCount,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        followCallBack: (userId) => dispatch(FollowAC(userId)),  //Диспатчим результат работы AC Т.е action,поскольку вызываем функцию
        unfollowCallBack: (userId) => dispatch(UnFollowAC(userId)),
        SetUsersCallBack: (users) => dispatch(SetUsersAC(users)),
        SetPageCallBack: (currentPage) => dispatch(SetPageAC(currentPage)),
        SetTotalValueCallBack: (allUsers) => dispatch(SetTotalValueAC(allUsers))
    }
}



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;