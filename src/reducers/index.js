import { combineReducers } from 'redux'
import  posts  from '../actions/posts'
// import {
//   // SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT,
//   // REQUEST_POSTS, RECEIVE_POSTS
//   // posts
// } from '../actions'

// const selectedSubreddit = (state = 'reactjs', action) => {
//   switch (action.type) {
//     case SELECT_SUBREDDIT:
//       return action.subreddit
//     default:
//       return state
//   }
// }

import { handleAction } from 'redux-actions';

const postReducer = handleAction(
  posts,
  (store, action) => ({
    get : true
  }),
  {
    get : false
  }
)

// const posts = (state = {
//   isFetching: false,
//   didInvalidate: false,
//   items: []
// }, action) => {
//   switch (action.type) {
//     case INVALIDATE_SUBREDDIT:
//       return {
//         ...state,
//         didInvalidate: true
//       }
//     case REQUEST_POSTS:
//       return {
//         ...state,
//         isFetching: true,
//         didInvalidate: false
//       }
//     case RECEIVE_POSTS:
//       return {
//         ...state,
//         isFetching: false,
//         didInvalidate: false,
//         items: action.posts,
//         lastUpdated: action.receivedAt
//       }
//     default:
//       return state
//   }
// }

// const postsBySubreddit = (state = { }, action) => {
//   switch (action.type) {
//     case INVALIDATE_SUBREDDIT:
//     case RECEIVE_POSTS:
//     case REQUEST_POSTS:
//       return {
//         ...state,
//         [action.subreddit]: posts(state[action.subreddit], action)
//       }
//     default:
//       return state
//   }
// }

const rootReducer = combineReducers({
  postReducer
  // postsBySubreddit,
  // selectedSubreddit
})

export default rootReducer
