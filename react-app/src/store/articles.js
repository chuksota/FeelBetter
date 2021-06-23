const LOAD_ARTICLES = "articles/LOAD_ARTICLES"
const LOAD_TODAYS = "articles/LOAD_TODAYS"
const UNLOAD = 'articles/UNLOAD'
export const unload = () => ({
  type: UNLOAD
})
const loadArticles = (feed) => ({
  type: LOAD_ARTICLES,
  feed
})

const loadTodays = (articles) => ({
  type: LOAD_TODAYS,
  articles
})

export const loadA = (id) => async (dispatch) =>{
  const response = await fetch(`/api/source/${id}`)

  const data = await response.json()
  dispatch(loadArticles(data))
}

export const loadToday = (user_id) => async (dispatch) => {
  const response = await fetch('/api/source/allArts', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user_id})
  })
  const data = await response.json()
  dispatch(loadTodays(data))
}

const initialState= {'all': {}, 'loaded': false}
export default function articles(state=initialState, action) {
  let newState = {'all':{}}
  switch (action.type) {
      case LOAD_ARTICLES:
        action.feed.posts.forEach((post)=>{
          newState.all[post.title] = post
        })
        newState.loaded = true
        return newState
      case LOAD_TODAYS:
        action.articles.todays.forEach((post)=> {
          newState.all[post.title] = post
        })
        newState.loaded = true
        return newState
      case UNLOAD:
        return {...initialState}
      default:
          return state;
  }
}
