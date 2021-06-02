const LOAD_FEEDS = 'feeds/LOAD_FEEDS'
const ADD_FEED = 'feeds/ADD_FEED'

const loadFeeds = (feeds) => ({
  type: LOAD_FEEDS,
  feeds
})


export const load = (user_id) => async (dispatch) => {
  console.log(user_id)
  const response = await fetch("/api/feed/userFeeds", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id
    }),
  });
  const data = await response.json()
  console.log(data)
  if (data.errors){
    return;
  }
  dispatch(loadFeeds(data))
}

const initialState = {};

export default function feeds(state=initialState, action) {
  console.log(LOAD_FEEDS)
  switch (action.type) {

      case LOAD_FEEDS:
          let newState = {...state}
          action.feeds.feedsforEach((feed)=>{
            newState[feed.id] = feed
          })
          return newState

      default:
          return state;
  }
}
