import { SELECT_EXCHANGE } from '../actions/index';

export default function(state = 'CoinBase', action) {
  switch(action.type) {
  case SELECT_EXCHANGE:
  console.log('Select Exchange Reducer action', action)
    return action.payload.data
  }
  return state
}