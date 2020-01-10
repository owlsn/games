import axios from 'axios'
import actionType from '../constants/action'
// import { createAction } from 'redux-actions'

// export const selectSubreddit = createAction(
//   actionType.SELECT_SUBREDDIT,
//   subreddit => subreddit
// )

// export const invalidateSubreddit = createAction(
//   actionType.INVALIDATE_SUBREDDIT,
//   subreddit => subreddit
// )

// export const requestPosts = createAction(
//   actionType.REQUEST_POSTS,
//   subreddit => subreddit
// )


// export const receivePosts = createAction(
//   actionType.RECEIVE_POSTS,
//   (subreddit, json) => ({
//     subreddit,
//     posts: json.data.children.map(child => child.data),
//     receivedAt: Date.now()
//   })
// )


export const selectSubreddit = subreddit => ({
  type: actionType.SELECT_SUBREDDIT,
  subreddit
})


export const invalidateSubreddit = subreddit => ({
  type: actionType.INVALIDATE_SUBREDDIT,
  subreddit
})

export const requestPosts = subreddit => ({
  type: actionType.REQUEST_POSTS,
  subreddit
})

export const receivePosts = (subreddit, json) => ({
  type: actionType.RECEIVE_POSTS,
  subreddit,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now()
})

const fetchPosts = subreddit => dispatch => {
  dispatch(requestPosts(subreddit))
  return axios.get(`https://www.reddit.com/r/${subreddit}.json`)
  .then(response => { if(response.status === 200){
    return response.data
  }})
  .then(json => {
    dispatch(receivePosts(subreddit, json))
  })
  // .then(json => dispatch(receivePosts(subreddit, json)))
  // return fetch(`https://www.reddit.com/r/${subreddit}.json`)
  //   .then(response => response.json())
  //   .then(json => dispatch(receivePosts(subreddit, json)))
}

const shouldFetchPosts = (state, subreddit) => {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), subreddit)) {
    return dispatch(fetchPosts(subreddit))
  }
}