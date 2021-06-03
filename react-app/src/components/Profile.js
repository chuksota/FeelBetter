import React, { useEffect, useState } from "react"
import {load, add} from '../store/feeds'
import {useDispatch, useSelector} from "react-redux"

const Profile = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  // console.log(name)

  const user = useSelector(state => state.session.user)
   console.log(user.feeds)
  // const feeds = useSelector(state => Object.values(state.feeds))

  // console.log(feeds)

//  useEffect(()=> {
//    dispatch(load(user.id))
//  }, [dispatch])

 const onSubmit = (e) => {
   e.preventDefault()
  dispatch(add(name, user.id))
  setName('')
 }
  return(
    <>
    <h1>
      Left View Area/Working Menu
      <button>Test dispatch</button>
      <button>Add feed</button>
      <ul>

      </ul>
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
