import { SELECT_CHART } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
  case SELECT_CHART:
    return action.payload

  default:
    return state
  }
}
