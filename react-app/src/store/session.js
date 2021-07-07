

// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";

const ADD_FEED = 'feeds/ADD_FEED'
const DELETE_FEED = 'feeds/DELETE_FEED'

const addFeed = (feed) => ({
  type: ADD_FEED,
  feed
})

const deleteFeed = (feed) => ({
  type: DELETE_FEED,
  feed
})

export const saveArticle = (article_id) => async (dispatch) => {
 await fetch("/api/users/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({article_id})
  })
}

export const unsaveArticle = (article_id) => async (dispatch) => {
  await fetch("/api/users/unsave", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({article_id})
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

const setUser = (user) => ({
    type: SET_USER,
    payload: user
});

const removeUser = () => ({
    type: REMOVE_USER,
})


export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/',{
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  if (data.errors) {
    return;
  }

  dispatch(setUser(data))
}
export const loadUser = () => async (dispatch) => {
  const response = await fetch('/api/users/me/')
  const user = await response.json()
  dispatch(setUser(user))
}
export const login = (email, password) => async (dispatch)  => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  const data = await response.json();
  if (data.errors) {
    return data;
  }

  dispatch(setUser(data))
  return {};
}

export const logout = () => async (dispatch) => {
   await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    }
  });

  dispatch(removeUser());
};


export const signUp = (username, email, password) => async (dispatch)  => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const data = await response.json();
  if (data.errors) {
    return data;
  }

  dispatch(setUser(data))
  return {};
}
const initialState = { user: null };

export default function reducer(state=initialState, action) {
  let newState = {...state}
  let newFeeds = state.user?.feeds
  switch (action.type) {
    case SET_USER:
      return {user: action.payload}
    case REMOVE_USER:
      return {user: null}
    case ADD_FEED:
        newFeeds.push(action.feed)
        return newState
    case DELETE_FEED:
        newFeeds.filter((feed) => feed.id !== action.feed.id)
      return newState
    default:
       return state;
        }
      }
