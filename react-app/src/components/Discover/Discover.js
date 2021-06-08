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
const [followed, setFollowed] = React.useState(false)
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
     setFollowed={setFollowed}/>
    ))}
    </div>
    </>
  )
}

export default Discover
