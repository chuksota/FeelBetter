import React, { useEffect, useState } from "react"
import {deleteOne, add} from '../store/feeds'
import {useDispatch, useSelector} from "react-redux"
import ProfileDrawer from '../components/profileDrawer/ProfileDrawer'
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

const Profile = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')


  const user = useSelector(state => state.session.user)
  const feeds = useSelector(state=> state.session.user.feeds)

//  useEffect(()=> {
//    dispatch(load(user.id))
//  }, [dispatch])

 const onSubmit = (e) => {
   e.preventDefault()
  dispatch(add(name))
  setName('')
 }
 const handleDelete = (id) => {
  dispatch(deleteOne(id))
}



  return(
    <>
    <h1>
      Left View Area/Working Menu
      <button>Add feed</button>
      {feeds.map((feed)=>(
        <div key={feed.id}>{feed.name}
        <button onClick={() => handleDelete(feed.id)}>Delete Feed</button>
        </div>
      ))}
      <ProfileDrawer userFeeds={feeds}/>

      <form>
        <label>name</label>
        <input
        value ={name}
        onChange={e=>setName(e.target.value)}></input>
        <button onClick={onSubmit}>submit</button>
      </form>
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

{/* <li>{feeds[1]?.name}</li>
        <ul>
          {feeds[1]?.sources.map((source)=>(
            <li>{source?.name}</li>
            ))}
        </ul>
        <li>{feeds[2]?.name}</li>
        <ul>
          {feeds[2]?.sources.map((source)=>(
            <li>{source?.name}</li>
          ))}
        </ul>
        <li>{feeds[3]?.name}</li>
        <ul>
          {feeds[3]?.sources.map((source)=>(
            <li>{source?.name}</li>
          ))}
        </ul>
        <li>{feeds[4]?.name}</li>
        <ul>
          {feeds[4]?.sources.map((source)=>(
            <li>{source?.name}</li>
          ))} */}
        {/* </ul> */}
