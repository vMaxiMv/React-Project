import React from 'react'
import { connect } from 'react-redux';
import { FollowAC, SetIsFetchingAC, SetPageAC, SetTotalValueAC, SetUsersAC, UnFollowAC } from '../../redux/UsersPageReducer';
import axios from 'axios'
import Users from './Users';
import Loading from '../common/loading/loading';




class UsersClassContainer extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.SetIsFetchingCallBack(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPageCount}`)
            .then(response => {
                this.props.SetUsersCallBack(response.data.items)
                this.props.SetTotalValueCallBack(response.data.totalCount)
                this.props.SetIsFetchingCallBack(false)
            })

    }
    pageChanged = (p) => {
        this.props.SetIsFetchingCallBack(true)
        this.props.SetPageCallBack(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersOnPageCount}`)
            .then(response => {
                this.props.SetUsersCallBack(response.data.items)
                this.props.SetIsFetchingCallBack(false)
            })
    }


    render() {



        return <>
            {this.props.loadingStatus ? <Loading /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                users={this.props.users}
                usersOnPageCount={this.props.usersOnPageCount}
                currentPage={this.props.currentPage}
                pageChanged={this.pageChanged}
                unfollowCallBack={this.props.unfollowCallBack}
                followCallBack={this.props.followCallBack}
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
        loadingStatus: state.UsersPage.loadingStatus
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        followCallBack: (userId) => dispatch(FollowAC(userId)),  //Диспатчим результат работы AC Т.е action,поскольку вызываем функцию
        unfollowCallBack: (userId) => dispatch(UnFollowAC(userId)),
        SetUsersCallBack: (users) => dispatch(SetUsersAC(users)),
        SetPageCallBack: (currentPage) => dispatch(SetPageAC(currentPage)),
        SetTotalValueCallBack: (allUsers) => dispatch(SetTotalValueAC(allUsers)),
        SetIsFetchingCallBack: (isFetching) => dispatch(SetIsFetchingAC(isFetching))

    }
}



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassContainer)

export default UsersContainer;