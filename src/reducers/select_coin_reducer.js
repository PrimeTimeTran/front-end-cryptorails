import { SELECT_COIN } from '../actions/index';

export default function(state = 'ETH', action) {
  console.log('CoinReducer:', action.payload);
  switch(action.type) {
  case SELECT_COIN:
    return action.payload
  }
  return state
}