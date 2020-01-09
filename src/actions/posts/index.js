import { createAction } from 'redux-actions'
import  actionType  from '../../constants/action'
import  urls  from '../../constants/urls'
import axios from 'axios'

const  posts = createAction(actionType.POST, params => {
  return axios.get(urls.POST + params)
})

export default posts
