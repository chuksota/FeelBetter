import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import ProfileDrawer from '../Profile/profileDrawer/ProfileDrawer'
import {loadA} from '../../store/articles'
import ArticleCard from './ArticleCard'
import {loadS} from '../../store/sources'
import './articles.css'
import {Button} from '@material-ui/core'
const Source = () => {
  const dispatch = useDispatch()
  const feeds = useSelector(state=> state.session.user.feeds)
  const {id} =  useParams()
  const articles = useSelector(state=> state.articles)
  const articlesArr = Object.values(articles)
  const sources = useSelector(state=>state.sources)
  let name

  if(sources[id]){
    name = sources[id].name
  }

  useEffect(()=>{
     dispatch(loadA(id))
     dispatch(loadS())
  },[dispatch, id])



  return (
  <>
     <ProfileDrawer feeder={feeds}/>

    <div className="right_view_area">
      <h1 className="feed_header">{`${name} - All`} <Button></Button> </h1>
      {articlesArr.map((article)=>(
        <ArticleCard key={article.title} article={article}/>
      ))}
    </div>
    </>
  );
}

export default Source
