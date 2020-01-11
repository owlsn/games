import { handleAction } from 'redux-actions'
import { LOGIN } from '../../constants/actions'

export default handleAction(
  LOGIN,
  (state, action) => ({
    ...state,
    username: 'testusername',
    password: 'testpassword'
  }),
  {
    username: 'testusername',
    password: 'testpassword'
  }
)
