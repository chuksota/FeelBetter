import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import ProfileDrawer from '../Profile/profileDrawer/ProfileDrawer'
import ArticleCard from '../Articles/ArticleCard'
import { loadToday, unload } from '../../store/articles'
import '../Articles/articles.css'
const Profile = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const randInt = Math.floor(Math.random() * 9) + 1
  const quotes =
    [
      "“I found that with depression, one of the most important things you can realize is that you’re not alone. You’re not the first to go through it, you’re not gonna be the last to go through it,” — Dwayne “The Rock” Johnson",
      "“Life doesn’t make any sense without interdependence. We need each other, and the sooner we learn that, the better for us all.”  — Erik Erikson",
      "“Mental health problems don’t define who you are. They are something you experience. You walk in the rain and you feel the rain, but, importantly, YOU ARE NOT THE RAIN.” — Matt Haig",
      "“The humanity we all share is more important than the mental illnesses we may not” ― Elyn R. Saks",
      "“You look at me and cry; everything hurts. I hold you and whisper: but everything can heal.” ― Rupi Kaur",
      "“I understand your pain. Trust me, I do. I’ve seen people go from the darkest moments in their lives to living a happy, fulfilling life. You can do it too. I believe in you. You are not a burden. You will NEVER BE a burden.” — Sophie Turner",
      "“The experience I have had is that once you start talking about [experiencing a mental health struggle], you realize that actually you’re part of quite a big club.” — Prince Harry",
      "“There is hope, even when your brain tells you there isn’t.” ― John Green",
      "“Anything that’s human is mentionable, and anything that is mentionable can be more manageable. When we can talk about our feelings, they become less overwhelming, less upsetting, and less scary.” — Fred Rogers"
    ]

  const articles = useSelector(state => state.articles.all)
  const loaded = useSelector(state => state.articles.loaded)
  const articlesArr = Object.values(articles)

  useEffect(() => {
    dispatch(loadToday(user.id))
    return () => dispatch(unload())
  }, [dispatch, user.id])

  const [isLoading, setIsLoading] = useState(true)
  return (
    <>
      <ProfileDrawer setIsLoading={setIsLoading}/>
       <h1 className="header_one">{quotes[randInt]}</h1>
      { loaded? (
      <div className='right_view_area'>
        {articlesArr.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>
      ): <div><img className='loading-Icon' alt='loading' src='https://feelbetterbucket.s3.ca-central-1.amazonaws.com/Spin-1s-237px.svg'></img></div>}

    </>
  )
}

export default Profile
