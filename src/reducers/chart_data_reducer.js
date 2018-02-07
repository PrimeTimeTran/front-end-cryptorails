import { SELECTED_CHART } from '../actions/index';
import { getData } from '../containers/utils'

export default function(state = getData(), action) {
  switch(action.type) {
  case SELECTED_CHART:
    return action.payload
  }
  return state
}