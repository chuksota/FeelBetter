import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import ProfileDrawer from '../Profile/profileDrawer/ProfileDrawer'
import {loadA} from '../../store/articles'
import ArticleCard from './ArticleCard'



const Source = () => {
  const dispatch = useDispatch()
  const feeds = useSelector(state=> state.session.user.feeds)
  const {id} =  useParams()
  const articles = useSelector(state=> state.articles)
  const articlesArr = Object.values(articles)
  
  useEffect(()=>{
     dispatch(loadA(id))
  },[dispatch, id])



  return (
  <>
     <ProfileDrawer feeder={feeds}/>

    <div className="right_view_area">
      {articlesArr.map((article)=>(
        <ArticleCard key={article.id} article={article}/>
      ))}
    </div>
    </>
  );
}

export default Source
