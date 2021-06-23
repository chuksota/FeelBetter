import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import ProfileDrawer from '../Profile/profileDrawer/ProfileDrawer'
import {loadA, unload} from '../../store/articles'
import ArticleCard from './ArticleCard'
import {loadS} from '../../store/sources'
import './articles.css'
import {Button} from '@material-ui/core'
const Source = () => {
  const dispatch = useDispatch()
  const feeds = useSelector(state=> state.session.user.feeds)
  const {id} =  useParams()
  const articles = useSelector(state=> state.articles.all)
  const loaded = useSelector(state=>state.articles.loaded)
  const articlesArr = Object.values(articles)
  const sources = useSelector(state=>state.sources)
  let name
  if(sources[id]){
    name = sources[id].name
  }

  useEffect(()=>{
     dispatch(loadA(id))
     dispatch(loadS())
     return () => dispatch(unload())
  },[dispatch, id])



  return (
  <>
     <ProfileDrawer feeder={feeds}/>
    { loaded? (
    <div className="right_view_area">
      <h1 className="feed_header">{`${name} - All`} <Button></Button> </h1>
      {articlesArr.map((article)=>(
        <ArticleCard key={article.title} article={article}/>
      ))}
    </div>
    ): <div className='loading-Icon'><img  alt='loading' src='https://feelbetterbucket.s3.ca-central-1.amazonaws.com/Spin-1s-237px.svg'/></div>}
    </>
  );
}

export default Source
