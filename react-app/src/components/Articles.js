import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import ProfileDrawer from './profileDrawer/ProfileDrawer'
import {loadA} from '../store/source'

const Source = () => {
  const dispatch = useDispatch()
  const feeds = useSelector(state=> state.session.user.feeds)
  const {id} =  useParams()
  const articles = useSelector(state=> state.sources)
  console.log(articles)
  useEffect(()=>{
    dispatch(loadA(id))
  },[dispatch, id])
  return (
    <>
    <ProfileDrawer feeder={feeds}/>
    <div className='right_view_area'>
      <div>{articles[1]?.title}</div>
      <div>{articles[1]?.description}</div>
    </div>
    </>
  )
}

export default Source
