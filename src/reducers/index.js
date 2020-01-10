import { combineReducers } from 'redux'
import actionType from '../constants/action'
import { handleAction } from 'redux-actions'

const selectedSubreddit = handleAction(
  actionType.SELECT_SUBREDDIT,
  (state = 'reactjs', action) => action.subreddit,
  'reactjs'
)

// const selectedSubreddit = (state = 'reactjs', action) => {
//   switch (action.type) {
//     case actionType.SELECT_SUBREDDIT:
//       return action.subreddit
//     default:
//       return state
//   }
// }

const posts = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case actionType.INVALIDATE_SUBREDDIT:
      return {
        ...state,
        didInvalidate: true
      }
    case actionType.REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case actionType.RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}


const postsBySubreddit = (state = { }, action) => {
  switch (action.type) {
    case actionType.INVALIDATE_SUBREDDIT:
    case actionType.RECEIVE_POSTS:
    case actionType.REQUEST_POSTS:
      return {
        ...state,
        [action.subreddit]: posts(state[action.subreddit], action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit
})

export default rootReducer
