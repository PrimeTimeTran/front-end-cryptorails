import { SELECT_COIN } from '../actions/index';

export default function(state = 'BTC', action) {
  switch(action.type) {
  case SELECT_COIN:
    return action.payload
  default:
    return state
  }
}