import React from 'react'
import UsersStyles from './Users.module.css'
import { NavLink } from 'react-router-dom';


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.usersOnPageCount)

    let pagesNumbersArray = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesNumbersArray.push(i)
    }
    let currentPageList = props.currentPage;
    let firstPageList = ((currentPageList - 4) < 0) ? 0 : currentPageList - 4;
    let lastPageList = currentPageList + 3;
    let slicedPages = pagesNumbersArray.slice(firstPageList, lastPageList)
    return (
        <div>
            <div className={UsersStyles.nums}>
                {slicedPages.map(p => <span className={props.currentPage === p ? UsersStyles.current : ''} onClick={() => { props.pageChanged(p) }}>{p}</span>)}

            </div>

            {

                props.users.map(u => <div key={u.id}>
                    <div>
                        <span>
                            <NavLink to={'/Profile/' + u.id}> <img src={u.photos.small != null ? u.photos.small : "https://w7.pngwing.com/pngs/165/45/png-transparent-computer-icons-male-avatar-white-collar-miscellaneous-blue-text.png"} className={UsersStyles.ImageSize} /></NavLink>
                        </span>
                    </div>
                    <div>

                        {/* {u.followed ? props.unfollowCallBack(u.id) : props.followCallBack(u.id)} */}
                        {u.followed ? <button onClick={() => { props.unfollowCallBack(u.id) }}>Unfollow</button> : <button onClick={() => props.followCallBack(u.id)}>Follow</button>}
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
    )
}

export default Users