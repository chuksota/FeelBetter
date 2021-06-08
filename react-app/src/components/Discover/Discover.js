import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadS} from '../../store/sources'
import Source from '../Articles/Articles'
import ProfileDrawer from '../Profile/profileDrawer/ProfileDrawer'
import SourceCard from './SourceCard'

const Discover = () => {
const dispatch = useDispatch()
const feeds = useSelector(state=> state.session.user.feeds)
const sources = useSelector(state=> state.sources)
const sourcesArr = Object.values(sources)

useEffect(()=> {
  dispatch(loadS())
}, [dispatch])

// const followASource = (id) => {
//   dispatch(follow(id))
// }
  return(
    <>
    <ProfileDrawer feeder={feeds}/>
    <div className='testing'>
    {sourcesArr.map((source)=>(
     <SourceCard key={source.id} source={source} feeds={feeds}/>
    ))}
    </div>
    </>
  )
}

export default Discover
