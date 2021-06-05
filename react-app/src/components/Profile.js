import React, { useEffect, useState } from "react"
import {deleteOne, add} from '../store/session'
import {useDispatch, useSelector} from "react-redux"
import ProfileDrawer from '../components/profileDrawer/ProfileDrawer'
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import FeedComp from './Feeds'
const Profile = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const feeds = useSelector(state=> state.session.user.feeds)

useEffect(()=>{

}, [dispatch, feeds])





  return(
    <>
    <h1>
        <ProfileDrawer feeder={feeds}/>
    </h1>
      <h2>
        Middle View Area/Where all the magic happens
      </h2>
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
