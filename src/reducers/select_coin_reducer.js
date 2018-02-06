import { SELECT_COIN } from '../actions/index';

export default function(state = null, action) {
  console.log('Select Coin Reducer', state);
  switch(action.type) {
  case SELECT_COIN:
    return action.payload
  }
  return state
}