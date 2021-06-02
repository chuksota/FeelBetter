import React, { useEffect } from "react"
import {load} from '../store/feeds'
import {useDispatch, useSelector} from "react-redux"

const Profile = () => {
  const dispatch = useDispatch()

  const getFeeds = async () => {
    console.log("I'm in the get feeds function")
    await dispatch(load(user.id))
  }
  const user = useSelector(state => state.session.user)
  const feeds = useSelector(state => state.feeds)
  console.log(user.id)
  // console.log(feeds)
  const addFeed = async () => {
  }
  return(
    <>
    <h1>
      Left View Area/Working Menu
      <button onClick={getFeeds}>Test dispatch</button>
      <button onClick={addFeed}>Add feed</button>
      <form>
      </form>
    </h1>
      <h2>
        Middle View Area/Where all the magic happens
      </h2>
    </>
  )
}

export default Profile
