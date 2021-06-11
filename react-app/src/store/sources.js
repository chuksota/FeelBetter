const LOAD_SOURCES = 'sources/LOAD_SOURCES'
const ADD_SOURCE = 'sources/ADD_SOURCE'

const loadSources = (sources) => ({
  type: LOAD_SOURCES,
  sources
})

const addASource = (source) => ({
  type: ADD_SOURCE,
  source
})
export const unfollow = (feed_id, source_id) => async (dispatch)=> {
    await fetch('/api/source/unfollow',{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({feed_id, source_id})
    })
}

export const follow = (feed_id, source_id) => async (dispatch) => {
    await fetch('/api/source/follow', {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({feed_id, source_id})
  })
}

export const addSource = (name, url, feed_id) => async (dispatch) => {
  const response = fetch('/api/source/add', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name, url, feed_id})
  })
  const data = await (await response).json()
  dispatch(addASource(data))
}
export const loadS = () => async (dispatch) => {
  const response = await fetch("/api/source/all")
  const data = await response.json()
  dispatch(loadSources(data))
}

let initialState = {}
export default function feeds(state=initialState, action) {
  switch (action.type) {
      case LOAD_SOURCES:
        return {...action.sources}
      default:
          return state;
  }
}
