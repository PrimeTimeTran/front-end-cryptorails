import { SELECT_EXCHANGE } from '../actions/index';

export default function(state = 'Coinbase', action) {
  switch(action.type) {
  case SELECT_EXCHANGE:
  console.log('Select Exchange Reducer action', action)
    return action.payload
  }
  return state
}