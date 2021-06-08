import React, { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import ProfileDrawer from '../Profile/profileDrawer/ProfileDrawer'
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

const Profile = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const feeds = useSelector(state=> state.session.user.feeds)
  return(
    <>
        <ProfileDrawer feeder={feeds}/>
      <h1 className="header_one">
        {`Welcome back ${user?.username}, here's what you missed.`}
      </h1>
    </>
  )
}

export default Profile
// { <button onClick={handleDelete(feed.id)}>Delete</button> }

// const handleDelete = (id) => {
//   dispatch(deleteOne(id))
// }
{/* <div key={feed.id}>{feed.name}
        <button onClick={() => handleDelete(feed.id)}>Delete Feed</button>
        </div> */}
