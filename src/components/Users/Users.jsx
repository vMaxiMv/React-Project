import React from 'react'
import UsersStyles from './Users.module.css'
import axios from 'axios'


// Так как единственное, что делает конструктор - это super(props), то его можно не писать
class Users extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPageCount}`)
            .then(response => {
                this.props.SetUsersCallBack(response.data.items)
                this.props.SetTotalValueCallBack(response.data.totalCount)
            })

    }
    pageChanged = (p) => {
        this.props.SetPageCallBack(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersOnPageCount}`)
            .then(response => {
                this.props.SetUsersCallBack(response.data.items)
            })
    }


    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.usersOnPageCount)

        let pagesNumbersArray = []
        for (let i = 1; i <= pagesCount; i++) {
            pagesNumbersArray.push(i)
        }
        let currentPageList = this.props.currentPage;
        let firstPageList = ((currentPageList - 4) < 0) ? 0 : currentPageList - 4;
        let lastPageList = currentPageList + 3;
        let slicedPages = pagesNumbersArray.slice(firstPageList, lastPageList)

        //{this.props.users.length === 0 ? <button onClick={this.getUsers}>Get users</button> : null}
        return <div>
            <div className={UsersStyles.nums}>
                {slicedPages.map(p => <span className={this.props.currentPage === p ? UsersStyles.current : ''} onClick={() => { this.pageChanged(p) }}>{p}</span>)}

            </div>

            {

                this.props.users.map(u => <div key={u.id}>
                    <div>
                        <span>
                            <img src={u.photos.small != null ? u.photos.small : "https://i.ya-wd.com/images/user-avatar-png-7.png"} className={UsersStyles.ImageSize} />
                        </span>
                    </div>
                    <div>

                        {/* {u.followed ? props.unfollowCallBack(u.id) : props.followCallBack(u.id)} */}
                        {u.followed ? <button onClick={() => { this.props.unfollowCallBack(u.id) }}>Unfollow</button> : <button onClick={() => this.props.followCallBack(u.id)}>Follow</button>}
                    </div>
                    <div>
                        <h2>{u.name}</h2>
                        <p>{u.status}</p>
                    </div>
                    <div>
                        <p>{"u.location.country"}</p>
                        <p>{"u.location.city"}</p>
                    </div>
                </div>)
            }
        </div>

    }
}

export default Users



// let Users = (props) => {
//     const getUsers = () => {
//         if (props.users.length === 0) {
//             axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//                 props.SetUsersCallBack(response.data.items)
//             })
//         }
//     }
//     return <div>
//         {props.users.length === 0 ? <button onClick={getUsers}>Get users</button> : null}

//         {

//             props.users.map(u => <div key={u.id}>
//                 <div>
//                     <span>
//                         <img src={u.photos.small != null ? u.photos.small : "https://i.ya-wd.com/images/user-avatar-png-7.png"} className={UsersStyles.ImageSize} />
//                     </span>
//                 </div>
//                 <div>

//                     {/* {u.followed ? props.unfollowCallBack(u.id) : props.followCallBack(u.id)} */}
//                     {u.followed ? <button onClick={() => { props.unfollowCallBack(u.id) }}>Unfollow</button> : <button onClick={() => props.followCallBack(u.id)}>Follow</button>}
//                 </div>
//                 <div>
//                     <h2>{u.name}</h2>
//                     <p>{u.status}</p>
//                 </div>
//                 <div>
//                     <p>{"u.location.country"}</p>
//                     <p>{"u.location.city"}</p>
//                 </div>
//             </div>)
//         }
//     </div>
// }

// export default Users;