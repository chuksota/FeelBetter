import React from 'react'
import {useSelector} from 'react-redux'
import ProfileDrawer from '../Profile/profileDrawer/ProfileDrawer'
import BookmarkCard from '../Bookmarked/Bookmark Card'

const Bookmarked = () => {
  const userArticles = useSelector(state=> state.session.user.articles)
  const feeds = useSelector(state=> state.session.user.feeds)
  const user = useSelector(state=> state.session.user)
  return(
    <>
    <ProfileDrawer feeder={feeds}/>
    <div className="right_view_area">
      <h1 className="feed_header">{`${user.username}'s saved articles`}  </h1>
      {userArticles.map((article)=>(
        <BookmarkCard key={article.title} article={article}/>
      ))}
    </div>
    </>
  )
}

export default Bookmarked
