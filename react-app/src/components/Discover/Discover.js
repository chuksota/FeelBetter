import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadS} from '../../store/sources'
import ProfileDrawer from '../Profile/profileDrawer/ProfileDrawer'
import SourceCard from './SourceCard'

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
    <div className='testing'>
    {sourcesArr.map((source)=>(
     <SourceCard key={source.id} source={source}
     feeds={feeds}
     followed={followed}
     setFollowed={setFollowed}
     sourcesObj={sourcesObj}
     />
    ))}
    </div>
    </>
  )
}

export default Discover
