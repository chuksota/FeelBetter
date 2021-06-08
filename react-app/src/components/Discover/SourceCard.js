import React, {useState} from 'react'
import {follow} from '../../store/sources'
import {useDispatch, useSelector} from 'react-redux'
const SourceCard = ({source}) => {
  const dispatch = useDispatch()
  // const [followed, setFollowed] = useState(false)

  const sendFollow = (feed_id=1, source_id) => {
    dispatch(follow(feed_id, source_id))
  }

  return(
    <div>
      {source.name}
      <button onClick={()=> sendFollow(source.id)}>Follow</button>
    </div>
  )
}

export default SourceCard
