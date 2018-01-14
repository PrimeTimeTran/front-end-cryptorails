import { FETCH_PRICES } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
  case FETCH_PRICES:
    return [ action.payload.data, ...state ];
  default:
    return state
  }
}