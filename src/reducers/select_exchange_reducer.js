import { SELECT_EXCHANGE } from '../actions/index';

export default function(state = 'Coinbase', action) {
  switch(action.type) {
  case SELECT_EXCHANGE:
    return action.payload
  }
  return state
}