import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadS} from '../../store/sources'
import ProfileDrawer from '../Profile/profileDrawer/ProfileDrawer'
import SourceCard from './SourceCard'
import './discover.css'
const Discover = () => {
const dispatch = useDispatch()
const feeds = useSelector(state=> state.session.user.feeds)
const sources = useSelector(state=> state.sources)
const sourcesArr = Object.values(sources)

const newMethod2 = () => {
  const sources = {}
  feeds.forEach((feed)=>{
    feed.sources.forEach((source)=>{
      sources[source.id] = true
    })
  })
  return sources
}

let sourcesObj = newMethod2()

const newMethod3 = () =>{
  const feedObj = {}
  for(let i = 0; i < feeds.length; i++){
    let feed = feeds[i]
    let feed_id = feeds[i].id
    for(let j = 0; j < feed.sources.length; j++){
      feedObj[feed.sources[j].id] = feed_id
    }
  }
  return feedObj
  }


const feedObj = newMethod3()

const newMethod = () => {
  let newDict = {}
  sourcesArr.forEach((source)=>{
    newDict[source.id] = false
  })
  return newDict
}

const [followed, setFollowed] = React.useState(newMethod())

useEffect(()=> {
  dispatch(loadS())
}, [dispatch])



  return(
    <>
    <ProfileDrawer feeder={feeds} followed={followed}/>
    <div className='discover_feed'>
      <div className='discover-header'>
      <div className="discover-header_title">
      <h1>Discover</h1>
      </div>
      <div>
      <h2 className='discover_sub'>Stop getting your mental health information from Tik Tok. </h2>
      </div>
      </div>
    {sourcesArr.map((source)=>(
     <SourceCard key={source.id}
     source={source}
     feeds={feeds}
     followed={followed}
     setFollowed={setFollowed}
     sourcesObj={sourcesObj}
     feedObj={feedObj}
     />
    ))}
    </div>
    </>
  )
}

export default Discover
