const LOAD_ARTICLES = "source/LOAD_ARTICLES"

const loadArticles = (feed) => ({
  type: LOAD_ARTICLES,
  feed
})

export const loadA = (id) => async (dispatch) =>{
  const response = await fetch(`/api/source/${id}`)

  const data = await response.json()
  console.log(data)
  dispatch(loadArticles(data))
}

const initialState= {}
export default function articles(state=initialState, action) {
  let newState = {}
  switch (action.type) {
      case LOAD_ARTICLES:
        action.feed.posts.forEach((post)=>{
          newState[post.title] = post
        })
        return newState
      default:
          return state;
  }
}
