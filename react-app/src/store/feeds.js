
const ADD_FEED = 'feeds/ADD_FEED'
const DELETE_FEED = 'feeds/DELETE_FEED'

// const loadFeeds = (feeds) => ({
//   type: LOAD_FEEDS,
//   feeds
// })

const addFeed = (feed) => ({
  type: ADD_FEED,
  feed
})

const deleteFeed = (feed) => ({
  type: DELETE_FEED,
  feed
})

// export const load = () => async (dispatch) => {
//   const response = await fetch("/api/feed/userFeeds", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },

//   });
//   const data = await response.json()
//   if (data.errors){
//     return;
//   }
//   dispatch(loadFeeds(data))
// }

export const addAndFollow = (user_id, name, source_id) => async (dispatch) => {
    await fetch('/api/feed/both',{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({user_id, name, source_id})
  })
}

export const add = (name) => async (dispatch) => {
  const response = await fetch("/api/feed", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name})
  })
  const data = await response.json()

  dispatch(addFeed(data))
}

export const deleteOne = (id) => async (dispatch) => {
  const response = await fetch(`/api/feed/${id}`,{
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  }
  }),
  feed = response.json()
  dispatch(deleteFeed(feed))
}
const initialState = {};

export default function feeds(state=initialState, action) {
  switch (action.type) {

      // case LOAD_FEEDS:
      //     let newState = {...state}
      //     action.feeds.forEach((feed)=>{
      //       newState[feed.id] = feed
      //     })
      //     return newState
      case ADD_FEED:
        return {
          ...state,
          [action.feed.id]: action.feed
        }
      case DELETE_FEED:
        let newState = {...state}
        delete newState[action.feed.id]
        return newState
      default:
          return state;
  }
}
